// custom typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
import 'prismjs/themes/prism-okaidia.css'
import ClipboardJS from 'clipboard'

export function onRouteUpdate() {
  // TODO: タイミングよくわからんから雑に待つ
  setTimeout(bindClipboardCopyButton, 500);
}

/**
 * Clipboard にコピーボタンを pre に付与する
 */
function bindClipboardCopyButton() {
  // al pre tags on the page
  const pres = document.getElementsByTagName("pre");
  const clipboardSvg = `<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M4 7V21H18V23H4C2.9 23 2 22.1 2 21V7H4M20 3C21.1 3 22 3.9 22 5V17C22 18.1 21.1 19 20 19H8C6.9 19 6 18.1 6 17V5C6 3.9 6.9 3 8 3H11.18C11.6 1.84 12.7 1 14 1C15.3 1 16.4 1.84 16.82 3H20M14 3C13.45 3 13 3.45 13 4C13 4.55 13.45 5 14 5C14.55 5 15 4.55 15 4C15 3.45 14.55 3 14 3M10 7V5H8V17H20V5H18V7M15 15H10V13H15M18 11H10V9H18V11Z" /></svg>`

  // reformat html of pre tags
  if (pres) {
    for (let i = 0; i < pres.length; i++) {
      // check if its a pre tag with a prism class
      if (isPrismCopyableClass(pres[i])) {
        // insert code and copy element
        pres[i].innerHTML = `<div class="copy">${clipboardSvg}</div>${pres[i].innerHTML}`
      }
    }
  }

  // create clipboard for every copy element
  const clipboard = new ClipboardJS('.copy', {
    target: (trigger) => {
      return trigger.nextElementSibling;
    }
  });

  // do stuff when copy is clicked
  clipboard.on('success', (event) => {
    event.trigger.innerHTML = "";
    setTimeout(() => {
      event.clearSelection();
      event.trigger.innerHTML = clipboardSvg;
    }, 1000);
  });

  // helper function
  function isPrismCopyableClass(preTag) {
    const matched = preTag.className.match(/^language-([^ ]+).*$/, '$1');
    return matched && matched[1] !=='diff';
  }
}

const inquirer = require("inquirer");
const fse = require('fs-extra');

const now = new Date();
const yyyy = now.getFullYear();
const mm = ("0"+(now.getMonth()+1)).slice(-2);
const dd = ("0"+now.getDate()).slice(-2);
const baseSlug = `blog/${yyyy}/${mm}`

const questions = [
  {
    type: 'input',
    name: 'slug',
    message: `slug: ${baseSlug}/`,
    validate: function(value) {
      if (value.match(/^[a-z-]+$/i)) {
        return true;
      }
      return 'Allow only "kebab-case"';
    }
  }
];

(async () => {
  const answers = await inquirer.prompt(questions);
  const { slug } = answers;
  const generateDir = `content/${baseSlug}/${slug}`;
  await fse.mkdirp(generateDir);
  const template = await fse.readFile(`generator/template.mdx`);
  const newMdx = template.toString().replace("${date}", `${yyyy}-${mm}-${dd}`);
  await fse.writeFile(`${generateDir}/index.mdx`, newMdx);

  console.log(`📙 Generated!: ${generateDir}/index.mdx`);
})();


const fs = require('fs');

let content = '';
let totalCount = 0;

fs.readdir('./', function (error, filesInRoot) {
  if (error) {
    console.log(error);
  } else {
    filesInRoot.forEach((item) => {
      const stats = fs.statSync(item);
      if (stats.isDirectory() && !(/git/.test(item))) {
        const files = fs.readdirSync(item);
        content += `<details><summary>${item}(count: ${files.length})</summary>\r\n\n`;

        files.forEach(file => {
          totalCount ++;
          content += `[${file}](https://github.com/wukong1995/leetcode-problem/blob/master/${item}/${file})\r\n\r`;
        });

        content += '</details>'
      }
    });
    content = `# leetcode-problem (total count: ${totalCount})\r\n` + content;
    fs.writeFileSync('./README.md', content, 'utf8');
  }
});
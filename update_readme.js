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
        content += `### ${item}\r`;
        const files = fs.readdirSync(item);
        files.forEach(file => {
          totalCount ++;
          content += `[${file}](https://github.com/wukong1995/leetcode-problem/blob/master/${item}/${file})\r\r`;
        });
      }
    });
    content = `# leetcode-problem (totalCount: ${totalCount})\r` + content;
    fs.writeFileSync('./README.md', content, 'utf8')
  }
});
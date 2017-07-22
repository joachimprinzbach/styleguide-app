const cpx = require('cpx');
const fs = require('fs');
const glob = require('glob');
const path = require('path');
const escapeHtml = require('escape-html');
const stripIndent = require('strip-indent');

const options = {
  clean: true,
};
const sourceDir = "src/app/examples/**/*";
const destinationDir = "src/assets/examples";

cpx.copy(sourceDir, destinationDir, options, () => {
  glob(destinationDir + '/**/*.*', (err, files) => {
    files.forEach(file => {
      var dir = path.dirname(file);
      var filename = path.basename(file);
        if (path.extname(file) === '.html') {
            let fileContent = fs.readFileSync(file);
            let finalLines = [];
            let lines = fileContent.toString().split('\n');
            lines.forEach(line => {
                if (!line.includes("app-example-viewer-page")) {
                    finalLines.push(line);
                }
            });
            let intendedString = stripIndent(finalLines.join('\n'));
            let escaped = escapeHtml(intendedString);
            fs.writeFileSync(file, escaped, 'utf8');
        }
      fs.renameSync(file, dir + "/" + filename + ".txt");
    });
  });
});




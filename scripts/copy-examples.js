const cpx = require('cpx');
const fs = require('fs');
const glob = require('glob');
const path = require('path');

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
      fs.renameSync(file, dir + "/" + filename + ".txt");
    });
  });
});




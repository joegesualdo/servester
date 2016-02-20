var fs = require('fs');
var path = require('path');

function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}
// Checks if a file or directory exists
function pathExists(path, callback) {
  // TODO: Might need a try catch both for .access() function
  fs.access(path, fs.F_OK, function(err) {
    if (err) {
      callback(null, false)
    } else {
      callback(null, true)
    }
  });
}

module.exports = {
  getDirectories: getDirectories,
  pathExists: pathExists
}

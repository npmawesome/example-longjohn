
function delayed(fn, delay) {
  setTimeout(fn, delay || 100);
}

function delayedError(msg, cb) {
  delayed(function() {throw new Error(msg);});
}

process.on('uncaughtException', function(err) {
  console.log('\n=======================================================================\n');
  console.log(err.stack);
  console.log('\n=======================================================================\n\n');
});

module.exports = function(msg) {
  var chalk = require('chalk');
  console.log(chalk.yellow(msg));

  delayed(function() {
    delayedError('Error message');
  });
};
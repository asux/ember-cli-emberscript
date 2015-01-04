var emberScript = require('broccoli-ember-script');

function EmberPreprocessor() {
  this.name = 'ember-cli-emberscript';
  this.ext = 'js';
}

EmberPreprocessor.prototype.toTree = function(tree) {
  var options = {
    bare: true
  };

  return emberScript(tree, options);
};

module.exports = EmberPreprocessor;

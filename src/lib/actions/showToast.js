'use strict';
var loadScript = require('@adobe/reactor-load-script');
// Loads tiny-toast: https://github.com/bahmutov/tiny-toast
var loadScriptPromise = loadScript('https://bit.ly/2TvaI5o');

module.exports = function(settings) {
  loadScriptPromise.then(function() {
    var extensionSettings = turbine.getExtensionSettings();
    tinyToast.show(settings.message).hide(extensionSettings.duration);
  });
};

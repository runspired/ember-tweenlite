/* global define, self */
(function() {
  function fakeTweenLite() {
    var error = "TweenLite is not available. Either the bower package is missing or your app is in Fastboot Mode.";
    this.to = function() {
      throw Error(error);
    };
    throw Error(error);
  }

  function vendorModule() {
    'use strict';
    return { 'default': self['TweenLite'] || fakeTweenLite };
  }

  define('tweenlite', [], vendorModule);
})();

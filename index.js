/*jshint node:true*/
/* global require, module */
'use strict';

var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');


module.exports = {
  name: 'ember-tweenlite',

  included: function(app) {
    this._super.included.apply(this, arguments);

    // see: https://github.com/ember-cli/ember-cli/issues/3718
    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    this.importDependencies(app);
  },

  importDependencies: function(app) {
    if (arguments.length < 1) {
      throw new Error('Application instance must be passed to import');
    }

    var vendor = this.treePaths.vendor;

    if (!process.env.EMBER_CLI_FASTBOOT) {
      if (app.env === "production") {
        app.import(app.bowerDirectory + '/gsap/src/minified/TweenLite.min.js', { prepend: true });
        app.import(app.bowerDirectory + '/gsap/src/minified/plugins/CSSPlugin.min.js', { prepend: true });
      } else {
        app.import(app.bowerDirectory + '/gsap/src/uncompressed/TweenLite.js', { prepend: true });
        app.import(app.bowerDirectory + '/gsap/src/uncompressed/plugins/CSSPlugin.js', { prepend: true });
      }
    }

    app.import(vendor + '/shims/tweenlite.js');
  }

};

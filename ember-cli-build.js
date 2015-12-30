/*jshint node:true*/
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

    app.import(vendor + '/gsap/src/minified/TweenLite.min.js', { prepend: true });
  },

  treeForVendor: function(vendorTree) {
    var trees = [];
    var tweenlightPath = this.project.bowerDirectory + '/gsap/src/minified/';
    if (vendorTree) {
      trees.push(vendorTree);
    }

    trees.push(new Funnel(tweenlightPath, {
      destDir: 'tweenlite',
      include: ['TweenLite.min.js']
    }));

    return mergeTrees(trees);
  }
};

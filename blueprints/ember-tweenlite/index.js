/*jshint node:true*/
module.exports = {
  description: 'Bower Installs gsap, which contains TweenLite',

  normalizeEntityName: function() {},

  afterInstall: function() {
    this.addBowerPackageToProject('gsap', '1.18.2');
  }

};

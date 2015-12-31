Ember-tweenlite
===============

[![npm version](https://badge.fury.io/js/ember-tweenlite.svg)](http://badge.fury.io/js/ember-tweenlite)
[![Build Status](https://travis-ci.org/runspired/ember-tweenlite.svg)](https://travis-ci.org/runspired/ember-tweenlite)

Installs `gsap` and exposes `tweenlite` to your project.  It will import the minified
version for production builds only, and won't import anything if your app is running
in `fastboot`.

## Usage

```cli
ember install ember-tweenlite
```

Then in your app or addon's module.
```js
import TweenLite from 'tweenlite';
```


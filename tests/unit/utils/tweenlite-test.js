import TweenLite from 'tweenlite'; // jshint ignore:line
import { module, test } from 'qunit';

module('Unit | Utility | tweenlite');

// Replace this with your real tests.
test('it works', function(assert) {
  let div = document.createElement('div');
  let result = new TweenLite(div, 1, { x:100 });
  assert.ok(result);
});

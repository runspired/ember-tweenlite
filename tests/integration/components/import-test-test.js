import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('import-test', 'Integration | Component | import test', {
  integration: true
});

// This test will fail if app import of TweenLite is broken
test('TweenLite is correctly imported by app', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{import-test}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#import-test}}
      template block text
    {{/import-test}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

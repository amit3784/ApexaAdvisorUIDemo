import { module, test } from 'qunit';
import { setupRenderingTest } from 'apexa-advisor-ui/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | create-advisor', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<CreateAdvisor />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <CreateAdvisor>
        template block text
      </CreateAdvisor>
    `);

    assert.dom().hasText('template block text');
  });
});

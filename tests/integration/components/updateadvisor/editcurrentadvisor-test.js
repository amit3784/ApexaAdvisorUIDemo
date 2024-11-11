import { module, test } from 'qunit';
import { setupRenderingTest } from 'apexa-advisor-ui/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | updateadvisor/editcurrentadvisor',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await render(hbs`<Updateadvisor::Editcurrentadvisor />`);

      assert.dom().hasText('');

      // Template block usage:
      await render(hbs`
      <Updateadvisor::Editcurrentadvisor>
        template block text
      </Updateadvisor::Editcurrentadvisor>
    `);

      assert.dom().hasText('template block text');
    });
  },
);

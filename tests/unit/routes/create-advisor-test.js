import { module, test } from 'qunit';
import { setupTest } from 'apexa-advisor-ui/tests/helpers';

module('Unit | Route | createAdvisor', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:create-advisor');
    assert.ok(route);
  });
});

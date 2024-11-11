import { module, test } from 'qunit';
import { setupTest } from 'apexa-advisor-ui/tests/helpers';

module('Unit | Route | addAdvisor', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:add-advisor');
    assert.ok(route);
  });
});

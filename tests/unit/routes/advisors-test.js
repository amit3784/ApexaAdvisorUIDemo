import { module, test } from 'qunit';
import { setupTest } from 'apexa-advisor-ui/tests/helpers';

module('Unit | Route | Advisors', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:advisors');
    assert.ok(route);
  });
});

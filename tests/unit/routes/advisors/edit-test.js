import { module, test } from 'qunit';
import { setupTest } from 'apexa-advisor-ui/tests/helpers';

module('Unit | Route | advisors/edit', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:advisors/edit');
    assert.ok(route);
  });
});

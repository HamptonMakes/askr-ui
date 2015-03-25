import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.ActiveModelAdapter.extend({
  host: ENV.apiHost,
  namespace: ENV.apiPrefix,
});

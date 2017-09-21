import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.attr(),
  type: DS.attr(),
  name: DS.attr(),
  purpose: DS.attr(),
  details: DS.attr(),
  locale: DS.attr(),
  image: DS.attr(),
  price: DS.attr()
});

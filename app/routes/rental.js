import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
   return this.store.findRecord('rental', params.rental_id);
   //Using params.rental_id in the model hook to locate the single rental record.
 },
 actions: {
   update(rental, params) {
     Object.keys(params).forEach(function(key){
       if(params[key]!==undefined) {
         rental.set(key, params[key]);
       }
     });
     rental.save();
     this.transitionTo('index');
   },
   destroyRental(rental) {
     rental.destroyRecord();
     this.transitionTo('index');
   }
 }
});

import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      rental: this.store.findAll('rental'),
      announcement: this.store.findAll('announcement')
    });
  },

  // setupController(controller, model) {
  //   this._super(...arguments);
  //   this.set(controller, 'rental', model.rental);
  //   this.set(controller, 'announcement', model.announcement);
  // },

  actions: {
    saveRental3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },

    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    },

    update(rental, params) {
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined) {
          rental.set(key, params[key]);
        }
      });
      rental.save();
      this.transitionTo('index');
    },

    saveAnnouncement3(params) {
      var newAnnouncement = this.store.createRecord('announcement', params);
      newAnnouncement.save();
      this.transitionTo('index');
    },
    destroyAnnouncement(announcement) {
      announcement.destroyRecord();
      this.transitionTo('index');
    }
  }
});

import { Template } from 'meteor/templating';

Template.accueil.helpers({
  dateAujourdhui: new Date(),
  formatDateTime: function(date) {
    return moment(date).format('DD/MM/YYYY HH:mm:ss');
  }
});

import { Template } from 'meteor/templating';

Template.accueil.helpers({
  dateAujourdhui: new Date()
});

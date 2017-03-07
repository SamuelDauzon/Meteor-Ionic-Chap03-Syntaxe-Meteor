import { Template } from 'meteor/templating';

Template.accueil.helpers({
  plusValue: -1500,
  estRentable: function(montant) {
    return (montant >= 0);
  }
});
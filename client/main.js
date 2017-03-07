import { Template } from 'meteor/templating';

Template.accueil.helpers({
  plusValue: 0,
  colorPlusValueTexte: function(montant) {
    if (montant > 0) {
      return 'green';
    }
    else if (montant < 0) {
      return 'red';
    }
    else {
      return 'black';
    }
  }
});
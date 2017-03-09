import { Template } from 'meteor/templating';

Template.evolution2Jours.helpers({
  action: {
    nom: 'AXA',
    place: 'Euronext Paris',
    produitFinancier: 'Action',
    aujourdhui: {
      ouverture: 23.52,
      plusBas: 23.465,
      plusHaut: 23.935,
      fermeture: 23.725,
      volume: 5618000
    },
    hier: {
      ouverture: 23.575,
      plusBas: 23.405,
      plusHaut: 23.66,
      fermeture: 23.58,
      volume: 5216000
    }
  }
});
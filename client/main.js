import { Template } from 'meteor/templating';

Template.listeUtilisateur.helpers({
  listeUtilisateur: [
    {
      prenomNom: 'Jean',
      age: 28,
      fonction: 'Lead développeur'
    },
    {
      prenomNom: 'Antoine',
      age: 25,
      fonction: 'Développeur'
    }
  ]
});
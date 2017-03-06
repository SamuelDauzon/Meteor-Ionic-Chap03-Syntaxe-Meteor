import { Template } from 'meteor/templating';

Template.tableauProduit.helpers({
  listeProduit: [
    {
      nom: "Farine",
      prix: "1.12"
    },
    {
      nom: "Levure",
      prix: "0.3"
    }
  ]
});
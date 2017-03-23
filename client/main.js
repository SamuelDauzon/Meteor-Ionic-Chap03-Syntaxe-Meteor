import { Template } from 'meteor/templating';

Template.accueil.helpers({
  'utilisateur': function() {
    return { pseudo: 'noellie' }
  }
});
import { Template } from 'meteor/templating';

Template.definirPrenom.events({
  'submit form': function(event) {
    event.preventDefault();

    var prenom = event.target.prenom.value;
    Session.set('prenom', prenom);
    event.target.prenom.value = '';

    event.stopPropagation();
  }
});

Template.afficherPrenom.helpers({
  'prenom': function() {
    return Session.get('prenom');
  }
});
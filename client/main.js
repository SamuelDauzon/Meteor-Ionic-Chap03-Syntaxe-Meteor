import { Template } from 'meteor/templating';

Template.ajouterMessage.events({
  'submit form[name="ajouterMessageForm"]': function(event) {
    event.preventDefault();

    var message = event.target.message.value;
    alert(message);
    event.target.message.value = '';

    event.stopPropagation();
  }
});
import { Template } from 'meteor/templating';

Template.registerHelper("formatDateTime", function(date) {
  return moment(date).format('DD/MM/YYYY HH:mm:ss');
});

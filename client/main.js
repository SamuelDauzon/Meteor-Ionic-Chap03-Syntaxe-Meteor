import { Template } from 'meteor/templating';

Template.accueil.helpers({
  dateAujourdhui: new Date(),
  formatDateTime: function(date) {
    var date_texte = '';
    if (date.getDate() < 10) {
      date_texte += '0';
    }
    date_texte += date.getDate()+'/';
    var numero_mois = date.getMonth() + 1;
    if (numero_mois < 10) {
      date_texte += '0';
    }
    date_texte += numero_mois+'/';
    date_texte += date.getFullYear()+' ';
    date_texte += date.getHours()+':';
    date_texte += date.getMinutes()+':';
    date_texte += date.getSeconds();
    return date_texte;
  }
});

Router.route('/', function () {
  this.layout('layout');
  this.render('accueil');
  this.render('piedDePageAccueil', {to: 'piedDePage'});
});

Router.route('/a-propos', {
  template: 'aPropos'
});
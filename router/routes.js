Router.route('/', {
template: 'accueil'
});

Router.route('/a-propos', {
template: 'aPropos'
});

Router.configure({
  layoutTemplate: 'layout'
});
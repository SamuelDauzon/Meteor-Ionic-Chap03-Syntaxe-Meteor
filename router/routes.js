Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
  template: 'accueil',
  name: 'accueil'
});

Router.route('/a-propos', {
  template: 'aPropos'
});

Router.route('/utilisateur/profil/:pseudo', {
  template: 'profilUtilisateur',
  name: 'utilisateur.profil',
  data: function() {
    return {
      'utilisateur': {
        pseudo: this.params.pseudo
      }
    };
  }
});
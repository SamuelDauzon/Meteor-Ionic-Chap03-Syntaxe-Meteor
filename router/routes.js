Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
  template: 'accueil'
});

Router.route('/a-propos', {
  template: 'aPropos'
});

Router.route('/utilisateur/profil/:pseudo', {
  template: 'profilUtilisateur',
  data: function() {
    return {
      'utilisateur': {
        pseudo: this.params.pseudo
      }
    };
  }
});
Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
  template: 'accueil',
  name: 'accueil',
  onBeforeAction: function () {
    document.title = "Accueil Meteor";
  },
});

Router.route('/a-propos', {
  template: 'aPropos',
  name: 'aPropos',
  onBeforeAction: function () {
    document.title = "A propos";
  },
});

Router.route('/utilisateur/profil/:pseudo', {
  template: 'profilUtilisateur',
  name: 'utilisateur.profil',
  onBeforeAction: function () {
    document.title = "Profil utilisateur : "+this.params.pseudo;
  },
  data: function() {
    return {
      'utilisateur': {
        pseudo: this.params.pseudo
      }
    };
  }
});
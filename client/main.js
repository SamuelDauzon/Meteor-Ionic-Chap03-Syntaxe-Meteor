Meteor.startup(function () {
  document.querySelectorAll("footer, ul, li").forEach(function(element){
    element.addEventListener('click', capture, true);
    element.addEventListener('click', bouillonement, false);
  });
});

function capture(event) {
  console.log('Capture: ' + this.tagName);
}

function bouillonement(event) {
  console.log('Bouillonement: ' + this.tagName);
}
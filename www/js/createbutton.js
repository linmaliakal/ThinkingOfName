document.addEventListener('init', function(event) {
  console.log('This is a lifecycle event!', event.target);

  var page = event.target;
  if (page.matches('#Tab2')) {
    page.querySelector('ons-button').onclick = function() {
    ons.notification.alert('Hello world!');
    };
  }
});

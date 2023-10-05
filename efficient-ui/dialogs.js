document.body.addEventListener('click', function (event) {
  const dialog = event.target.closest('dialog'); // Find the closest dialog element
  if (event.target.matches('dialog')) {
    event.target.close();
  }
});

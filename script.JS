window.addEventListener('load', () => {
  const view1 = document.getElementById('view1');
  const view2 = document.getElementById('view2');

  // After 15 seconds, transition to second view
  setTimeout(() => {
    view1.classList.add('hidden');
    view2.classList.remove('hidden');
  }, 150);
});

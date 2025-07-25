window.addEventListener('load', () => {
  const view1 = document.getElementById('view1'); // image
  const view2 = document.getElementById('view2'); // text

  function loopTransition() {
    // Step 1: Fade to text
    view1.classList.add('hidden');
    view2.classList.remove('hidden', 'zoom-out');
    view2.classList.add('zoom-reset');

    // Step 2: After 1.5s, zoom out the text before switching back
    setTimeout(() => {
      view2.classList.remove('zoom-reset');
      view2.classList.add('zoom-out');

      // Wait for zoom-out to finish before switching to image
      setTimeout(() => {
        view2.classList.add('hidden');
        view1.classList.remove('hidden');

        // Step 3: Wait before restarting
        setTimeout(() => {
          loopTransition();
        }, 1500);
      }, 800); // match transition duration
    }, 1500);
  }

  loopTransition();
});

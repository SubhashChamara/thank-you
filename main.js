let newWindow = null;
let checkTimer = null;

function openPopup() {
  if (newWindow == null || newWindow.closed) {
    newWindow = window.open("popup.html", "_blank", "width=600,height=400");

    checkTimer = setInterval(() => {
      if (newWindow.closed) {
        console.log("Popup window closed.");
        clearInterval(checkTimer);
      }
    }, 500);
  } else {
    newWindow.focus();
  }
}

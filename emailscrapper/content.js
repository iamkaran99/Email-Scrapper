chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'findEmails') {
      var emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
      var emails = document.body.innerText.match(emailRegex);
      sendResponse(emails);
    }
  });
  
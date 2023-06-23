document.addEventListener('DOMContentLoaded', function() {
    var findEmailsButton = document.getElementById('findEmailsButton');
    var emailList = document.getElementById('emailList');
  
    findEmailsButton.addEventListener('click', function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'findEmails' }, function(response) {
          displayEmails(response);
        });
      });
    });
  
    function displayEmails(emails) {
      emailList.innerHTML = '';
      if (emails.length === 0 || emails == null ) {
        emailList.innerHTML = 'No emails found.';
      } else {
        for (var i = 0; i < emails.length; i++) {
          var listItem = document.createElement('li');
          listItem.textContent = emails[i];
          emailList.appendChild(listItem);
        }
      }
    }
  });
  
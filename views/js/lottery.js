// Get the ul element where the files will be displayed
var ul = document.getElementById('lottery-files');

// Get the contents of the Lottery-Js-UI submodule
fetch('../../Lottery-Js-UI')
  .then(response => response.text())
  .then(data => {
    // Split the data into file names
    var fileNames = data.split('\n');

    // Loop through the file names and fetch each file individually
    for (var i = 0; i < fileNames.length; i++) {
      var fileName = fileNames[i].trim();

      // Skip over empty file names and directories
      if (!fileName || fileName.endsWith('/')) {
        continue;
      }

      // Fetch the file contents and add them to the ul element
      fetch('../Lottery-Js-UI/' + fileName)
        .then(response => response.text())
        .then(fileContent => {
          var li = document.createElement('li');
          li.textContent = fileName + ': ' + fileContent;
          ul.appendChild(li);
        });
    }
  });

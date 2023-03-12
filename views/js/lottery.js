// Get the ul element where the files will be displayed
var ul = document.getElementById('lottery-files');

// Get the contents of the Lottery-Js-UI submodule
fetch('Lottery-Js-UI')
  .then(response => response.text())
  .then(data => {
    // Split the data into lines
    var lines = data.split('\n');

    // Loop through the lines and add them to the ul element
    for (var i = 0; i < lines.length; i++) {
      var li = document.createElement('li');
      li.textContent = lines[i];
      ul.appendChild(li);
    }
  });
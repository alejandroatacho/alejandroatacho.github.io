// Fetch the contents of the Lottery-Js-UI submodule
fetch('/Lottery-Js-UI/')
  .then(response => response.text())
  .then(data => {
    // Parse the HTML content of the submodule
    const parser = new DOMParser();
    const html = parser.parseFromString(data, 'text/html');

    // Get the files in the Lottery-Js-UI submodule
    const files = html.querySelectorAll('a');

    // Add each file as a list item to the lottery-files ul element
    const lotteryFiles = document.getElementById('lottery-files');
    files.forEach(file => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = `/Lottery-Js-UI/${file.innerText}`;
      a.innerText = file.innerText;
      li.appendChild(a);
      lotteryFiles.appendChild(li);
    });
  });
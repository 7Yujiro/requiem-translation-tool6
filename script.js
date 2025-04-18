function translate() {
  const text = document.getElementById('input').value;
  const lang = document.getElementById('language').value;
  const output = document.getElementById('output');

  if (!text) {
    output.innerText = "Please enter some text first.";
    return;
  }

  fetch('https://api.mymemory.translated.net/get?q=' + encodeURIComponent(text) + '&langpair=en|' + lang)
    .then(response => response.json())
    .then(data => {
      output.innerText = data.responseData.translatedText;
    })
    .catch(() => {
      output.innerText = "Translation failed. Try again.";
    });
}

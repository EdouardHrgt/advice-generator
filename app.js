const btn = document.querySelector('.logo');
btn.addEventListener('click', () => {
  quoteGenerator();
});

function quoteGenerator() {
  fetch('https://api.adviceslip.com/advice')
    .then((res) => {
      return res.json();
    })
    .then((dataList) => {
      const quote = dataList.slip;
      console.log(quote.advice);
      createEl(quote.advice);
    })
    .catch((err) => {
      console.error(err);
    });
}
quoteGenerator();
function createEl(text) {
  const container = document.querySelector('.quote__wrapper');
  if (container.firstChild) {
    container.removeChild(container.firstElementChild);
  }
  const blockQuote = document.createElement('blockquote');
  const newQuote = document.createTextNode(text);
  blockQuote.appendChild(newQuote);
  container.appendChild(blockQuote);
}


 let oneQuoteUrl = `https://simpsons-quotes-api.herokuapp.com/quotes`;
 let quote = "";
 let name = "";
 let image = "";
 let characterDirection = "";


 function newQuote() {
  axios.get(oneQuoteUrl)
    .then(function(response) { return response.data ;})
    .then(function(simpsons) {
    
      quote = simpsons[0].quote;
      name = simpsons[0].character;
      image = simpsons[0].image;
      characterDirection = simpsons[0].characterDirection;

      // Build a block of HTML

      let newSimpson = `
          <p><strong>${name}</strong></p>
          <p>${quote}</p>
          <img src="${image}" />
      `;

      document.querySelector('#simpsons').innerHTML = newSimpson;

    });
}

newQuote();

function newQuoteButton(event) {
  console.log("click");
  newQuote();
}

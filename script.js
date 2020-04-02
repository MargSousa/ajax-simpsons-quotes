
 let oneQuoteUrl = `https://simpsons-quotes-api.herokuapp.com/quotes`;

 axios.get(oneQuoteUrl)
    .then(function(response) { return response.data ;})
    .then(function(simpsons) {
    
      let quote = simpsons[0].quote;
      let name = simpsons[0].character;
      let image = simpsons[0].image;
      let characterDirection = simpsons[0].characterDirection;
      
      console.log(quote);
      console.log(name);
      console.log(image);
      console.log(characterDirection);

      // Build a block of HTML

      let newSimpson = `
          <p><strong>${name}</strong></p>
          <p>${quote}</p>
          <img src="${image}" />
      `;

      document.querySelector('#simpsons').innerHTML = newSimpson;

    });

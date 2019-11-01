// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>B {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector(".cards-container");


// MARK: Axis Call
axios.get("https://lambda-times-backend.herokuapp.com/articles")
	 .then( (response) => {
	 	//console.log(response.data)
	 	const allDataArray = Object.entries(response.data.articles);
	 	//console.log(allDataArray);
	 	const arrayCardContent = allDataArray
	 	allDataArray.map( (category) => {
	 		const article = category[1];
	 		//console.log(article);
	 		article.map( (content) => {
	 			//console.log(content);
	 			const newCard = Card(content);
	 			cardsContainer.appendChild(newCard);
	 		})
	 	});
	 	
	 })
	 .catch( (error) => {
	 	console.log(error);
	 })

// MARK: Card Component
function Card(props) {
	const createElement = (element) => { return document.createElement(element); }

	// creation
	const card = createElement("div");

	const headline = createElement("div");
	const author = createElement("div");

	const imageContainer = createElement("div");
	const authorName = createElement("span");

	const image = createElement("img");

	// style
	card.classList.add("card");

	headline.classList.add("headline");
	author.classList.add("author");
	imageContainer.classList.add("img-container");

	// structure
	card.appendChild(headline);
	card.appendChild(author);

	author.appendChild(imageContainer);
	author.appendChild(authorName);
	imageContainer.appendChild(image);

	// dependency injection
	headline.textContent = props.headline;
	image.src = props.authorPhoto;
	authorName.textContent = props.authorName;

	return card;
}


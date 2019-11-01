// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector(".topics");

// MARK: Axios Call
axios.get("https://lambda-times-backend.herokuapp.com/topics")
	 .then( (response) => {
	 	const topicsArray = response.data.topics;
	 	topicsArray.map( (topic) => {
	 		const tab = Tab(topic);
	 		topics.appendChild(tab);
	 	})
	 })
	 .catch( (error) => {
	 	console.log("Error:", error);
	 })


// MARK: Tab Component
function Tab(category) {

	const createElement = (element) => { return document.createElement(element); }

	// creation
	const tab = createElement("div");

	// style
	tab.classList.add("tab");

	// dependency injection
	tab.textContent = category;

	// structure
	return tab;
}
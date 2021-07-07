// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerContainer = document.querySelector(".header-container");

// MARK: Header Component
function Header() {
	const createElement = (element) => { return document.createElement(element) }

	// creation
	const header = createElement("div");
	const headerDate = createElement("span");
	const headerH1 = createElement("h1");
	const headerTemp = createElement("span");

	// style
	header.classList.add("header");

	headerDate.classList.add("date");
	headerTemp.classList.add("temp");

	// structure
	header.appendChild(headerDate);
	header.appendChild(headerH1);
	header.appendChild(headerTemp);

	// content
	headerDate.textContent = "MARCH 28, 2019";
	headerH1.textContent = "Lambda Times";
	headerTemp.textContent = "98°";

	return header

}

const header = Header();
headerContainer.appendChild(header);

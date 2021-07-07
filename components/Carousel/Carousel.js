/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer = document.querySelector(".carousel-container");

// MARK: Carousel Component
function Carousel() {

    const createElement = (element) => { return document.createElement(element); }

    // creation and styling
    const carousel = createElement("div");
    const leftButton = createElement("div");
    const image1 = createElement("img");
    const image2 = createElement("img");
    const image3 = createElement("img");
    const image4 = createElement("img");
    const rightButton = createElement("div");


    carousel.classList.add("carousel");
    leftButton.classList.add("left-button");
    rightButton.classList.add("right-button");
    image1.classList.add("current-img");

    // structure
    carousel.appendChild(leftButton);
    carousel.appendChild(image1);
    carousel.appendChild(image2);
    carousel.appendChild(image3);
    carousel.appendChild(image4);
    carousel.appendChild(rightButton);

    leftButton.textContent = "<"
    rightButton.textContent = ">"

    image1.src = "./assets/carousel/mountains.jpeg";
    image2.src = "./assets/carousel/computer.jpeg";
    image3.src = "./assets/carousel/trees.jpeg";
    image4.src = "./assets/carousel/turntable.jpeg";


    const images = [image1, image2, image3, image4];
    let counter = 0;
    const imagesLength = images.length;

    function nav(direction) {
        images[counter].classList.remove("current-img");
        counter += direction;
        if (direction === -1 && counter < 0) {
            counter = imagesLength - 1;
        }
        // if the direction === 1 && images[counter] value is null (out of the scope)
        if (direction === 1 && !images[counter]) {
            counter = 0;
        }
        images[counter].classList.add("current-img");
    }

    leftButton.addEventListener("click", function() {
        nav(-1);
    });
    rightButton.addEventListener("click", function() {
        nav(1);
    });

    return carousel;
}

const carousel = Carousel();
carouselContainer.appendChild(carousel);
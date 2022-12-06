const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

// unsplash API
const count = 30;
const apiKey = "AETn99UXiyxB-y8JeJ6spFcl--yFebF_b0vMuxHy5Ts";
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// check if all images were loaded
function imageLoaded() {
    imagesLoaded++;
    console.log("image loaded");
    if (imagesLoaded === totalImages) {
        ready = true;
        loader.hidden = true;
        console.log("ready = ", ready);
    };
};

//helper function to set attributes on DOM elements
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key])
    };
};

// create elements for links & photos, Add to DOM
function displayPhotos() {
    imagesLoaded = 0;
    totalImages = photosArray.length;
    console.log("total images", totalImages);
    photosArray.forEach(photo => {
        // create <a /> to link to unsplash
        const item = document.createElement("a");
        setAttributes(item, {
            href: photo.links.html,
            target: "_blank"
        });
        //create <img> for photo
        const img = document.createElement("img");
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            alt: photo.alt_description
        });
        //event listener, check when each is finished loading
        img.addEventListener("load", imageLoaded);
        //put <img> inside <a>, then put both inside imageContainer element
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
};


// get photos from unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiURL);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        
    };
};

//check to see if scrolling near button of page, load more photos
window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        ready = false;
        getPhotos();
    };
});

//onload
getPhotos();

// apikey AETn99UXiyxB-y8JeJ6spFcl--yFebF_b0vMuxHy5Ts
// secret key lqhdujMa8kPWCkX7TYHL9fskoITDWyTYg_OGP4e_mX0
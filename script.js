const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

// unsplash API
const count = 10;
const apiKey = "AETn99UXiyxB-y8JeJ6spFcl--yFebF_b0vMuxHy5Ts";
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//helper function to set attributes on DOM elements
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key])
    };
};

// create elements for links & photos, Add to DOM
function displayPhotos() {
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

//onload
getPhotos();

// apikey AETn99UXiyxB-y8JeJ6spFcl--yFebF_b0vMuxHy5Ts
// secret key lqhdujMa8kPWCkX7TYHL9fskoITDWyTYg_OGP4e_mX0
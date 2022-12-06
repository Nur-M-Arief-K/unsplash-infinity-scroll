// import { API_KEY } from "./unsplash-key";

// unsplash API
const count = 10;
const apiKey = "AETn99UXiyxB-y8JeJ6spFcl--yFebF_b0vMuxHy5Ts";
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// get photos from unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        
    }
}

//onload
getPhotos();

// apikey AETn99UXiyxB-y8JeJ6spFcl--yFebF_b0vMuxHy5Ts
// secret key lqhdujMa8kPWCkX7TYHL9fskoITDWyTYg_OGP4e_mX0
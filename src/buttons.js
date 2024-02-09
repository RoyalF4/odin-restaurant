import { homePage, menuPage, locationPage } from "./pages";

function homeBtn() {
    const button = document.querySelector('#homeBtn');
    button.addEventListener('click', () => {
        homePage();
    })
}

function menuBtn() {
    const button = document.querySelector('#menuBtn');
    button.addEventListener('click', () => {
        menuPage();
    })
}

function locationBtn() {
    const button = document.querySelector('#locationBtn');
    button.addEventListener('click', () => {
        locationPage();
    })
}

export {homeBtn, menuBtn, locationBtn};

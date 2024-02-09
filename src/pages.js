import Tavern from '../src/tavern.jpg';

function homePage() {
    const content = document.querySelector('#content');
    const container = document.createElement('div');
    const tavernImg = document.createElement('img');
    const homeHeading = document.createElement('h1');
    const aboutUs = document.createElement('p');

    container.classList.add('home-container');

    // tavernImg.src = '../src/tavern.jpg';
    tavernImg.src = Tavern;
    tavernImg.classList.add('home-img');

    homeHeading.textContent = 'About Us';

    aboutUs.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum purus a eleifend luctus. Proin at ligula a lectus mollis semper at quis mi. Cras non elit varius, dapibus nisi luctus, pellentesque nulla. Phasellus vel hendrerit tellus. Mauris congue libero ullamcorper lacus fringilla cursus. Aliquam augue est, facilisis in efficitur in, luctus eu sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed nibh quam, faucibus eu diam quis, feugiat ultrices metus. Nulla eu justo in risus facilisis dignissim. Pellentesque id quam pulvinar, dignissim elit ut, elementum erat. Sed et consectetur nunc. Donec et cursus nunc. Curabitur eleifend imperdiet eros, et efficitur nisl sollicitudin vitae. Nam molestie ipsum et magna sagittis, eget venenatis odio imperdiet.';

    content.textContent = '';
    container.appendChild(tavernImg);
    container.appendChild(homeHeading);
    container.appendChild(aboutUs);
    content.appendChild(container);
}

function menuPage() {
    const content = document.querySelector('#content');
    const container = document.createElement('div');
    container.classList.add('menu-container');
    container.textContent = 'TestMenu';

    content.textContent = '';
    content.appendChild(container);
}

function locationPage() {
    const content = document.querySelector('#content');
    const container = document.createElement('div');
    container.classList.add('location-container');
    container.textContent = 'TestLocation';

    content.textContent = '';
    content.appendChild(container);
}

export { homePage, menuPage, locationPage };
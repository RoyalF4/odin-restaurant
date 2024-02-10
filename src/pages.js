import Tavern from '../src/tavern.jpg';
import Dish from '../src/dish.js';
import Location from '../src/location.jpg';

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

    let dishes = []
    dishes.push(new Dish('Bear Tartare', 'Restores 19231 health and 9615 mana over 20 sec. Must remain seated while eating. If you spend at least 10 seconds eating you will become well fed and gain Speed for a short time after killing an enemy.', 12.50));
    dishes.push(new Dish('Thrice-Spiced Mammoth Kabob', 'Restores 135000 health over 20 sec.  Must remain seated while eating. If you spend at least 10 seconds eating you will become well fed and gain 39 Stamina and 22 Intellect for 1 hour.', 20.00));
    dishes.push(new Dish('Smoked Desert Dumplings', 'Restores 1272 health over 30 sec.  Must remain seated while eating.  If you spend at least 10 seconds eating you will become well fed and gain 4 Strength for 15 min.', 2.50));
    dishes.push(new Dish('Seamoth Surprise', 'Restores 214284 health over 20 sec. Must remain seated while eating. If you spend at least 10 seconds eating you will become well fed and gain 70 Versatility for 1 hour.', 20.00));
    dishes.push(new Dish('Pinchwhistle "Nitro Fuel"', 'A strong alcoholic beverage. WARNING: Do not consume near an open flame!', 87.00));
    dishes.push(new Dish('Noblegarden Chocolate','Restores 2% of your health per second for 24 sec.  Must remain seated while eating.  If you spend at least 10 seconds eating you will become well fed and gain Stamina and Spirit for 15 min.', 15.32))

    container.classList.add('menu-container');

    for(let i = 0; i < 6; i++) {
        const card = document.createElement('div');
        const name = document.createElement('h3');
        const description = document.createElement('p');
        const price = document.createElement('div');

        name.textContent = dishes[i].name;
        description.textContent = dishes[i].description;
        price.textContent = dishes[i].cost;

        card.classList.add('card', 'grow');
        card.appendChild(name);
        card.appendChild(description);
        card.appendChild(price);

        container.appendChild(card);
    }

    content.textContent = '';
    content.appendChild(container);
}

function locationPage() {
    const content = document.querySelector('#content');
    const container = document.createElement('div');
    const locationImg = document.createElement('img');
    locationImg.src = Location;
    locationImg.classList.add('grow');
    container.classList.add('location-container');
    container.appendChild(locationImg);


    content.textContent = '';
    content.appendChild(container);
}

export { homePage, menuPage, locationPage };
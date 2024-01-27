function configureListeners() {
    let images = document.getElementsByTagName('img');


    for (var i = 0; i < images.length; i++) {
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity, false)
        document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity, false)
    }
}

function addOpacity(event) {
    if (!this.classList.contains('dim')) {
        this.classList.add('dim')
    }
    getProductInfo(event.target.id);
}

function removeOpacity(event) {
    if (this.classList.contains('dim')) {
        this.classList.remove('dim');
    }
    let element = document.getElementById('color-price');
    element.textContent = '';

    let color = document.getElementById('color-name');
    color.textContent = '';

    event.preventDefault();
}

function getProductInfo(paintColor) {
    let price;
    let colorName;

    switch (paintColor) {
        case 'pn1':
            price = '$5.99';
            colorName = 'green';
            updatePrice(colorName, price);
            break;
        case 'pn2':
            price = '$7.99';
            colorName = 'brown';
            updatePrice(colorName, price);
            break;
        case 'pn3':
            price = '$9.99';
            colorName = 'light blue';
            updatePrice(colorName, price);
            break;
        case 'pn4':
            price = '$15.99';
            colorName = 'red';
            updatePrice(colorName, price);
            break;
        case 'pn5':
            price = '$34.99';
            colorName = 'white';
            updatePrice(colorName, price);
            break;
        case 'pn6':
            price = '$12.99';
            colorName = 'black';
            updatePrice(colorName, price);
            break;
        case 'pn7':
            price = '$14';
            colorName = 'teal';
            updatePrice(colorName, price);
            break;
        case 'pn8':
            price = '$34';
            colorName = 'purple';
            updatePrice(colorName, price);
            break;
        case 'pn9':
            price = '$25';
            colorName = 'yellow';
            updatePrice(colorName, price);
            break;
        default:
    }
}

function updatePrice(colorName, price) {
    let colorPrice = document.getElementById('color-price');
    colorPrice.textContent = price;


    let color = document.getElementById('color-name');
    color.textContent = colorName;


}

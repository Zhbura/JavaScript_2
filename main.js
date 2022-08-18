const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._getProducts()
            .then(data => {
                this.goods = data;
                this.render()
            });
    }

    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
        }
    }

    sumPrice() {
        let nullSum = 0;
        for (let product of this.goods) {
            nullSum += product.price;
        }
        console.log(nullSum);
    }
}

class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.product_name;
        this.id = product.id_product;
        this.price = product.price;
        this.img = img;
    }

    render() {
        return `<div class="product-item">
    <img src="${this.img}">
    <h3>${this.title}</h3>
    <p>${this.price}</p>
    <button>Добавить</button>
    </div>`
    }
}

let list = new ProductList();
list.sumPrice();

class Basket {
    constructor(container = '.basket') {
        this.container = container;
        this.goods = [];
        this._clickOpenBasket();
        this._getElemsBasket(container)
            .then(data => {
                this.goods = data.contents;
                this.render();
            });
    }

    _getElemsBasket() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }

    _clickOpenBasket() {
        document.querySelector('button').addEventListener('click', () => {
            document.querySelector(this.container).classList.toggle('hidden');
        });
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new BasketItem();

            block.insertAdjacentHTML('beforeend', productObj.render(product));
        }
    }
}

class BasketItem {
    render(product) {
        return `<div class="basket__elem" data-id="${product.id_product}">
        <div class="basket__elem_left">
        <img src=image/laptop.jpg src="mini photo product"> 
        <p>${product.product_name}</p>
        </div>
        <div class="basket__elem_right">
        <p>Quantity: ${product.quantity}</p>
    <p class="basket__elem_price">$${product.price}</p>
    </div>
    </div>`
    }
}

let basket = new Basket();

/*
const products = [
    {
        id: 1,
        title: 'Ноутбук',
        price: 20000,
        img: "image/laptop.jpg",
    },
    {
        id: 2,
        title: 'Мышка',
        price: 2000,
        img: "image/mouse.jpg",
    },
    {
        id: 3,
        title: 'Клавиатура',
        price: 3000,
        img: "image/keyboard.jpg",
    },
    {
        id: 4,
        title: 'Нетбук',
        price: 15000,
        img: "image/netbook.jpg",
    }
];

const renderProduct = (product) => `
<div class="product-item">
<img src="${product.img}">
<h3>${product.title}</h3>
<p>${product.price}</p>
<button>Добавить</button>
</div>
`
const renderPage = list => {
    document.querySelector('.products').innerHTML =
        list.map(product => renderProduct(product)).join('');
}

renderPage(products);
*/
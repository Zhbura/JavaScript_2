class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.render();
    }

    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Ноутбук', price: 20000, img: "image/laptop.jpg" },
            { id: 2, title: 'Mышка', price: 2000, img: "image/mouse.jpg" },
            { id: 3, title: 'Клавиатура', price: 3000, img: "image/keyboard.jpg" },
            { id: 4, title: 'Нетбук', price: 15000, img: "image/netbook.jpg" },
        ];
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
    constructor(product) {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = product.img;
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
    /**
    * Добавить товар в корзину.
    */
    addProduct() {

    }

    /**
     * Количество товаров в корзине.
     */
    allAddProducts() {

    }

    /**
     * Сумма товаров в корзине.
     */
    allProductsPrice() {

    }

    /**
     * Удалить все товары из корзины.
     */
    allRemoveProducts() {

    }


    /**
     * Заказать все товары. 
     */
    orderAllProducts() {

    }

    render() {

    }
}

class ElemBasket {
    /**
     * Удалить товар из корзины.
     */
    removeProduct() {

    }

    /**
     * Изменить данные товара в корзине.
     */
    changeProduct() {

    }

    /**
     * Цена одной позиции товара.
     */
    productPrice() {

    }

    /**
     * Заказать один товар. 
     */
    orderProduct() {

    }

    render() {

    }

}
// const products = [
//     {
//         id: 1,
//         title: 'Ноутбук',
//         price: 20000,
//         img: "image/laptop.jpg",
//     },
//     {
//         id: 2,
//         title: 'Мышка',
//         price: 2000,
//         img: "image/mouse.jpg",
//     },
//     {
//         id: 3,
//         title: 'Клавиатура',
//         price: 3000,
//         img: "image/keyboard.jpg",
//     },
//     {
//         id: 4,
//         title: 'Нетбук',
//         price: 15000,
//         img: "image/netbook.jpg",
//     }
// ];

// const renderProduct = (product) => `
// <div class="product-item">
// <img src="${product.img}">
// <h3>${product.title}</h3>
// <p>${product.price}</p>
// <button>Добавить</button>
// </div>
// `
// const renderPage = list => {
//     document.querySelector('.products').innerHTML =
//         list.map(product => renderProduct(product)).join('');
// }

// renderPage(products);
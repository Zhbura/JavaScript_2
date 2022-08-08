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
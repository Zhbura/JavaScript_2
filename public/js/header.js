Vue.component('header-comp', {
    props: ['cartitems', 'addproduct'],
    template: ` <div class="container">
    <div class="header__section-left">
        <img src="../img/logo.svg" alt="logo">
        <search></search>
    </div>
    <div class="header__section-right">
        <a href="#"><img class="header__menu" src="../img/menu.svg" alt="menu"></a>
        <a href="registration.html"><img src="../img/user.svg" alt="user"
                class="header__user"></a>
                <cart :cartitems = 'cartitems' :addproduct='addproduct'></cart>
    </div>
</div>
`
})

Vue.component('search', {
    data() {
        return {
            searchLine: '',
        }
    },
    template: `
    <div class="header__search">
        <input type="text" v-model='searchLine'  @input='$parent.$emit("filtergoods", searchLine)' placeholder='Найти товар...'>
        <img src="../img/search.svg" alt="search">
        </div>
    `
})

Vue.component('cart', {
    props: ['cartitems', 'addproduct'],
    data() {
        return {
            isVisibleCart: false,
        }
    },
    methods: {
        calculateCart() {
            let cartPrice = 0;
            let cart = this.$parent.$parent.cartGoods[1];
            cart.forEach(el => cartPrice += el.quantity * el.price)
            return cartPrice;
        },
        deleteItem(id) {
            let remove = this.$parent.$parent.remove;
            let cart = this.$parent.$parent.cartGoods[1];
            let find = cart.find(el => el.id_product === id);

            remove(`/api/cart/${id}`, find);
        }
    },
    template: `
    <div class="cart_content">
    <img src="../img/cart.svg" alt="shopping cart" @click='isVisibleCart = !isVisibleCart' class="header__cart">
        <div class="cart" v-if='isVisibleCart'>
            <p v-if='!cartitems[1].length'>Пусто</p>
            <div class='cart_item' v-for="item of cartitems[1]" :key='item.id_product'>
                <img :src="item.img" alt="Some img" class='cart_img'>
                <div class='cart_item_info'>
                    <p class='cart_item_name'>{{item.product_name}}</p>
                    <p type='number' class='cart_item_count' @input='$parent.$emit("addproduct",item)'>Количество: {{ item.quantity }}</p>
                    <p class='cart_item_price'>Стоимость: {{item.quantity * item.price}} $</p>
                </div>
                <button @click='deleteItem(item.id_product)'>Удалить</button>
            </div>
            <p v-if='cartitems[1].length'>Итого: {{calculateCart()}} $</p>
        </div>
    </div>
    `
})

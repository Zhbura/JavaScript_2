Vue.component('products-comp', {
    props: ['showed', 'addproduct'],
    template: ` 
    <div class="main__products container">
        <div class="main-heading-products">
            <h1>Fetured Items</h1>
            <h2>Shop for items based on what we featured in this week</h2>
        </div>
        <div class="products">
                    <div v-for="product of showed" :key='product.id_product' class="products__cart">
                        <div class="products__cart-add">
                            <img :src="product.img" alt="some img" class='product_img'>
                            <div class="products__cart-add_dark">
                                <button class="products__button" :id="product.id_product" @click='$emit("addproduct",product)'>
                                    <img src="../img/delete_product.svg" alt="#">
                                    Add to
                                    Cart
                                </button>
                            </div>
                        </div>
                        <div class="products__text">
                            <div class="products__text-heading"> {{product.product_name}} </div>
                            <div class="products__text-description">Known for her sculptural takes on traditional
                                tailoring,
                                Australian
                                arbiter
                                of cool Kym Ellery teams up
                                with Moda Operandi.</div>
                            <div class="products__price">{{ product.price }}$</div>
                        </div>
                    </div>
        </div>
        <div class="products__button_bottom">
                    <a href="#"> Browse All Product</a>
        </div>
</div>
`
});
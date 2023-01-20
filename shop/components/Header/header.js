class Header{

    handleOpenShoppingPage(){
        shoppingPage.render();
    }

    render(count){
        const html = `
                    <div class="header-container">
                        <div class="header-counter" onclick="headerPage.handleOpenShoppingPage();">
                            🛒 ${count}
                        </div>
                    </div>
        `;

        ROOT_HEADER.innerHTML = html;
    };
};

const productsStore = localStorageUtil.getProducts();
const headerPage = new Header();
headerPage.render(productsStore.length);
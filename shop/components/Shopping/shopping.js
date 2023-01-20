class Shopping {
    handleCleare(){
        ROOT_SHOPPING.innerHTML = ``;
    }

    render(){
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;

        CATALOG.forEach(({ id, title, name, price }) => {
            if(productsStore.indexOf(id) !== -1){
                htmlCatalog += `
                                <tr>
                                    <td class="shopping-element__name">⭐ ${name} </td>
                                    <td class="shopping-element__price"> ${price.toLocaleString()} USD</td>
                                </tr>
                `;
                sumCatalog += price;
            }
        });

        const html = `
            <div class="shopping-container">
                <div class="shopping__close" onclick="shoppingPage.handleCleare();"></div>
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td class="shopping-element__name">💰 TOTAL PRICE: </td>
                        <td class="shopping-element__price"> ${sumCatalog.toLocaleString()} USD</td>
                    </tr>
                </table>
            </div>
        `;
        ROOT_SHOPPING.innerHTML = html;
    }
}

const shoppingPage = new Shopping();
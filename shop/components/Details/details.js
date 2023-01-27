class Details {
    handleCleare(){
        ROOT_DETAILS.innerHTML = ``;
    }
    
    render(id_product) {
        let htmlCatalog = '';

        CATALOG.forEach(({ id, title, name, img, description, price }) => {
            
            if(id === id_product){
                htmlCatalog += `
                        <div class="details-left">
                            <img class="details-left__img" src="${img}" />
                        </div>
                        <div class="details-right">
                            <div class="details-right__title">${title}</div>
                            <div class="details-right__name">${name}</div>
                            <div class="details-right__des_title">ABOUT THIS PRODUCT</div>
                            <div class="details-right__description">${description}</div>
                            <div class="details-right__price">💰 ${price.toLocaleString()} USD</div>
                        </div>
                    `;
            };
        });
        const html =  `
                    <div class="details-container">
                        <div class="details__close" onclick="detailsPage.handleCleare();"></div>
                        ${htmlCatalog}
                    </div>
        `;

        ROOT_DETAILS.innerHTML = html;
    }
}

const detailsPage = new Details();
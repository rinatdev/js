function render(){

    const productsStore = localStorageUtil.getProducts();

    headerPage.render(productsStore.length);
    productsPage.render();
}

spinnerPage.render();

let CATALOG = [];

fetch('https://gist.githubusercontent.com/rinatdev/171f48e20553cecf73e49106b4f14c7d/raw/4465f521c03b1285a568056519c4cb00699fb179/shoes.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        setTimeout(() => {
            spinnerPage.handleClear();
            render();
        }, 1000)
    })
    .catch(error => {
        errorPage.render();
        spinnerPage.handleClear();
    });
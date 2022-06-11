/**
 * Create price element
 * 
 * @see https://dev.to/ibn_abubakre/append-vs-appendchild-a4m
 */
 class Price{
    constructor(price, currnecy){
        this.domainname = window.location.hostname;
        return this.createPriceEl(price, currnecy);
    }

    createPriceEl(price, currnecy){
        let e = document.createElement('h4');
        e.classList.add('price');
        e.append(price, " ", currnecy);
        return e;
    }
}

export default Price;
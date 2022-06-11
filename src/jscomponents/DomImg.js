/**
 * Display img logo
 */
class DomImg{

    constructor(url, id = "", cssClass = "") {
        return this.createElement(url, id = "", cssClass = "");
    }

    createElement(url = "/img/footer.webp", id = "", cssClass = ""){
        let m = document.createElement('main');
        let img = document.createElement('img');
        img.src = url;
        img.alt = "domain for sale";
        img.setAttribute("id", id);
        img.setAttribute("class", cssClass);
        m.append(img);
        return m;
    }
}

export default DomImg;
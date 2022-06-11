
/**
 * Create Text Paragraph
 */
class DomParagraph{
    constructor(text) {
        return this.createTextparagraph(text);
    }

    createTextparagraph(text){
        let e = document.createElement('p');
        e.innerHTML=text;
        // e.append(text);
        return e;
    }
}

export default DomParagraph;
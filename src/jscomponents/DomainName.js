/**
 * Create domain name heading
 * 
 * @see https://dev.to/ibn_abubakre/append-vs-appendchild-a4m
 */
class DomainName{
    constructor(){
        this.domainname = window.location.hostname;
        return this.createDomainNameEl();
    }

    createDomainNameEl(){
        let e = document.createElement('h1');
        e.classList.add('domain');
        e.append(this.domainname);
        return e;
    }
}

export default DomainName;



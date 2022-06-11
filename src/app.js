import _ from 'lodash'; // usefull library
import sass from './assets/sass/styles.sass'; // used in webpack.config.js
import DomainName from './jscomponents/DomainName';
import Price from './jscomponents/Price';
import DomParagraph from './jscomponents/DomParagraph';
import DomImg from './jscomponents/DomImg';

const mySetup = {
  myImagePath: "img/", // dist image folder
}

document.getElementById("domain").append(new DomainName());
document.getElementById("price").append(new Price("$200", "---"));
document.getElementById("kontakt").append(
  new DomParagraph("Hello!"),
  new DomParagraph(" :) "),
);

document.getElementById('logo').append(new DomImg(mySetup.myImagePath + "logo.webp", "logo", "logo"));
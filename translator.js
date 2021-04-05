// ==UserScript==
// @name        All In One Translator - Amazon
// @namespace   msumedhadmundhe
// @description Auto translates all Amazon market places, Argus dashboard as well as all the foreign language web pages required for external research to English. 
// @include     *://*/*
// @author      msumedha, dmundhe
// @downloadURL https://greasyfork.org/en/scripts/423548-all-in-one-translator-amazon
// @run-at      document-body
// @exclude     /^.translate.googleapis.com./
// @exclude     /https://argus.aka.amazon.com/*
// @version     1.0
// @grant       none
// @noframes
// ==/UserScript==


var amazonDomain;
for (amazonDomain = window.location.hostname.split("."); 2 < amazonDomain.length;){
    amazonDomain.shift();
}

amazonDomain = ";domain=" + amazonDomain.join(".");

// domain cookie
document.cookie = "googtrans=/auto/en; expires=Thu, 07-Mar-2050 20:22:40 GMT; path=/" + amazonDomain;
document.cookie = "googtrans=/auto/en; expires=Thu, 07-Mar-2050 20:22:40 GMT; path=/";

var googleTranslateDivElement = document.createElement('div');
googleTranslateDivElement.id = 'google_translate_element';
googleTranslateDivElement.style.display='none';
document.body.insertBefore(googleTranslateDivElement, document.body.firstChild);

var translateElement = document.createElement('script');

translateElement.setAttribute('src','https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
translateElement.type = "text/javascript";
document.body.appendChild(translateElement);

var translateScript = document.createElement('script');
translateScript.type = "text/javascript";
translateScript.text = "function googleTranslateElementInit() { new google.translate.TranslateElement({pageLanguage: ''}, 'google_translate_element');}";

document.body.appendChild(translateScript);

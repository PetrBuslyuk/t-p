/**
 * Created by rfskyliner on 31.08.17.
 */

var translations = require('../translations');
var domService = require('./dom-service');

var languages = ['en', 'ru', 'fr', 'ua'];
var selectedLanguage = 'ru';
var translateAttr = 'i18y';

var langContainer = '#language-select';

var langService = {
    languages: languages,
    selectedLanguage: selectedLanguage,
    setLangToElement: setLangToElement,
    updateLanguageOnPage: updateLanguageOnPage
}; 


function setLangToElement(elem) {
    var key = elem.getAttribute(translateAttr);
    elem.innerText = translations[selectedLanguage][key] || key;
}


function updateLanguageOnPage() {
    var translateElems = domService.getElements('['+translateAttr+']');
    for(var i = 0, elemsLength = translateElems.length; i < elemsLength; i++){
        setLangToElement(translateElems[i]);
    }
}

domService.getElement(langContainer).onchange = onLangChnaged;

function onLangChnaged() {
    selectedLanguage = this.value.toLowerCase();
    updateLanguageOnPage();
}

module.exports = langService;
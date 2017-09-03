/**
 * Created by rfskyliner on 01.09.17.
 */

var domService = require('./dom-service');
var navBarSection = '#navbar-section';
var selectedSection = '';

var navbarService = {
    initNavbar: initNavbar
};

function selectSection(newSection) {
    if(typeof selectedSection !== 'string'){
        selectedSection.classList.remove('selected');
        setSectionContainerVisibility(selectedSection, 'add', 'hide')
    }
    
    if(typeof newSection == 'string')
        newSection = domService.getElement('[href="'+ newSection +'"]');
    
    if(!newSection) return false;
    
    newSection.classList.add('selected');
    
    setSectionContainerVisibility(newSection, 'remove', 'hide');
    
    selectedSection = newSection;
}

function setSectionContainerVisibility(section, addRemove, className) {
    var oldSectionId = section.getAttribute('section-container');
    var oldSection = domService.getElement(oldSectionId);
    oldSection.classList[addRemove](className);
}

function onNavBarClicked(ev) {
    if(ev.target.classList.contains('menu-item'))
        selectSection(ev.target)
}

function initNavbar(hash) {
    hash = hash || '#general-page';
    selectedSection = hash;
    selectSection(hash);
    domService.getElement(navBarSection).onclick = onNavBarClicked;
}

module.exports = navbarService;
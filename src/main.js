/**
 * Created by rfskyliner on 28.08.17.
 */

var langService = require('./services/lang-service');
var navbarService = require('./services/navbar-service');

document.addEventListener('DOMContentLoaded', onDocumentLoaded);

function onDocumentLoaded() {
    langService.updateLanguageOnPage();
    navbarService.initNavbar(window.location.hash);
}
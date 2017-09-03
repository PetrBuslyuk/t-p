(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./services/lang-service":3,"./services/navbar-service":4}],2:[function(require,module,exports){
/**
 * Created by rfskyliner on 31.08.17.
 */

var domService = {
    getElement: getElement,
    getElements: getElements
};

function getElement(query, element) {
    return (element || document).querySelector(query);
}

function getElements(query, element) {
    return (element || document).querySelectorAll(query);
}

module.exports = domService;

},{}],3:[function(require,module,exports){
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
    var translateElems = domService.getElements('[' + translateAttr + ']');
    for (var i = 0, elemsLength = translateElems.length; i < elemsLength; i++) {
        setLangToElement(translateElems[i]);
    }
}

domService.getElement(langContainer).onchange = onLangChnaged;

function onLangChnaged() {
    selectedLanguage = this.value.toLowerCase();
    updateLanguageOnPage();
}

module.exports = langService;

},{"../translations":6,"./dom-service":2}],4:[function(require,module,exports){
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
    if (typeof selectedSection !== 'string') {
        selectedSection.classList.remove('selected');
        setSectionContainerVisibility(selectedSection, 'add', 'hide');
    }

    if (typeof newSection == 'string') newSection = domService.getElement('[href="' + newSection + '"]');

    if (!newSection) return false;

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
    if (ev.target.classList.contains('menu-item')) selectSection(ev.target);
}

function initNavbar(hash) {
    hash = hash || '#general-page';
    selectedSection = hash;
    selectSection(hash);
    domService.getElement(navBarSection).onclick = onNavBarClicked;
}

module.exports = navbarService;

},{"./dom-service":2}],5:[function(require,module,exports){
module.exports = {
    "HOME": 'Home',
    "PORTFOLIO": "Portfolio",
    "CONTACTS": "Contacts",
    "ABOUT": "About us",
    "SLOGAN": "Ваши проекты - наша порука."
};

},{}],6:[function(require,module,exports){
/**
 * Created by rfskyliner on 28.08.17.
 */

var translations = {
  en: require('./en.js'),
  ru: require('./ru.js')
};

module.exports = translations;

},{"./en.js":5,"./ru.js":7}],7:[function(require,module,exports){
module.exports = {
    "HOME": 'Главная',
    "PORTFOLIO": "Портфолио",
    "CONTACTS": "Контакты",
    "ABOUT": "О нас",
    "SLOGAN": "Ваши проекты - наша порука."
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi5qcyIsInNyYy9zZXJ2aWNlcy9kb20tc2VydmljZS5qcyIsInNyYy9zZXJ2aWNlcy9sYW5nLXNlcnZpY2UuanMiLCJzcmMvc2VydmljZXMvbmF2YmFyLXNlcnZpY2UuanMiLCJzcmMvdHJhbnNsYXRpb25zL2VuLmpzIiwic3JjL3RyYW5zbGF0aW9ucy9pbmRleC5qcyIsInNyYy90cmFuc2xhdGlvbnMvcnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7OztBQUlBLElBQUksY0FBYyxRQUFRLHlCQUFSLENBQWxCO0FBQ0EsSUFBSSxnQkFBZ0IsUUFBUSwyQkFBUixDQUFwQjs7QUFFQSxTQUFTLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxnQkFBOUM7O0FBRUEsU0FBUyxnQkFBVCxHQUE0QjtBQUN4QixjQUFZLG9CQUFaO0FBQ0EsZ0JBQWMsVUFBZCxDQUF5QixPQUFPLFFBQVAsQ0FBZ0IsSUFBekM7QUFDSDs7O0FDWkQ7Ozs7QUFJQSxJQUFJLGFBQWE7QUFDYixnQkFBWSxVQURDO0FBRWIsaUJBQWE7QUFGQSxDQUFqQjs7QUFLQSxTQUFTLFVBQVQsQ0FBb0IsS0FBcEIsRUFBMkIsT0FBM0IsRUFBb0M7QUFDaEMsV0FBTyxDQUFDLFdBQVcsUUFBWixFQUFzQixhQUF0QixDQUFvQyxLQUFwQyxDQUFQO0FBQ0g7O0FBRUQsU0FBUyxXQUFULENBQXFCLEtBQXJCLEVBQTRCLE9BQTVCLEVBQXFDO0FBQ2pDLFdBQU8sQ0FBQyxXQUFXLFFBQVosRUFBc0IsZ0JBQXRCLENBQXVDLEtBQXZDLENBQVA7QUFDSDs7QUFFRCxPQUFPLE9BQVAsR0FBaUIsVUFBakI7OztBQ2pCQTs7OztBQUlBLElBQUksZUFBZSxRQUFRLGlCQUFSLENBQW5CO0FBQ0EsSUFBSSxhQUFhLFFBQVEsZUFBUixDQUFqQjs7QUFFQSxJQUFJLFlBQVksQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsQ0FBaEI7QUFDQSxJQUFJLG1CQUFtQixJQUF2QjtBQUNBLElBQUksZ0JBQWdCLE1BQXBCOztBQUVBLElBQUksZ0JBQWdCLGtCQUFwQjs7QUFFQSxJQUFJLGNBQWM7QUFDZCxlQUFXLFNBREc7QUFFZCxzQkFBa0IsZ0JBRko7QUFHZCxzQkFBa0IsZ0JBSEo7QUFJZCwwQkFBc0I7QUFKUixDQUFsQjs7QUFRQSxTQUFTLGdCQUFULENBQTBCLElBQTFCLEVBQWdDO0FBQzVCLFFBQUksTUFBTSxLQUFLLFlBQUwsQ0FBa0IsYUFBbEIsQ0FBVjtBQUNBLFNBQUssU0FBTCxHQUFpQixhQUFhLGdCQUFiLEVBQStCLEdBQS9CLEtBQXVDLEdBQXhEO0FBQ0g7O0FBR0QsU0FBUyxvQkFBVCxHQUFnQztBQUM1QixRQUFJLGlCQUFpQixXQUFXLFdBQVgsQ0FBdUIsTUFBSSxhQUFKLEdBQWtCLEdBQXpDLENBQXJCO0FBQ0EsU0FBSSxJQUFJLElBQUksQ0FBUixFQUFXLGNBQWMsZUFBZSxNQUE1QyxFQUFvRCxJQUFJLFdBQXhELEVBQXFFLEdBQXJFLEVBQXlFO0FBQ3JFLHlCQUFpQixlQUFlLENBQWYsQ0FBakI7QUFDSDtBQUNKOztBQUVELFdBQVcsVUFBWCxDQUFzQixhQUF0QixFQUFxQyxRQUFyQyxHQUFnRCxhQUFoRDs7QUFFQSxTQUFTLGFBQVQsR0FBeUI7QUFDckIsdUJBQW1CLEtBQUssS0FBTCxDQUFXLFdBQVgsRUFBbkI7QUFDQTtBQUNIOztBQUVELE9BQU8sT0FBUCxHQUFpQixXQUFqQjs7O0FDekNBOzs7O0FBSUEsSUFBSSxhQUFhLFFBQVEsZUFBUixDQUFqQjtBQUNBLElBQUksZ0JBQWdCLGlCQUFwQjtBQUNBLElBQUksa0JBQWtCLEVBQXRCOztBQUVBLElBQUksZ0JBQWdCO0FBQ2hCLGdCQUFZO0FBREksQ0FBcEI7O0FBSUEsU0FBUyxhQUFULENBQXVCLFVBQXZCLEVBQW1DO0FBQy9CLFFBQUcsT0FBTyxlQUFQLEtBQTJCLFFBQTlCLEVBQXVDO0FBQ25DLHdCQUFnQixTQUFoQixDQUEwQixNQUExQixDQUFpQyxVQUFqQztBQUNBLHNDQUE4QixlQUE5QixFQUErQyxLQUEvQyxFQUFzRCxNQUF0RDtBQUNIOztBQUVELFFBQUcsT0FBTyxVQUFQLElBQXFCLFFBQXhCLEVBQ0ksYUFBYSxXQUFXLFVBQVgsQ0FBc0IsWUFBVyxVQUFYLEdBQXVCLElBQTdDLENBQWI7O0FBRUosUUFBRyxDQUFDLFVBQUosRUFBZ0IsT0FBTyxLQUFQOztBQUVoQixlQUFXLFNBQVgsQ0FBcUIsR0FBckIsQ0FBeUIsVUFBekI7O0FBRUEsa0NBQThCLFVBQTlCLEVBQTBDLFFBQTFDLEVBQW9ELE1BQXBEOztBQUVBLHNCQUFrQixVQUFsQjtBQUNIOztBQUVELFNBQVMsNkJBQVQsQ0FBdUMsT0FBdkMsRUFBZ0QsU0FBaEQsRUFBMkQsU0FBM0QsRUFBc0U7QUFDbEUsUUFBSSxlQUFlLFFBQVEsWUFBUixDQUFxQixtQkFBckIsQ0FBbkI7QUFDQSxRQUFJLGFBQWEsV0FBVyxVQUFYLENBQXNCLFlBQXRCLENBQWpCO0FBQ0EsZUFBVyxTQUFYLENBQXFCLFNBQXJCLEVBQWdDLFNBQWhDO0FBQ0g7O0FBRUQsU0FBUyxlQUFULENBQXlCLEVBQXpCLEVBQTZCO0FBQ3pCLFFBQUcsR0FBRyxNQUFILENBQVUsU0FBVixDQUFvQixRQUFwQixDQUE2QixXQUE3QixDQUFILEVBQ0ksY0FBYyxHQUFHLE1BQWpCO0FBQ1A7O0FBRUQsU0FBUyxVQUFULENBQW9CLElBQXBCLEVBQTBCO0FBQ3RCLFdBQU8sUUFBUSxlQUFmO0FBQ0Esc0JBQWtCLElBQWxCO0FBQ0Esa0JBQWMsSUFBZDtBQUNBLGVBQVcsVUFBWCxDQUFzQixhQUF0QixFQUFxQyxPQUFyQyxHQUErQyxlQUEvQztBQUNIOztBQUVELE9BQU8sT0FBUCxHQUFpQixhQUFqQjs7O0FDaERBLE9BQU8sT0FBUCxHQUFpQjtBQUNiLFlBQVEsTUFESztBQUViLGlCQUFhLFdBRkE7QUFHYixnQkFBWSxVQUhDO0FBSWIsYUFBUyxVQUpJO0FBS2IsY0FBVTtBQUxHLENBQWpCOzs7QUNBQTs7OztBQUlBLElBQUksZUFBZTtBQUNmLE1BQUksUUFBUSxTQUFSLENBRFc7QUFFZixNQUFJLFFBQVEsU0FBUjtBQUZXLENBQW5COztBQUtBLE9BQU8sT0FBUCxHQUFpQixZQUFqQjs7O0FDVEEsT0FBTyxPQUFQLEdBQWlCO0FBQ2IsWUFBUSxTQURLO0FBRWIsaUJBQWEsV0FGQTtBQUdiLGdCQUFZLFVBSEM7QUFJYixhQUFTLE9BSkk7QUFLYixjQUFVO0FBTEcsQ0FBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHJmc2t5bGluZXIgb24gMjguMDguMTcuXG4gKi9cblxudmFyIGxhbmdTZXJ2aWNlID0gcmVxdWlyZSgnLi9zZXJ2aWNlcy9sYW5nLXNlcnZpY2UnKTtcbnZhciBuYXZiYXJTZXJ2aWNlID0gcmVxdWlyZSgnLi9zZXJ2aWNlcy9uYXZiYXItc2VydmljZScpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgb25Eb2N1bWVudExvYWRlZCk7XG5cbmZ1bmN0aW9uIG9uRG9jdW1lbnRMb2FkZWQoKSB7XG4gICAgbGFuZ1NlcnZpY2UudXBkYXRlTGFuZ3VhZ2VPblBhZ2UoKTtcbiAgICBuYXZiYXJTZXJ2aWNlLmluaXROYXZiYXIod2luZG93LmxvY2F0aW9uLmhhc2gpO1xufSIsIi8qKlxuICogQ3JlYXRlZCBieSByZnNreWxpbmVyIG9uIDMxLjA4LjE3LlxuICovXG5cbnZhciBkb21TZXJ2aWNlID0ge1xuICAgIGdldEVsZW1lbnQ6IGdldEVsZW1lbnQsXG4gICAgZ2V0RWxlbWVudHM6IGdldEVsZW1lbnRzXG59O1xuXG5mdW5jdGlvbiBnZXRFbGVtZW50KHF1ZXJ5LCBlbGVtZW50KSB7XG4gICAgcmV0dXJuIChlbGVtZW50IHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yKHF1ZXJ5KTtcbn1cblxuZnVuY3Rpb24gZ2V0RWxlbWVudHMocXVlcnksIGVsZW1lbnQpIHtcbiAgICByZXR1cm4gKGVsZW1lbnQgfHwgZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbVNlcnZpY2U7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgcmZza3lsaW5lciBvbiAzMS4wOC4xNy5cbiAqL1xuXG52YXIgdHJhbnNsYXRpb25zID0gcmVxdWlyZSgnLi4vdHJhbnNsYXRpb25zJyk7XG52YXIgZG9tU2VydmljZSA9IHJlcXVpcmUoJy4vZG9tLXNlcnZpY2UnKTtcblxudmFyIGxhbmd1YWdlcyA9IFsnZW4nLCAncnUnLCAnZnInLCAndWEnXTtcbnZhciBzZWxlY3RlZExhbmd1YWdlID0gJ3J1JztcbnZhciB0cmFuc2xhdGVBdHRyID0gJ2kxOHknO1xuXG52YXIgbGFuZ0NvbnRhaW5lciA9ICcjbGFuZ3VhZ2Utc2VsZWN0JztcblxudmFyIGxhbmdTZXJ2aWNlID0ge1xuICAgIGxhbmd1YWdlczogbGFuZ3VhZ2VzLFxuICAgIHNlbGVjdGVkTGFuZ3VhZ2U6IHNlbGVjdGVkTGFuZ3VhZ2UsXG4gICAgc2V0TGFuZ1RvRWxlbWVudDogc2V0TGFuZ1RvRWxlbWVudCxcbiAgICB1cGRhdGVMYW5ndWFnZU9uUGFnZTogdXBkYXRlTGFuZ3VhZ2VPblBhZ2Vcbn07IFxuXG5cbmZ1bmN0aW9uIHNldExhbmdUb0VsZW1lbnQoZWxlbSkge1xuICAgIHZhciBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSh0cmFuc2xhdGVBdHRyKTtcbiAgICBlbGVtLmlubmVyVGV4dCA9IHRyYW5zbGF0aW9uc1tzZWxlY3RlZExhbmd1YWdlXVtrZXldIHx8IGtleTtcbn1cblxuXG5mdW5jdGlvbiB1cGRhdGVMYW5ndWFnZU9uUGFnZSgpIHtcbiAgICB2YXIgdHJhbnNsYXRlRWxlbXMgPSBkb21TZXJ2aWNlLmdldEVsZW1lbnRzKCdbJyt0cmFuc2xhdGVBdHRyKyddJyk7XG4gICAgZm9yKHZhciBpID0gMCwgZWxlbXNMZW5ndGggPSB0cmFuc2xhdGVFbGVtcy5sZW5ndGg7IGkgPCBlbGVtc0xlbmd0aDsgaSsrKXtcbiAgICAgICAgc2V0TGFuZ1RvRWxlbWVudCh0cmFuc2xhdGVFbGVtc1tpXSk7XG4gICAgfVxufVxuXG5kb21TZXJ2aWNlLmdldEVsZW1lbnQobGFuZ0NvbnRhaW5lcikub25jaGFuZ2UgPSBvbkxhbmdDaG5hZ2VkO1xuXG5mdW5jdGlvbiBvbkxhbmdDaG5hZ2VkKCkge1xuICAgIHNlbGVjdGVkTGFuZ3VhZ2UgPSB0aGlzLnZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgdXBkYXRlTGFuZ3VhZ2VPblBhZ2UoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsYW5nU2VydmljZTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgcmZza3lsaW5lciBvbiAwMS4wOS4xNy5cbiAqL1xuXG52YXIgZG9tU2VydmljZSA9IHJlcXVpcmUoJy4vZG9tLXNlcnZpY2UnKTtcbnZhciBuYXZCYXJTZWN0aW9uID0gJyNuYXZiYXItc2VjdGlvbic7XG52YXIgc2VsZWN0ZWRTZWN0aW9uID0gJyc7XG5cbnZhciBuYXZiYXJTZXJ2aWNlID0ge1xuICAgIGluaXROYXZiYXI6IGluaXROYXZiYXJcbn07XG5cbmZ1bmN0aW9uIHNlbGVjdFNlY3Rpb24obmV3U2VjdGlvbikge1xuICAgIGlmKHR5cGVvZiBzZWxlY3RlZFNlY3Rpb24gIT09ICdzdHJpbmcnKXtcbiAgICAgICAgc2VsZWN0ZWRTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgIHNldFNlY3Rpb25Db250YWluZXJWaXNpYmlsaXR5KHNlbGVjdGVkU2VjdGlvbiwgJ2FkZCcsICdoaWRlJylcbiAgICB9XG4gICAgXG4gICAgaWYodHlwZW9mIG5ld1NlY3Rpb24gPT0gJ3N0cmluZycpXG4gICAgICAgIG5ld1NlY3Rpb24gPSBkb21TZXJ2aWNlLmdldEVsZW1lbnQoJ1tocmVmPVwiJysgbmV3U2VjdGlvbiArJ1wiXScpO1xuICAgIFxuICAgIGlmKCFuZXdTZWN0aW9uKSByZXR1cm4gZmFsc2U7XG4gICAgXG4gICAgbmV3U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIFxuICAgIHNldFNlY3Rpb25Db250YWluZXJWaXNpYmlsaXR5KG5ld1NlY3Rpb24sICdyZW1vdmUnLCAnaGlkZScpO1xuICAgIFxuICAgIHNlbGVjdGVkU2VjdGlvbiA9IG5ld1NlY3Rpb247XG59XG5cbmZ1bmN0aW9uIHNldFNlY3Rpb25Db250YWluZXJWaXNpYmlsaXR5KHNlY3Rpb24sIGFkZFJlbW92ZSwgY2xhc3NOYW1lKSB7XG4gICAgdmFyIG9sZFNlY3Rpb25JZCA9IHNlY3Rpb24uZ2V0QXR0cmlidXRlKCdzZWN0aW9uLWNvbnRhaW5lcicpO1xuICAgIHZhciBvbGRTZWN0aW9uID0gZG9tU2VydmljZS5nZXRFbGVtZW50KG9sZFNlY3Rpb25JZCk7XG4gICAgb2xkU2VjdGlvbi5jbGFzc0xpc3RbYWRkUmVtb3ZlXShjbGFzc05hbWUpO1xufVxuXG5mdW5jdGlvbiBvbk5hdkJhckNsaWNrZWQoZXYpIHtcbiAgICBpZihldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LWl0ZW0nKSlcbiAgICAgICAgc2VsZWN0U2VjdGlvbihldi50YXJnZXQpXG59XG5cbmZ1bmN0aW9uIGluaXROYXZiYXIoaGFzaCkge1xuICAgIGhhc2ggPSBoYXNoIHx8ICcjZ2VuZXJhbC1wYWdlJztcbiAgICBzZWxlY3RlZFNlY3Rpb24gPSBoYXNoO1xuICAgIHNlbGVjdFNlY3Rpb24oaGFzaCk7XG4gICAgZG9tU2VydmljZS5nZXRFbGVtZW50KG5hdkJhclNlY3Rpb24pLm9uY2xpY2sgPSBvbk5hdkJhckNsaWNrZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmF2YmFyU2VydmljZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBcIkhPTUVcIjogJ0hvbWUnLFxuICAgIFwiUE9SVEZPTElPXCI6IFwiUG9ydGZvbGlvXCIsXG4gICAgXCJDT05UQUNUU1wiOiBcIkNvbnRhY3RzXCIsXG4gICAgXCJBQk9VVFwiOiBcIkFib3V0IHVzXCIsXG4gICAgXCJTTE9HQU5cIjogXCLQktCw0YjQuCDQv9GA0L7QtdC60YLRiyAtINC90LDRiNCwINC/0L7RgNGD0LrQsC5cIlxufTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgcmZza3lsaW5lciBvbiAyOC4wOC4xNy5cbiAqL1xuXG52YXIgdHJhbnNsYXRpb25zID0ge1xuICAgIGVuOiByZXF1aXJlKCcuL2VuLmpzJyksXG4gICAgcnU6IHJlcXVpcmUoJy4vcnUuanMnKVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB0cmFuc2xhdGlvbnM7IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgXCJIT01FXCI6ICfQk9C70LDQstC90LDRjycsXG4gICAgXCJQT1JURk9MSU9cIjogXCLQn9C+0YDRgtGE0L7Qu9C40L5cIixcbiAgICBcIkNPTlRBQ1RTXCI6IFwi0JrQvtC90YLQsNC60YLRi1wiLFxuICAgIFwiQUJPVVRcIjogXCLQniDQvdCw0YFcIixcbiAgICBcIlNMT0dBTlwiOiBcItCS0LDRiNC4INC/0YDQvtC10LrRgtGLIC0g0L3QsNGI0LAg0L/QvtGA0YPQutCwLlwiXG59OyJdfQ==

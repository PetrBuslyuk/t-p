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

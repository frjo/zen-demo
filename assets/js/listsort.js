/**
 * @file
 * A JavaScript file for implementing list.js.
 */

(function () {

  'use strict';

  // Classes to filter on must be [a-z]+.
  const options = {
    valueNames: [ 'products', 'tags', 'categories', 'date' ],
    listClass: 'js-items',
    page: 30,
    pagination: false
  };

  const items = new List('js-list', options);
  const jsfilter1 = document.querySelector('.js-filter-1');
  const jsfilter2 = document.querySelector('.js-filter-2');

  jsfilter1.addEventListener('change', function(e) {
    const value = e.target.value;

    items.filter(function (item) {
      if (value == '') {
        items.filter();
      }
      else if (item.values().tags.indexOf(value) !== -1) {
        return true;
      }
      else {
        return false;
      }
    });

    return false;
   });

  jsfilter2.addEventListener('change', function(e) {
    const value = e.target.value;

    items.filter(function (item) {
      if (value == '') {
        items.filter();
      }
      else if (item.values().categories.indexOf(value) !== -1) {
        return true;
      }
      else {
        return false;
      }
    });

    return false;
   });

})();

// var oldHello = function(name) {
//   console.log('hello, ' + name + '!');
// };
//
//
// const hello = (name) => {
//   console.log(`hello, ${name}!`);
// };
//
// oldHello('world');
// hello('es6');

$(document).ready(function() {
  appendContactList(contacts);
  sortByFirstName(contacts);
  sortByLastName(contacts);
  searchContacts();
});


var contacts = [
  'Andy Mention',
  'Emily Davis',
  'Eric Fransen',
  'Jessica Goulding',
  'Jonmichael Chambers',
  'Marc Garreau',
  'Tan Doan',
  'Alan Smith',
  'Allison Larson',
  'Andrew Watkins',
  'Chad Brading',
  'Corey Davis',
  'Gustavo Villagrana',
  'Hilary Denton',
  'Horacio Chavez',
  'Tim Proctor',
  'Wil Faurot',
  'Brant Wellman'
];

// Dynamic Rendering of Contacts
function appendContactList(contacts){
  contacts.forEach(renderContact);
}

function renderContact(contact){
  $('.contact-list').append(
    compileContact(contact)
  );
}

function compileContact(contact){
  return "<div class='contact'><p class='name'>" + contact + "</p></div>";
}


// Sorting of contacts
function sortByFirstName(names){
  $('#first-name').on('click', function() {
    var sortedByFirstName = names.sort();
    $('.contact').remove();
    appendContactList(sortedByFirstName);
  });
}

function sortByLastName(names){
  $('#last-name').on('click', function() {
    var sortedByLastName = sortLastNames(names);
    $('.contact').remove();
    appendContactList(sortedByLastName);
  });
}

function sortLastNames(names) {
  var sortedContacts = names.sort(function(a, b){
    nameA = a.split(' ');
    nameB = b.split(' ');
    lastNameA = nameA[nameA.length - 1];
    lastNameB = nameB[nameB.length - 1];
    if (lastNameA < lastNameB) return -1;
    if (lastNameA > lastNameB) return 1;
    return 0;
  });
  return sortedContacts;
}

// Search contacts
function searchContacts(){
  $('#search').keyup(function(){
    var $contacts = $('.contact');
    var searchContent = $('#search').val().toLowerCase();
    $.each($contacts, function(index, contact) {
      $contact =  $(contact);
      var lowerName = $contact.children().html().toLowerCase();
      if (lowerName.includes(searchContent)){
        $contact.show();
      } else {
        $contact.hide();
      }
    });
  });
}

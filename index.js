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
});


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
  var sortedByFirstName = names.sort();
  $('#first-name').on('click', function() {
    $('.contact').remove();
    appendContactList(sortedByFirstName);
  });
}

function sortByLastName(){

}

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

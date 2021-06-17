// JavaScript: MDN - Destructuring
// Unpacking fields from objects passed as a function parameter
const user = {
  id: 50,
  displayname: "Veda",
  fullname: {
    firstname: "VedaGna",
    lastname: "Yarasu",
  },
};
function userId({ id }) {
  return id;
}
function whois({ displayname, fullname: { firstname: name } }) {
  return `${displayname} is ${name}`;
}
console.log(userId(user));
console.log(whois(user));

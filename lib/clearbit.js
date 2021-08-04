const authorization = "Bearer sk_f9deb0090ac7688f94eb11ce09fd6a6e";


// 1. Select the submit button and the input
const button = document.querySelector("#clearbitSubmit");
const input = document.querySelector("#clearbitEmail");
const userName = document.querySelector("#userName");
const userEmail = document.querySelector("#userEmail");
const userBio = document.querySelector("#userBio");
const userLocation = document.querySelector("#userLocation");

const displayInfo = (person) => {
  userName.innerText = person.name.fullName;
  userBio.innerText = person.bio;
  userEmail.innerText = person.email;
  userLocation.innerText = person.location;
};

const fetchClearbit = (email) => {
  const url = `https://person.clearbit.com/v2/combined/find?email=${email}`
  fetch(url, {headers: {Authorization: authorization}})
  .then(response => response.json())
  .then((data) => {
    const person = data.person;
    // 3. change the DOM (each td)
    displayInfo(person);
  });
};

const stalkAPerson = (event) => {
  // PREVENT THAT MF DEFAULT
  event.preventDefault();
  const email = input.value;
  // 2.5 fetch from the API
  fetchClearbit(email);
};

// 2. Listen for a click
button.addEventListener("click", stalkAPerson);


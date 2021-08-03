const authorization = "Bearer sk_f9deb0090ac7688f94eb11ce09fd6a6e";

// 1. Select all the elements eg input, button, username, email, bio, location
const input = document.querySelector("#clearbitForm input");
const form = document.querySelector("#clearbitForm");
const username = document.querySelector("#userName");
const email = document.querySelector("#userEmail");
const location = document.querySelector("#userLocation");
const bio = document.querySelector("#userBio");

const display = (data) => {
  username.innerHTML = data.name.fullName;
  email.innerHTML = data.email;
  location.innerHTML = data.location;
  bio.innerHTML = data.bio;
  
}

// 2. Listen to submit button
form.addEventListener("submit", (event) => {
  // 2.5 preventDefault()
  event.preventDefault();
  const url = `https://person.clearbit.com/v2/combined/find?email=${input.value}`;
  // 3. Fetch API
  fetch(url, {
    headers: {
      'Authorization': authorization
    }
  })
  .then(response => response.json())
  .then((data) => {
    // 4. Display
    const personData = data.person;
    console.log(personData);
    display(personData);
    })
});
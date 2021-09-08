var userFormEL = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");

var formSubmitHandler = function(event) {
    event.preventDefault();
    // get value from input element
    var usernamer = nameInputEl.value.trim();

    if (username) {
        getUserRepos(username);
        nameInputEl.value = "";
    } else {
        alert("Please enter a Github username");
    }
};

var getUserRepos = function(user) {
    // format the github api url
    var apiUrl = 'https://api.github.com/users/' + user + '/repos';

    // make a request to the url
    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            console.log(response);
            response.json().then(function(data) {
              console.log(data);
        });
    };
    });
};


userFormEL.addEventListener("submit", formSubmitHandler);
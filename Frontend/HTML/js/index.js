'use strict';
const url = '..'; // change url when uploading to server

// select existing html elements
const loginWrapper = document.querySelector('#login-wrapper');
const loginForm = document.querySelector('#login-form');
const userLists = document.querySelectorAll('.add-owner');
const createUser = document.querySelector('#addUserForm');


// create user options to <select>
const createUserOptions = (users) => {
    userLists.forEach((list) => {
        // clear user list
        list.innerHTML = '';
        users.forEach((user) => {
            // create options with DOM methods
            const option = document.createElement('option');
            option.value = user.user_id;
            option.innerHTML = user.name;
            option.classList.add('light-border');
            list.appendChild(option);
            location.href = "Home.html";
        });
    });
};

// get users to form options
const getUsers = async () => {
    try {
        const options = {
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
            },
        };
        const response = await fetch(url + '/user', options);
        const users = await response.json();
        createUserOptions(users);
    } catch (e) {
        console.log(e.message);
    }
};

createUser.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const data = serializeJson(createUser);
    const fetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };
    const response = await fetch(url + '/auth', fetchOptions);
    const json = await response.json();
    console.log('sign up response', json);
    if (!json.user) {
        alert(json.message);
    } else {
        //save token
        sessionStorage.setItem('token', json.token);
        sessionStorage.setItem('user', JSON.stringify(json.user));
        location.href = "Home.html";
    }


});

// login
loginForm.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const data = serializeJson(loginForm);
    const fetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };

    const response = await fetch(url + '/auth/login', fetchOptions);
    const json = await response.json();
    console.log('login response', json);
    if (!json.user) {
        alert(json.message);
    } else {
        // save token
        sessionStorage.setItem('token', json.token);
        sessionStorage.setItem('user', JSON.stringify(json.user));
        location.href = "Home.html";
    }
});

// when app starts, check if token exists and hide login form, show logout button and main content, get users
if (sessionStorage.getItem('token')) {
    loginWrapper.style.display = 'none';
    main.style.display = 'block';
    getUsers();
}

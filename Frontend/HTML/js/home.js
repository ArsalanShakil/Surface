'use strict';
const url = '..'; // change url when uploading to server

// select existing html elements

const logOut = document.getElementById("log-out");
const loggedInUserName = document.getElementById("LoggedIn-user-name");
const guestCreatePost = document.getElementById("guest-create-post");
const guestLiveEvents = document.getElementById("guest-live-events");
const guestLatest = document.getElementById("guest-latest")
const guestProfile = document.getElementById("guest-profile");
const displayUsername = document.getElementById("display-username");
const guestHomePage = document.getElementById("guest-home-page");

// logout
logOut.addEventListener('click', async (evt) => {
    evt.preventDefault();
    try {
        const options = {
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
            },
        };
        const response = await fetch(url + '/auth/logout', options);
        const json = await response.json();
        console.log(json);
        // remove token
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
        let r = confirm("Are you sure you want to logout?");
        if (r === true) {
            location.href = "index.html";
        } else {
            return false;
        }
    } catch (e) {
        console.log(e.message);
    }
});

(function () {
// when app starts, check if token exists and hide login form, show logout button and main content, get users
    if (sessionStorage.getItem('token')) {
        logOut.style.display = 'block';
        guestCreatePost.style.display = 'block';
        guestLiveEvents.style.display = 'block';
        guestLatest.style.display = 'block';
        guestProfile.style.display = 'none';
        displayUsername.style.display = 'block';
        guestHomePage.style.display = 'block';

    } else {
        logOut.style.display = 'none'
        guestCreatePost.style.display = 'none';
        guestLiveEvents.style.display = 'none';
        guestLatest.style.display = 'none';
        displayUsername.style.display = 'none';
        guestProfile.style.display = 'block';
        guestHomePage.style.display = 'none';
    }
    loggedInUserName.innerHTML = JSON.parse(sessionStorage.user).name;

    if (sessionStorage.getItem('post-success')) {
        //success message shown here
        sessionStorage.removeItem('post-success');
    }


    const getPosts = async () => {
        try {
            const options = {
                headers: {
                    'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
                },
            };
            const response = await fetch(url + '/post/all', options);
            console.log(JSON.stringify(response));
            const posts = await response.json();
            posts.forEach(function (post, index) {
                createFeedItem(post.post_id, post.ownername, post.owner_id, post.caption, post.image_url);
            })
        } catch (e) {
            console.log(e);
        }
    };
    getPosts();

    function createFeedItem(post_id, ownername, owner_id, caption, image_url) {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'property-card';
        const likeClass = 'like-' + post_id;
        const getLikes = async () => {
            try {
                const options = {
                    headers: {
                        'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
                    },
                };
                const response = await fetch(url + '/like/all/' + post_id, options);
                console.log(JSON.stringify(response));
                const likes = await response.json();
                let post_created = false;
                if (likes.length > 0) {
                    likes.forEach(function (like, index) {
                        if (!post_created) {
                            if (like.owner_id === JSON.parse(sessionStorage.user).user_id) {
                                console.log("loooooool", likeClass);
                                cardDiv.innerHTML = '<a href="#"><div class="property-image" style="background-image: url(' + image_url + ')"><div class="property-image-title"></div> </div></a><div class="property-description"><h5> posted by ' + ownername + ' </h5><p>' + caption + '</p> </div><button  id="like-button"><div class="property-social-icons ' + likeClass + '" title="liked" style="background:#f04a3b"><span class="like-count-' + post_id + '" style="font-size: 8px;position: absolute;bottom: 1.2em;left: -1.2em;width: 30px;">' + likes.length + ' likes</span></div></button>';
                                const feed = document.getElementById('feed-container');

                                feed.appendChild(cardDiv);
                                post_created = true;


                            } else if (likes.length === index + 1) {
                                cardDiv.innerHTML = '<a href="#"><div class="property-image" style="background-image: url(' + image_url + ')"><div class="property-image-title"></div> </div></a><div class="property-description"><h5> posted by ' + ownername + ' </h5><p>' + caption + '</p> </div><button  id="like-button"><div class="property-social-icons ' + likeClass + '" onclick="createLike(' + post_id + ');" title="like"></div><span class="like-count-' + post_id + '" style="font-size: 8px;position: absolute;bottom: 2.5em;left: 1.5em;">' + likes.length + ' likes</span></button>';
                                const feed = document.getElementById('feed-container');

                                feed.appendChild(cardDiv);
                                post_created = true;

                            }
                        }

                    })

                } else {
                    cardDiv.innerHTML = '<a href="#"><div class="property-image" style="background-image: url(' + image_url + ')"><div class="property-image-title"></div> </div></a><div class="property-description"><h5> posted by ' + ownername + ' </h5><p>' + caption + '</p> </div><button  id="like-button"><div class="property-social-icons ' + likeClass + '" onclick="createLike(' + post_id + ')" title="like"><span class="like-count-' + post_id + '" style="font-size: 8px;position: absolute;bottom: 0.9em;left: -0.9em;width: 30px;">0 likes</span></div></button>';
                    const feed = document.getElementById('feed-container');

                    feed.appendChild(cardDiv);
                    post_created = true;

                }
            } catch (e) {
                console.log(e);
            }
        }
        getLikes();

    }
})();


async function createLike(post_id) {
    const fetchOptions = {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'owner_id': JSON.parse(sessionStorage.user).user_id,
            'post_id': post_id,
        })
    };
    window.location.reload(false);

    const response = await fetch(url + '/like/create', fetchOptions);
    const responseObject = await response.json();
    console.log('add response', responseObject);
    if (responseObject.success) {
        console.log(" feels like success ");
        sessionStorage.setItem('post-success', 'true');

    }

}
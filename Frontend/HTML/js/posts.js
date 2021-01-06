'use strict';
const url = '..'; // change url when uploading to server

// select existing html elements

const main = document.querySelector('main');
const createPost = document.getElementById('widget-form create-post-form');
const hiddenPostImage = document.querySelector('.hidden-post-image');

// image preview
const uploadImage = document.getElementById('upload-image');
const previewContainer = document.getElementById('imagePreview');
const previewImage = previewContainer.querySelector('.image-preview__image');


createPost.addEventListener('submit', async (evt) => {
    evt.preventDefault();

    const canvas = document.createElement('canvas');
    canvas.width = hiddenPostImage.width;
    canvas.height = hiddenPostImage.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(hiddenPostImage, 0, 0);
    const encodedImage = canvas.toDataURL().split(',')[1];

    const fetchOptions = {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'owner_id': JSON.parse(sessionStorage.user).user_id,
            'caption': document.getElementById('post-content').value,
            'image': encodedImage
        })
    };
    const response = await fetch(url + '/post/create', fetchOptions);
    const responseObject = await response.json();
    console.log('add response', responseObject);
    if (responseObject.success) {
        sessionStorage.setItem('post-success', 'true');
        window.location.href = 'Home.html';
    }
});


uploadImage.addEventListener("change", function () {

    const file = this.files[0];
    console.log(file);
    if (file) {
        const reader = new FileReader();

        previewImage.style.display = 'block';
        previewContainer.style.display = 'block';

        reader.addEventListener("load", function () {
            console.log("file reader dat url", this);
            previewImage.setAttribute("src", this.result);
            hiddenPostImage.setAttribute("src", this.result);

        });
        reader.readAsDataURL(file);
    } else {
        previewImage.style.display = 'null';
        previewContainer.style.display = 'null';
        previewImage.setAttribute('src', "");
        hiddenPostImage.setAttribute('src', "");


    }
});
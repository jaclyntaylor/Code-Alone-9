// Jaclyn Taylor
// Social Media Preview

// Function that updates UserName
const userNameInput = document.getElementById("username");
const userNamePreview = document.querySelector(".profile-name");

userNameInput.addEventListener("input", () => {
    userNamePreview.textContent = userNameInput.value;
});


// Use this function to get an image source out of the the image upload box.
function getImageFromUpload(){
    let image = document.querySelector("#imageUpload").files[0];
    if (!image) return;

    let uploadImage = URL.createObjectURL(image)
    document.getElementById("previewImage").src = uploadImage;
    return uploadImage;
}
document.getElementById("imageUpload").addEventListener("change", getImageFromUpload);

// function that updates what on your mind
const userPostInput = document.getElementById("postText");
const userPreview = document.querySelector(".post-text");

userPostInput.addEventListener("input", () => {
    userPreview.textContent = userPostInput.value;
});

// function that updates the image size/crop that user wants
function userImageSize() {
    const imagePostSize = document.getElementById("imageStyle");
    const imagePreviewSize = document.getElementById("previewImage");
    const selectedStyle = imagePostSize.value;

    if(selectedStyle === 'standard') {
        imagePreviewSize.className = 'post-image standard'
    }else if(selectedStyle === 'full') {
        imagePreviewSize.className = 'post-image full' 
    }else if(selectedStyle === 'rounded') {
        imagePreviewSize.className = 'post-image rounded' 
    }else if(selectedStyle === 'circle') {
        imagePreviewSize.className = 'post-image circle' 
    }
}document.getElementById("imageStyle").addEventListener("change", userImageSize);
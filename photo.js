let canvas = document.getElementById("myCanvas");

let imgTag = document.getElementById("zoom");

//  open the image popup

function openImg(event) {

    //get image url from event

    let url;
    url = event.target.currentSrc;

    //set image url in image tag

    imgTag.setAttribute("src", url);

    //display popup

    canvas.style.display = "block";

}

// Exit image popup

function hidePopupImg() {

    canvas.style.display = "none";

}

//array to store image url

let imagesArray = [];

//function to image in favorite area

function addToFavorites() {

    //get image url from bigger popup image

    let imgTagImg = document.getElementById("zoom").currentSrc;

    //push into in array

    imagesArray.push(imgTagImg);

    //hide image popup

    hidePopupImg();

    //get favorites image table

    let fav = document.getElementById('favorites');

    // create htm table data

    let html = "<tr>";

    //check image does not greater than 5

    if (imagesArray.length >= 1 && imagesArray.length <= 5) {

        //get the array length

        for (let i = 0; i < imagesArray.length; i++) {

            //generate html element for each image in img tag

            html = html + "<td><img alt='image' src='" + imagesArray[i] + "' height='250' width='250' onclick='displayDeleteBtn(event)'><button class='delete' onclick='deleteImage(event)'>Delete</button></td>";

        }

        html = html + "</tr>";

        //display in main table element

        fav.innerHTML = html;

    } else {

        alert('maximum images reached remove a favorite image');

    }

}

// this function to display button right to image

function displayDeleteBtn(event) {

    //get all image element by class in array

    let allBtn = document.querySelectorAll(".delete");

    //loop through each element in array

    for (let i = 0; i < allBtn.length; i++) {

        allBtn[i].style.display = "none";

    }

    //get button tag

    let favImgBtn = event.target.nextElementSibling;

    //display button

    favImgBtn.style.display = "block";

}

// delete image from DOM

function deleteImage(event) {

    // get parent element of image

    let favImg = event.target.offsetParent;

    let linkPost;

    //get link of image

    let getImageLink = favImg.querySelector('img').currentSrc;

    // find index of image

    //

    for (let i = 0; i < imagesArray.length; i++) {

        if (imagesArray[i] === getImageLink) {

            linkPost = i;

        }

    }

    // remove that element from array also

    if (linkPost > -1) {

        imagesArray.splice(linkPost, 1);

    }

    // remove image from DOM

    if (favImg) {

        favImg.remove();

    }

}

"use strict"; // interpret document contents in JavaScript strict mode
//global variables
let photoOrder = [1,2,3,4,5];
let figureCount=3;
function populateFigures(){
    let filename;
    let currentFig;
    if(figureCount===3){
        for(let i=1;i<4;i++){
            filename="images/IMG_0"+photoOrder[i]+"sm.jpg";
            currentFig=document.getElementsByTagName("img")[i-1];
            currentFig.src=filename;
        }
    }else{
        for(let i=0;i<5;i++){
            filename="images/IMG_0"+photoOrder[i]+"sm.jpg";
            currentFig=document.getElementsByTagName("img")[i-1];
            currentFig.src=filename;
        }
    }
}
/* shift all images one figure to the left, and change values in photoOrder array to match  */
function rightArrow() {
    for (let i = 0; i < 5; i++) {
        if ((photoOrder[i] + 1) === 6) {
            photoOrder[i] = 1;
        } else {
            photoOrder[i] += 1;
        }
        populateFigures();
    }
}

/* shift all images one figure to the right, and change values in photoOrder array to match  */
function leftArrow() {
    for (let i = 0; i < 5; i++) {
        if ((photoOrder[i] - 1) === 0) {
            photoOrder[i] = 5;
        } else {
            photoOrder[i] -= 1;
        }
        populateFigures();
    }
}
//switch to 5-image layout
function previewFive()
{
    //create figure and img elements for fifth image
    let lastFigure=document.createElement("figure");
    let articleE1=document.getElementsByTagName("article")[0];
    lastFigure.id="fig5";
    lastFigure.style.zIndex="5";
    lastFigure.style.position="absolute";
    lastFigure.style.right="45px";
    lastFigure.style.top="67px";
    let lastImage=document.createElement("img");
    lastImage.width="240";
    lastImage.height="135";
    lastFigure.appendChild(lastImage);
    //articleE1.appendChild(lastFigure);
    articleE1.insertBefore(lastFigure,document.getElementById("rightarrow"));
    let firstFigure=lastFigure.cloneNode(true);
    firstFigure.id="fig1";
    firstFigure.style.right="";
    firstFigure.style.left="45px";
    //articleE1.appendChild(firstFigure);
    articleE1.insertBefore(firstFigure,document.getElementById("fig2"));
    document.getElementsByTagName("img")[0].src="images/IMG_0"+photoOrder[0]+"sm.jpg";
    document.getElementsByTagName("img")[4].src="images/IMG_0"+photoOrder[4]+"sm.jpg";
    figureCount=5;
    let numberButton=document.querySelector("#fiveButton p");
    numberButton.innerHTML="Show fewer images";

    if (numberButton.addEventListener)

    {

        numberButton.removeEventListener("click", previewFive, false);

        numberButton.addEventListener("click", previewThree, false);

    }

    else if (numberButton.attachEvent)

    {

        numberButton.detachEvent("onclick", previewFive);

        numberButton.attachEvent("onclick", previewThree);

    }


    /*numberButton.removeEventListener("click",previewFive,false);
    numberButton.addEventListener("click",previewThree,false);*/
}
//switch to 3-image layout
function previewThree(){
    let articleE1=document.getElementsByTagName("article")[0];
    let numberButton=document.querySelector("#fiveButton p");
    articleE1.removeChild(document.getElementById("fig1"));
    articleE1.removeChild(document.getElementById("fig5"));
    figureCount=3;
    numberButton.innerHTML="Show more images";

    if (numberButton.addEventListener)

    {

        numberButton.removeEventListener("click",previewThree, false);

        numberButton.addEventListener("click", previewFive, false);

    }

    else if (numberButton.attachEvent)

    {

        numberButton.detachEvent("onclick", previewThree);

        numberButton.attachEvent("onclick", previewFive);

    }





    /*numberButton.removeEventListener("click",previewThree,false);
    numberButton.addEventListener("click",previewFive,false);*/

}

leftarrow.attachEvent = function (onclick, leftArrow) {
    
}

/* create event listeners for left arrow,right arrow,and center figure element*/
function createEventListeners(){
    let leftarrow=document.getElementById("leftarrow");
    if (leftarrow.addEventListener){        leftarrow.addEventListener("click",leftArrow,false);
    }
    else{
        leftarrow.attachEvent("onclick",leftArrow);
    }
    let rightarrow=document.getElementById("rightarrow");
    if (rightarrow.addEventListener){        rightarrow.addEventListener("click",rightArrow,false);
    }
    else{
        rightarrow.attachEvent("onclick",rightArrow);
    }
    let mainFig=document.getElementsByTagName("img")[1];
    if (mainFig.addEventListener){        mainFig.addEventListener("click",zoomFig,false);
    }
    else{
        mainFig.attachEvent("onclick",zoomFig);
    }
    let showAllButton=document.querySelector("#fiveButton p");
    if (showAllButton.addEventListener){        showAllButton.addEventListener("click",previewFive,false);
    }
    else{
        mainFigshowAllButton.attachEvent("onclick",previewFive);
    }
}
/* open center figure in separate window */
function zoomFig() {

}

/* create event listeners and populate image elements */
function setUpPage() {
    createEventListeners();
    populateFigures();
}

/* run setUpPage() function when page finishes loading */
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent)  {
    window.attachEvent("onload", setUpPage);
}

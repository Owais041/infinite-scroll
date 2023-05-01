const imageContainer= document.getElementById("image-container");
const loader = document.getElementById("loader");
let photosArray=[];
let ready = false;
let imagesloaded=0;
let totalimages=0;
const count =1000;
const apikey="xxyHg4Wl9Io8m3RDY7Nno0HREg1G58Mx-MFuvBBJmDY";
const apiurl=`https://api.unsplash.com/photos/random/?client_id=${apikey}&count=${count}`;
 

function imageloaded(){
    console.log("image Loaded");
    imagesloaded++;
    if(imagesloaded===totalimages){
        ready =true;
        loader.hidden=true;
        console.log("ready=",ready);
    }
}
// create an element for photos abd links add to the dom 
function displayPhotos(){
  
    photosArray.forEach((photo)=>{
        // create an anchor tag 
        imagesloaded=0;
        totalimages = photosArray.length;
        console.log("total images", totalimages)
        
        const item = document.createElement('a')
        item.setAttribute('href',photo.links.html);
        item.setAttribute('target',"_blank"); //toreload page in a new tag

        const img = document.createElement("img");
        img.setAttribute("src",photo.urls.regular)
        img.setAttribute("alt",photo.alt_description);
        img.setAttribute("title",photo.alt_description)
        img.addEventListener("load",imageloaded)

        item.append(img);
        imageContainer.append(item);
    })
    

}      
// get photo from unsplash api    
async function getPhotos(){
    try{
        const response = await fetch(apiurl);
        photosArray = await response.json();
        // console.log(photosArray);
        displayPhotos();

    }
    catch (error){
        console.log(error);
    }
}
window.addEventListener("scroll", ()=>{
    if(window.scrolly + window.innerHeight >=document.body.offsetHeight && ready){
    }{
        ready=false;
        getphotos();
    }
        // console.log("Reaced End"}
})
getPhotos();

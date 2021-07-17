function passTitle(){
    var title= document.getElementById("title").value;
   localStorage.setItem("textvalue",title);
   return false;
}

function passArtical(){
    var artical= document.getElementById("artical").value;
   localStorage.setItem("articalvalue",artical);
   return false;
}

function passImage(){
    var image= document.getElementById("image").value;
   localStorage.setItem("imagevalue",image);
   return false;
}
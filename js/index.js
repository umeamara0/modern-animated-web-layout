function animated(value){
var title = document.getElementById("title");
var desc = document.getElementById("desc");
title.className = value;
desc.className = value;
}
function darkmode(){
    var section = document.getElementById("section");
    var sidenav = document.getElementById("sidenav");
    var button = document.getElementsByTagName("button")
    var title = document.getElementById("title");
    var desc = document.getElementById("desc");
    if(section.style.background == "rgb(17, 17, 17)"){
         section.style.background = "#FCE5CD";
        sidenav.style.background = "#F7D7B5 ";
         sidenav.style.color = "black";
        title.style.color = "#351C75";
        desc.style.color = "#EBA45A";
        for( var i=0; i<button.length; i++){
            button[i].style.color = "black"
        }

    }
    else {
        section.style.background = "#111111";
        sidenav.style.background = "#15151D";
        sidenav.style.color = "white";
        title.style.color = "#4672FE";
        desc.style.color = "white";
        for( var i=0; i<button.length; i++){
            button[i].style.color = "white"
        }

    }


}
// DOM in js

//let headTag = document.head;
//let bodyTag = document.body;
//let havola = document.documentURI;
//let formalar = document.forms;
//let rasmlar = document.images;
//let havolalar = document.links
//console.log(havolalar);

// Events in JS: onclick , ondblclick , onchange , onfocus , onblur , oninput

//function buttonniBos(){
    //alert("Siz buttonni bostingiz!");
//}
//function buttonniIkkiBos(){
    //alert("Siz buttonni ikkimarta bostingiz");
//}
//function Tanlash(event){
    //alert("Siz hozir " + event.target.value + "ni tanladingiz!");
//}
//function inputgaBosish(){
    //console.log("Iputga bosildi");
//}
//function inputdanChiqish(){//
    //console.log("Inputdan chiqildi");
//}
//function yozish(event){
    //console.log(event.target.value);
//
//document.querySelector(".text").addEventListener("copy", function(event){
    //console.log("Diqqat! Diqqat! " + event.target.value + " nomli xujjat ko'chirilyapti");
//});

function harakatlanish(e){
    console.log(e.clientX,e.clientY);
}
function kirish(){
    console.log("Hududga kirildi!");
}
function chiqish(){
    console.log("Hududdan chiqildi")
}
let button=document.querySelector('button')
let projet=document.querySelector('.projet')
button.addEventListener("click", function (){
    projet.style.display="block"
})
button.addEventListener("mouseover", function(){
    projet.style.removeProperty('display')
})
let contacts = document.getElementsByClassName('cont');
let back = document.getElementsByClassName('bar')[0]; // Prenez le premier élément de la liste

contacts[0].addEventListener("mouseover", function() {
    back.style.backgroundColor = "#ea7739";
    back.style.borderRadius="5px"
});
contacts[0].addEventListener("mouseout", function() {
    back.style.removeProperty('background-color');
    back.style.removeProperty('border-radius')
});

let proj=document.getElementsByClassName('pro')[0]
proj.addEventListener("click", function(){
    projet.style.display="block"
})
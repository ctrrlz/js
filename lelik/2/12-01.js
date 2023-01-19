let els = document.querySelectorAll(".element_container div");
let nameP = document.querySelector('#name');
for(let item of els){
    item.addEventListener('mouseover', showText);
    item.addEventListener('mouseout', showText);
}

function showText(){
    nameP.innerText = event.type;
    document.getElementById('targetElement').innerText = event.target.id;

    if(event.relatedTarget.classList.contain('element_container')){
        document.getElementById('relatedTargetElement').innerText = event.relatedTarget.className;
    }else{
        document.getElementById('relatedTargetElement').innerText = event.relatedTarget.id;
    }

}
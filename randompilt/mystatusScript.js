// random pilt, mis võetakse piltide massiivist
function randomPilt() {
    const pildid =[
        'img/cat.jpg',
        'img/dino.jpg',
        'img/janes.jpg'
    ];
    //random pilt
    const pilt=Math.floor(Math.random()*pildid.length);
    const rpilt=pildid[pilt];
    const randomPilt=document.getElementById("randomPilt");

    randomPilt.src=rpilt;
}

function radioValik(){
    let vastus=document.getElementById("vastus");
    let valik=document.getElementsByName("valik"); // mittu elementi nimega valik
    let randomPilt=document.getElementById("randomPilt");

    for(let i=0;i<valik.length;i++){
        if(valik[i].checked){
            if(randomPilt.getAttribute("src")==valik[i].value){
                vastus.innerHTML="Õige";
                vastus.style.backgroundColor="green";
            } else{
                vastus.innerHTML="Vale";
                vastus.style.backgroundColor="red";
            }
        }
    }
}

function arvuta(kogus, hind){
    return (kogus*hind).toFixed(1); // toFixed - одно значение после запятой, Math.floor()- целые
}

const pilt1hind = 2;
const pilt2hind = 1.5;
const pilt3hind = 0;

function radioHindArvuta(){
    let vastus2=document.getElementById("vastus2");
    let pilt1=document.getElementById("pilt1");
    let pilt2=document.getElementById("pilt2");
    let pilt3=document.getElementById("pilt3");
    let kogus=document.getElementById("kogus");

    if(pilt1.checked){
        vastus2.innerHTML=arvuta(kogus.value, pilt1hind)+"euro";
    } else if(pilt2.checked){
        vastus2.innerHTML=arvuta(kogus.value, pilt2hind)+"euro";
    } else if(pilt3.checked){
        vastus2.innerHTML=arvuta(kogus.value, pilt3hind)+"euro";
    } else{
        vastus2.innerHTML="Vali, mis pilti sa soovid";
    }
}


// Vahetasin ilma $ -
function SynniArvestus() {
    let SynniInput = document.getElementById('synni').value;
    let tanaInput = document.getElementById('tana').value;

    if (!SynniInput || !tanaInput) {
        document.getElementById('vastussynni').innerHTML = "Palun sisestage mõlemad kuupäevad!";
        return;
    }

    let sinnipaev = new Date(SynniInput);
    let praegunepaev = new Date(tanaInput);

    let vanus = praegunepaev.getFullYear() - sinnipaev.getFullYear();
    let monthDifference = praegunepaev.getMonth() - sinnipaev.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && praegunepaev.getDate() < sinnipaev.getDate())) {
        vanus--;
    }

    let output ="Vanus: " + vanus + " aastat"

    document.getElementById('vastussynni').innerHTML = output;
}


// Teine Kalklulatoor
// Что то взяла с кода выше тоже. НО ПАРУ ЧАСТЕЙ
function sunnipaevradio() {
    let synniaeg = document.getElementById("synnipaev").value;
    let aastavalik = document.getElementsByName("valiksynni");
    let vastussynni2 = document.getElementById("vastussynni2");
    let vanus;
    let valikLeitud = false;   // подругому не работает, изначально нечего не выброно в радио кнопках, она false

    for (let i = 0; i < aastavalik.length; i++) {
        if (aastavalik[i].checked) {

            let synniaasta = new Date(synniaeg).getFullYear();  // Получаем дату и берем из нее год
            let Valinudaasta = Number(aastavalik[i].value);  // Выброное переобразуем в числовое значение

            vanus = Valinudaasta - synniaasta;
            vastussynni2.innerHTML = vanus;
            vastussynni2.style.backgroundColor = "purple";
            valikLeitud = true;

            vastussynni2 = randomp


            break;
        }
        else {   //теоритически не нужно, т.к. радио кнопки один всегда включин
            vastussynni2.innerHTML = "Vale";
            vastussynni2.style.backgroundColor = "red";
        }
    }
}

function randomp() {
    const pildid2 =[
        'img/A1.png',
        'img/N2.png',
        'img/Y4.png',
        'img/Z3.png'
    ];

    const pilt2=Math.floor(Math.randomp()*pildid2.length);
    const rpilt2=pildid2[pilt2];
    const randomp=document.getElementById("randomp");

    randomp.src=rpilt2;
}



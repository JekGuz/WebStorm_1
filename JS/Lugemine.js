function puhasta(){
    let vastus=document.getElementById("vastus");
    let vastus2=document.getElementById("vastus2");
    let vastus3=document.getElementById("vastus3");
    let vastus4=document.getElementById("vastus4");
    let nimi=document.getElementById("nimi");
    let varv=document.getElementById("varv");
    let jah=document.getElementById("jah");
    let ei=document.getElementById("ei");
    let valik=document.getElementById("valik");
    let pilt=document.getElementById("pilt");


    vastus.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastus4.innerHTML="";
    nimi.value="";
    varv.value="black";
    jah.checked="";
    ei.checked="";
    //valik.selectedIndex=0; одно и тоже что и valik.selectedIndex="";
    valik.selectedIndex="";
    pilt.src="";
}

function tekstLugimine(){
    // innerHTML - genereerib vastus kohal id = vastus
    document.getElementById("vastus").innerHTML=
        "Tere päevast, " +
        document.getElementById("nimi").value
     + "!";
}
//будем использовать переменые let
function nuppVajutame(){
    let vastus2=document.getElementById("vastus2");
    let nimi=document.getElementById("nimi").value;
    let varv=document.getElementById("varv").value;

    vastus2.innerHTML="Sa tegid nuppu vajutamine, " + nimi + ". Tubli";
    vastus2.style.color=varv;
}

//Radio nuppu vajutamine
function radioNupp(){
    let vastus3=document.getElementById("vastus3");
    let jah=document.getElementById("jah");
    let ei=document.getElementById("ei");
    let pilt=document.getElementById("pilt");

    if(jah.checked){
        vastus3.innerHTML="Sinu valik on "+ jah.value +".";
        pilt.src="img/cloud.png";
    }
    else if(ei.checked){
        vastus3.innerHTML="Sinu valik on "+ ei.value +".";
        pilt.src="img/ligthing.png";
    }
    else {
        vastus3.innerHTML="Sa pead midagi valida";
        pilt.src="";
    }
}

function selectValik(){
    let vastus4=document.getElementById("vastus4");
    let valik=document.getElementById("valik");

    //!==0 если не нулевая сточка
    if(valik.selectedIndex!==0){
        vastus4.innerHTML="Sa oled valikud: " + valik.value;
    }
        else{
            vastus4.innerHTML="Palun te lahti ripploendi ja vali midagi head!";
        }
}
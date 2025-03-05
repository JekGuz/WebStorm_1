function puhasta(){
    let nimivastus=document.getElementById("nimivastus");
    let vanusvastus=document.getElementById("vanusvastus");
    let suguvastus=document.getElementById("suguvastus");
    let checkboxvastus=document.getElementById("checkboxvastus");
    let nimi=document.getElementById("nimi");
    let pois=document.getElementById("jah");
    let tydruk=document.getElementById("ei");

    let selectvastus=document.getElementById("selectvastus");



    nimivastus.innerHTML="Siia tuleb vastus";
    vanusvastus.innerHTML="Siia tuleb vastus";
    suguvastus.innerHTML="Siia tuleb vastus";
    checkboxvastus.innerHTML="Siia tuleb vastus";

    nimi.value="Siia tuleb vastus";
    pois.checked="Siia tuleb vastus";
    tydruk.checked="Siia tuleb vastus";

    //valik.selectedIndex=0; одно и тоже что и valik.selectedIndex="";
    selectvastus.selectedIndex="";
    selectvastus.innerHTML="Siia tuleb vastus";

}

function puhasta1() {
    // Очищаем поля ввода (input)
    document.getElementById("name").value = "";
    document.getElementById("last").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefon").value = "";
    document.getElementById("kuu").value = "";
    document.getElementById("koht").value = "";
    document.getElementById("nadal").value = "";
    document.getElementById("time").value = "";
    document.getElementById("rahul").value = "";
    document.getElementById("varv").value = "";

    // Очищаем чекбоксы
    document.getElementById("suvi").checked = false;
    document.getElementById("sugis").checked = false;
    document.getElementById("talv").checked = false;
    document.getElementById("kevad").checked = false;
    document.getElementById("jah").checked = false;
    document.getElementById("ei").checked = false;

    // Очищаем поле загрузки файла
    document.getElementById("pild").value = "";

    // Очищаем текст в правом столбце
    document.getElementById("nimivastus1").innerHTML = "Siia tuleb vastus";
    document.getElementById("nimivastus2").innerHTML = "Siia tuleb vastus";
    document.getElementById("emailvastus").innerHTML = "Siia tuleb vastus";
    document.getElementById("numbervastus").innerHTML = "Siia tuleb vastus";
    document.getElementById("datevastus").innerHTML = "Siia tuleb vastus";
    document.getElementById("selectvastuskoht").innerHTML = "Siia tuleb vastus";
    document.getElementById("nadalvastus").innerHTML = "Siia tuleb vastus";
    document.getElementById("timevastus").innerHTML = "Siia tuleb vastus";
    document.getElementById("luckvastus").innerHTML = "Siia tuleb vastus";
    document.getElementById("checkboxvastusaeg").innerHTML = "Siia tuleb vastus";
    document.getElementById("selgevastus").innerHTML = "Siia tuleb vastus";
    document.getElementById("piltvastus").innerHTML = "pilt";


    //document.getElementById("highlight").value/innerHTML = "";
    document.getElementById("subitnupp").innerHTML = "";

}




function tekstLugimine(){
    // innerHTML - genereerib vastus kohal id = vastus
    document.getElementById("nimivastus").innerHTML=
        "Sinu nimi: " +
        document.getElementById("nimi").value
        + "!";
}
function tekstLugimine1(){
    // innerHTML - genereerib vastus kohal id = vastus
    document.getElementById("nimivastus1").innerHTML=
        "Sinu nimi: " +
        document.getElementById("name").value
        + "!";
}
function tekstLugimine2(){
    // innerHTML - genereerib vastus kohal id = vastus
    document.getElementById("nimivastus2").innerHTML=
        "Sini perekonnanimi " +
        document.getElementById("last").value
        + "!";
}

function tekstLugimine3(){
    // innerHTML - genereerib vastus kohal id = vastus
    document.getElementById("emailvastus").innerHTML=
        "Email: " +
        document.getElementById("email").value
        + "!";
}

function tekstLugimine4(){
    // innerHTML - genereerib vastus kohal id = vastus
    document.getElementById("numbervastus").innerHTML=
        "Telefon: " +
        document.getElementById("telefon").value
        + "!";
}

function datelugimine(){
    // innerHTML - genereerib vastus kohal id = vastus
    document.getElementById("datevastus").innerHTML=
        "Sinu sünnipäev: " +
        document.getElementById("kuu").value
        + "!";
}
function nadallugimine(){
    // innerHTML - genereerib vastus kohal id = vastus
    document.getElementById("nadalvastus").innerHTML=
        "Sinu lemmik nädal: " +
        document.getElementById("nadal").value
        + "!";
}
function timelugimine(){
    // innerHTML - genereerib vastus kohal id = vastus
    document.getElementById("timevastus").innerHTML=
        "Sinu õnnelik aeg on: " +
        document.getElementById("time").value
        + "!";
}
function lucklugimine(){
    // innerHTML - genereerib vastus kohal id = vastus
    document.getElementById("luckvastus").innerHTML=
        "Sinu õnnelik number on: " +
        document.getElementById("rahul").value
        + "!";
}

//function colorlugimine(){
    // innerHTML - genereerib vastus kohal id = vastus
   // document.getElementById("colorvastus").innerHTML=
       // "Color" +
       // document.getElementById("värv").value;
//}

function numberNupp(){
    document.getElementById("vanusvastus").innerHTML="Sul on "+ document.getElementById("vanus").value + " aastad";

}


function suguNupp(){
    let suguvastus=document.getElementById("suguvastus");
    let pois=document.getElementById("pois");
    let tydruk=document.getElementById("tydruk");

    if(pois.checked){
        suguvastus.innerHTML="Sa oled "+ pois.value +".";
    }
    else if(tydruk.checked){
        suguvastus.innerHTML="Sa oled "+ tydruk.value +".";
    }
    else {
        suguvastus.innerHTML="Mis on sinu sugu";
    }
}

function selgeNupp(){
    let selgevastus=document.getElementById("selgevastus");
    let jah=document.getElementById("jah");
    let ei=document.getElementById("ei");

    if(jah.checked){
        selgevastus.innerHTML=jah.value +".";
    }
    else if(ei.checked){
        selgevastus.innerHTML=ei.value +".";
    }
    else {
        selgevastus.innerHTML="Palun vali";
    }
}

function checkboxkontrol(){
    let checkboxvastus=document.getElementById("checkboxvastus");
    let coca=document.getElementById("coca");
    let lund=document.getElementById("lund");
    let kala=document.getElementById("kala");
    let komm=document.getElementById("komm");
    let lemon=document.getElementById("lemon");
    let talv0=document.getElementById("talv0");
    let suvi0=document.getElementById("suvi0");
// создаем массив
    let selectedValues = [];

    if (coca.checked) {
        selectedValues.push(coca.value);
    }
    if (lund.checked) {
        selectedValues.push(lund.value);
    }
    if (kala.checked) {
        selectedValues.push(kala.value);
    }
    if (komm.checked) {
        selectedValues.push(komm.value);
    }
    if (lemon.checked) {
        selectedValues.push(lemon.value);
    }
    if (talv0.checked) {
        selectedValues.push(talv0.value);
    }
    if (suvi0.checked) {
        selectedValues.push(suvi0.value);
    }
// Показываем результат отображения выбраного
    if (selectedValues.length > 0) {
        checkboxvastus.innerHTML = selectedValues.join("<br>");
    } else {
        checkboxvastus.innerHTML = "Midagi pole valitud";
    }
}

function checkboxaeg(){
    let checkboxvastusaeg=document.getElementById("checkboxvastusaeg");
    let suvi=document.getElementById("suvi");
    let sugis=document.getElementById("sugis");
    let talv=document.getElementById("talv");
    let kevad=document.getElementById("kevad");

// создаем массив
    let selectedValuesaeg = [];

    if (suvi.checked) {
        selectedValuesaeg.push(suvi.value);
    }
    if (sugis.checked) {
        selectedValuesaeg.push(sugis.value);
    }
    if (talv.checked) {
        selectedValuesaeg.push(talv.value);
    }
    if (kevad.checked) {
        selectedValuesaeg.push(kevad.value);
    }

// Показываем результат отображения выбраного
    if (selectedValuesaeg.length > 0) {
        checkboxvastusaeg.innerHTML = selectedValuesaeg.join("<br>");
    } else {
        checkboxvastusaeg.innerHTML = "Midagi pole valitud";
    }
}


function selectKool(){
    let selectvastus=document.getElementById("selectvastus");
    let kool=document.getElementById("kool");

    //!==0 если не нулевая сточка
    if(kool.selectedIndex!==0){
        selectvastus.innerHTML="Sa oled valikud: " + kool.value;
    }
    else{
        selectvastus.innerHTML="Palun te lahti ripploendi ja vali";
    }
}
function selectkoht(){
    let selectvastuskoht=document.getElementById("selectvastuskoht");
    let koht=document.getElementById("koht");

    //!==0 если не нулевая сточка
    if(koht.selectedIndex!==0){
        selectvastuskoht.innerHTML="Sa oled valikud: " + koht.value;
    }
    else{
        selectvastuskoht.innerHTML="Palun te lahti ripploendi ja vali";
    }
}

function piltLugimine() {
    const fileInput = document.getElementById("pild");
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            // Вставляем изображение в блок с id "piltvastus"
            document.getElementById("piltvastus").innerHTML = `<img src="${e.target.result}" alt="salvestatud pilt" style="max-width: 40%; height: auto; object-fit: contain;">`;
        }
        reader.readAsDataURL(file);
    }
}

function subitnupp(event) {
    event.preventDefault(); // Останавливаем стандартную отправку формы

    let name = document.getElementById("name").value;
    let last = document.getElementById("last").value;
    let email = document.getElementById("email").value;
    let telefon = document.getElementById("telefon").value;
    let kuu = document.getElementById("kuu").value;
    let koht = document.getElementById("koht").value;
    let nadal = document.getElementById("nadal").value;
    let time = document.getElementById("time").value;
    let rahul = document.getElementById("rahul").value;
    let varv = document.getElementById("varv").value;

    let aastaaeg = [];
    if (document.getElementById("suvi").checked) aastaaeg.push("Suvi");
    if (document.getElementById("sugis").checked) aastaaeg.push("Sügis");
    if (document.getElementById("talv").checked) aastaaeg.push("Talv");
    if (document.getElementById("kevad").checked) aastaaeg.push("Kevad");

    let selge = document.getElementById("jah").checked ? "Jah" : (document.getElementById("ei").checked ? "Ei" : "Pole valitud");

    let pilt = document.getElementById("pild").files[0];
    let piltName = pilt ? pilt.name : "Pole üles laaditud";

    // Формируем HTML-код с данными
    let output = `
        <h3>Saadud andmed:</h3>
        <ul>
            <li><strong>Nimi:</strong> ${name} ${last}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Telefon:</strong> ${telefon}</li>
            <li><strong>Sünnikuupäev:</strong> ${kuu}</li>
            <li><strong>Sünnilinn:</strong> ${koht || "Pole valitud"}</li>
            <li><strong>Lemmik nädal:</strong> ${nadal || "Pole valitud"}</li>
            <li><strong>Lemmik aeg:</strong> ${time || "Pole valitud"}</li>
            <li><strong>Õnnelik number:</strong> ${rahul}</li>
            <li><strong>Lemmik värv:</strong> <span style="background-color:${varv}; padding:2px 10px;">${varv}</span></li>
            <li><strong>Lemmik aastaaeg:</strong> ${aastaaeg.length > 0 ? aastaaeg.join(", ") : "Pole valitud"}</li>
            <li><strong>Küsimustik on selge:</strong> ${selge}</li>
            <li><strong>Laaditud pilt:</strong> ${piltName}</li>
        </ul>
    `;

    // Выводим данные в `div id="subitnupp"`
    document.getElementById("subitnupp").innerHTML = output;
}

function subitnupp1(event) {
    event.preventDefault(); // Останавливаем стандартную отправку формы

    let name = document.getElementById("nimi").value;
    let vanus = document.getElementById("vanus").value; // Исправил ошибку, заменил last -> vanus
    let sugu = document.querySelector('input[name="sugu"]:checked');
    let kool = document.getElementById("kool").value;

    let meeldib = [];
    document.querySelectorAll('input[name="meldib"]:checked').forEach(checkbox => {
        meeldib.push(checkbox.value);
    });

    let suguText = sugu ? sugu.value : "Pole valitud";

    // Формируем HTML-код с данными
    let output = `
        <h3>Saadud andmed:</h3>
        <ul>
            <li><strong>Nimi:</strong> ${name}</li>
            <li><strong>Vanus:</strong> ${vanus}</li>
            <li><strong>Sugu:</strong> ${suguText}</li>
            <li><strong>Kool:</strong> ${kool || "Pole valitud"}</li>
            <li><strong>Mida meeldib:</strong> ${meeldib.length > 0 ? meeldib.join(", ") : "Pole valitud"}</li>
        </ul>
    `;

    // Выводим данные в `div id="subitnupp1"`
    document.getElementById("subitnupp1").innerHTML = output;
}

function highlight(td) {
    td.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// Добавляем обработчик событий для всей страницы, так как у нас нет элемента с id
document.addEventListener('click', function(event) {
    let td = event.target.closest('td'); // Находим ближайший элемент td

    if (!td) return; // Если клик был не на ячейке, выходим

    highlight(td); // Подсвечиваем ячейку
});
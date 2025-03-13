


function majapyhi(){
    const maja=document.getElementById('maja');

    if(maja.getContext) {
        let p = maja.getContext('2d');  // canvas nimi
        p.fillStyle="#b1b1b1";
        p.lineWidth = 3;
        p.fillRect(200, 200, 100, 200); // x, y, width, height

    }
}

function aknad(){
    const maja=document.getElementById('maja');

    if(maja.getContext) {
        let p = maja.getContext('2d');  // canvas nimi
        p.fillStyle="#62a7d1";
        p.lineWidth = 3;
        // верхний этаж
        p.fillRect(215, 220, 10, 20);
        p.fillRect(235, 220, 10, 20);
        p.fillRect(255, 220, 10, 20);
        p.fillRect(275, 220, 10, 20);

        p.fillRect(215, 250, 10, 20);
        p.fillRect(235, 250, 10, 20);
        p.fillRect(255, 250, 10, 20);
        p.fillRect(275, 250, 10, 20);

        p.fillRect(215, 280, 10, 20);
        p.fillRect(235, 280, 10, 20);
        p.fillRect(255, 280, 10, 20);
        p.fillRect(275, 280, 10, 20);

        p.fillRect(215, 310, 10, 20);
        p.fillRect(235, 310, 10, 20);
        p.fillRect(255, 310, 10, 20);
        p.fillRect(275, 310, 10, 20);

        p.fillRect(215, 340, 10, 20);
        p.fillRect(235, 340, 10, 20);
        p.fillRect(255, 340, 10, 20);
        p.fillRect(275, 340, 10, 20);

        p.fillRect(215, 370, 10, 20);
        p.fillRect(235, 370, 10, 20);
        p.fillRect(255, 370, 10, 20);
        //первый этаж

    }
}

function uks(){
    const maja=document.getElementById('maja');

    if(maja.getContext) {
        let p = maja.getContext('2d');  // canvas nimi
        p.fillStyle="#323232";
        p.lineWidth = 3;

        p.fillRect(275, 370, 15, 35);
    }
}

function katus() {
    const maja = document.getElementById('maja');

    if (maja.getContext) {
        let p = maja.getContext('2d');  // canvas nimi
        p.strokeStyle = "black";
        p.lineWidth = 6;
        p.beginPath();
        p.moveTo(300, 200);  // alguspunt
        p.lineTo(200, 200);  // lõppunkt
        p.stroke();

    }
}

function korsten(){
    const maja=document.getElementById('maja');

    if(maja.getContext) {
        let p = maja.getContext('2d');  // canvas nimi
        p.fillStyle="#424242";
        p.lineWidth = 3;

        p.fillRect(265, 180, 10, 20);

    }
}

function suitsu() {
    const maja = document.getElementById('maja');

    if (maja.getContext) {
        let p = maja.getContext('2d');  // canvas nimi
        p.strokeStyle = "#424242";
        p.lineWidth = 1;
        p.beginPath();
        p.moveTo(265, 170);  // alguspunt
        p.lineTo(270, 180);  // lõppunkt

        p.moveTo(270, 160);  // alguspunt
        p.lineTo(265, 170);  // lõppunkt

        p.moveTo(265, 150);  // alguspunt
        p.lineTo(270, 160);  // lõppunkt
        p.stroke();

    }
}

function paike(){
    const maja=document.getElementById('maja');

    if(pyhi.getContext) {
        let p = maja.getContext('2d');  // canvas nimi
        //круг солнца
        p.beginPath();    //algab tee
        p.arc(50, 50, 30, 0, 2 * Math.PI, true);
        p.fillStyle = "#ffe900"
        p.fill();

// ненавижу лучики
        p.strokeStyle = "#dfc800";
        p.lineWidth = 1;
        p.beginPath();
        p.moveTo(50, 10);  // Верхний луч
        p.lineTo(50, -10);
        p.moveTo(50, 90);  // Нижний луч
        p.lineTo(50, 110);
        p.moveTo(10, 50);  // Левый луч
        p.lineTo(-10, 50);
        p.moveTo(90, 50);  // Правый луч
        p.lineTo(110, 50);

        p.moveTo(15, 15);  // Верх-лево
        p.lineTo(0, 0);
        p.moveTo(85, 15);  // Верх-право
        p.lineTo(100, 0);
        p.moveTo(15, 85);  // Низ-лево
        p.lineTo(0, 100);
        p.moveTo(85, 85);  // Низ-право
        p.lineTo(100, 100);
        p.stroke();
    }
}

function pilved(){
    const maja=document.getElementById('maja');

    if(maja.getContext) {
        let p = maja.getContext('2d');  // canvas nimi
        //облака
        p.beginPath();
        p.arc(140, 60, 20, 0, 2 * Math.PI, true);  //x, y, radius
        p.arc(180, 80, 40, 0, 2 * Math.PI, true);
        p.arc(220, 90, 30, 0, 2 * Math.PI, true);
        p.arc(260, 80, 30, 0, 2 * Math.PI, true);

        //p.arc(290, 90, 20, 0, 2 * Math.PI, true);  //x, y, radius
        //p.arc(340, 80, 40, 0, 2 * Math.PI, true);
        //p.arc(390, 70, 30, 0, 2 * Math.PI, true);

        p.fillStyle = "#6ac5df"
        p.fill();
    }
}

function puu(){
    const maja=document.getElementById('maja');

    if(maja.getContext) {
        let p = maja.getContext('2d');  // canvas nimi
        // ствол дерава
        p.fillStyle="#5a2805";
        p.lineWidth = 3;
        p.fillRect(70, 310, 10, 90);

        // листья
        p.beginPath();
        p.fillStyle = "#248e07"
        p.arc(75, 260, 60, 0, 2 * Math.PI, true);
        p.fill();

        //яблоки
        p.beginPath();
        p.fillStyle = "#f60000"
        p.arc(90, 260, 10, 0, 2 * Math.PI, true);
        p.arc(70, 290, 10, 0, 2 * Math.PI, true);
        p.fill();
    }
}


function kustutakoik(){
    const maja=document.getElementById('maja');

    if(maja.getContext) {
        let p = maja.getContext('2d');  // canvas nimi
        p.clearRect(0, 0, 400, 400)
    }
}

function joonistamaja() {
    majapyhi();
    aknad();
    uks();
    katus();
    korsten();
    suitsu();
    paike();
    pilved();
    puu();
}
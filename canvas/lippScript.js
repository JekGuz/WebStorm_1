function kustutalipp(){
    const lipp=document.getElementById('lipp');

    if(lipp.getContext) {
        let p = lipp.getContext('2d');  // canvas nimi
        p.clearRect(0, 0, 400, 300)
    }
}

function eestilipp(){
    const lipp=document.getElementById('lipp');

    if(lipp.getContext) {
        let l = lipp.getContext('2d');  // canvas nimi
        l.fillStyle="blue";
        l.fillRect(0, 0, 330, 70);

        l.fillStyle="black";
        l.fillRect(0, 70, 330, 70);

        l.fillStyle="white";
        l.fillRect(0, 140, 330, 70);
    }
}

function fralipp(){
    const lipp=document.getElementById('lipp');

    if(lipp.getContext) {
        let l = lipp.getContext('2d');  // canvas nimi
        l.fillStyle="blue";
        l.fillRect(0, 0, 110, 210);

        l.fillStyle="white";
        l.fillRect(110, 0, 110, 210);

        l.fillStyle="red";
        l.fillRect(220, 0, 110, 210);
    }
}
function switzlipp(){
    const lipp=document.getElementById('lipp');

    if(lipp.getContext) {
        let l = lipp.getContext('2d');  // canvas nimi
        l.fillStyle="red";
        l.fillRect(0, 0, 330, 210);

        l.fillStyle="white";
        l.fillRect(120, 30, 80, 160);

        l.fillStyle="white";
        l.fillRect(60, 70, 200, 80);
    }
}

function turkeylipp(){
    const lipp=document.getElementById('lipp');

    if(lipp.getContext) {
        let l = lipp.getContext('2d');  // canvas nimi
        l.fillStyle="red";
        l.fillRect(0, 0, 330, 210);

        kuu=new Image();
        kuu.src="kuu.png"
        l.drawImage(kuu, 100, 70);

        star=new Image();
        star.src="star.png"
        l.drawImage(star, 145, 70);

    }
}

function brazillipp(){
    const lipp=document.getElementById('lipp');

    if(lipp.getContext) {
        let l = lipp.getContext('2d');  // canvas nimi
        l.fillStyle="green";
        l.fillRect(0, 0, 330, 210);

        l.strokeStyle = "#FFFF00";
        l.lineWidth = 2;
        l.fillStyle = "#FFFF00";
        l.beginPath();
        l.moveTo(30, 105);  // alguspunt
        l.lineTo(165, 190);
        l.lineTo(300, 105);
        l.lineTo(165, 20);  // lõppunkt
        l.stroke();
        l.fill();

        l.beginPath();    //algab tee
        l.arc(165, 110, 50, 0, 2*Math.PI, true);  // попробовать не 2*Math.PI а 360
        l.fillStyle="blue"
        l.fill(); // joonista

    }
    }






/* Lippd:
1 - nagu FRA
2 - nagu Sveits
3 - oma valik
4 - kus on losatud pilt(vapp)
Kastuta nupp


Ülesanne: MAJAKE
Majake peab olema joonistatud sein, aken, katus, uks, korsten - труба
ja lisa veel midagi omamoodi
Kokku peab olema 6-8
lisa kustuta ja joonista kõik korraga

 */
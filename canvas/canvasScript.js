// canvas puhastamine
function kustuta(){
    const pyhi=document.getElementById('pyhi');

    if(pyhi.getContext) {
        let p = pyhi.getContext('2d');  // canvas nimi
        p.clearRect(0, 0, 400, 300)
    }
}

function ring(){
    const pyhi=document.getElementById('pyhi');
    let radius=document.getElementById('radius');

    if(pyhi.getContext){
        let p=pyhi.getContext('2d');  // canvas nimi
        // ümberjoon - окружность
        p.beginPath();    //algab tee
        p.arc(50, 50, 20, 0, 2*Math.PI, true);  // попробовать не 2*Math.PI а 360
        p.strokeStyle="red"
        p.stroke(); // joonista

        //ring
        p.beginPath();    //algab tee
        p.arc(100, 50, radius.value, 0, 2*Math.PI, true);  // попробовать не 2*Math.PI а 360
        p.fillStyle="blue"
        p.fill(); // joonista

    }
}

//ristkülik
function ristkulik(){
    const pyhi=document.getElementById('pyhi');
    let laius=document.getElementById('laius');
    let korgus=document.getElementById('korgus');

    if(pyhi.getContext) {
        let p = pyhi.getContext('2d');  // canvas nimi
        p.fillStyle="green";
        p.fillRect(100, 200, laius.value, korgus.value); // x, y, width, height

    }
}

//line -joon

function joon() {
    const pyhi = document.getElementById('pyhi');

    if (pyhi.getContext) {
        let p = pyhi.getContext('2d');  // canvas nimi
        //joon
        p.strokeStyle = "black";
        p.lineWidth = 2;
        p.beginPath();
        p.moveTo(300, 100);  // alguspunt
        p.lineTo(100, 100);  // lõppunkt
        p.stroke();
        //kolmnurk
        p.strokeStyle = "black";
        p.lineWidth = 2;
        p.beginPath();
        p.moveTo(50, 100);  // alguspunt
        p.lineTo(150, 100);
        p.lineTo(150, 250);
        p.lineTo(300, 100);  // lõppunkt
        p.stroke();
    }
}
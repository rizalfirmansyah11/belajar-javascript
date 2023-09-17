function halo() {
    alert("Halo Javascript");
}
function waktu() {
    document.getElementById('waktu').innerHTML=Date();
}
function zodiak(){
    let tanggal=document.getElementById('tanggal').value;
    let bulan=document.getElementById('bulan').value;
    let zodiak="tidak tau";
    if(bulan==1){
        if(tanggal>0 && tanggal<20){
            zodiak="gemini";
        }
        if(bulan==2){
        if(tanggal>0 && tanggal <25){
            zodiak="taurus";
        }
        if(bulan==3){
        if(tanggal>0 && tanggal <20 ){
            zodiak="aries";
        }
    }
    document.getElementById('zodiak').innerHTML=zodiak;
}
}
}
function kali(){
let a=document.getElementById(bil1).value;
let b=document.getElementById(bil2).value;
let hasil=a*b
document.getElementById('hasil').innerHTML=hasil;
}


let btn=document.getElementById('waktu');

btn.onclick=waktu();

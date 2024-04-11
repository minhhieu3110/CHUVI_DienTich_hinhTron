function dt(){
    let bk = +document.getElementById('r').value;
    let dtich = 3.14*bk*bk;
    document.getElementById('dt').innerHTML= "Diện tích: "+ dtich;
}
function cv(){
    let bk = +document.getElementById('r').value;
    let cvi = 3.14*2*bk;
    document.getElementById('cv').innerHTML="Chu Vi: "+ cvi;
}

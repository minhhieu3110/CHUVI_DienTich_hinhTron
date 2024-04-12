function dt(){
    let bk = +document.getElementById('r').value;
    if(bk < 0){
        document.getElementById('dt').innerHTML='Bán kính hình tròn phải lớn hơn 0';
    }else {
        let dtich = 3.14*bk*bk;
        document.getElementById('dt').innerHTML= "Diện tích: "+ dtich;
    }

}
function cv(){
    let bk = +document.getElementById('r').value;
    if(bk < 0){
        document.getElementById('cv').innerHTML='Bán kính hình tròn phải lớn hơn 0';
    }else {
        let cvi = 3.14*2*bk;
        document.getElementById('cv').innerHTML="Chu Vi: "+ cvi;
    }

}

function TinhTienDien() {
var soKm = document.getElementById('soKW').value;
var User = document.getElementById('nguoiDung').value;
console.log(soKm,User);
var thanhtien =0;
if (soKm <= 0) {
   alert ('Số KW không hợp lệ !!')
}
else if (0 < soKm && soKm <=50) thanhtien = soKm * 500;        
else if(50<= soKm && soKm <=100) thanhtien = 50*500 + (soKm - 50)*650;   
else if(100<= soKm && soKm <=200) thanhtien = 50*(500 + 650) + (soKm - 100)*850;
else if(200<= soKm && soKm <=350) thanhtien = 50*(500 + 650) + 100*850 + (soKm - 200)*1100;    
else thanhtien = 50*(500 + 650) + 100*850 + 150*1100 + (soKm - 350)*1300;  
   document.getElementById('ketqua2').innerHTML ="Tên người dùng là: " + User + " <br>Tổng tiền điện là: " + thanhtien.toLocaleString() + " VNĐ";
}

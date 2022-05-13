function xuatKetQua() {
    var khuVucUuTien = document.getElementById('khuVuc').value;
    var DoiTuongUuTien = document.getElementById('doiTuong').value;
    var toan = document.getElementById('diemA').value;
    var ly = document.getElementById('diemB').value;
    var hoa = document.getElementById('diemC').value;
    var diemChuan = document.getElementById('diemChuan').value;
    diemKhuVuc = diemVung(khuVucUuTien);
    diemDoiTuong = diemUuTien(DoiTuongUuTien);
    var diem3mon = 0;
    diem3mon = Number(toan) + Number(ly) + Number(hoa) + Number(diemKhuVuc) + Number(diemDoiTuong);
    if (toan <= 0 || ly <= 0 || hoa <= 0) document.getElementById('chao').innerHTML = "Bạn đã trược :( <br>Một trong 3 môn nhỏ hơn hoặc bằng 0"
    else if (diem3mon < diemChuan) document.getElementById('chao').innerHTML = "Tổng số điểm của bạn là: " + diem3mon + "<br>Chia buồn bạn đã trượt :("
    else document.getElementById('chao').innerHTML = "Tổng số điểm của bạn là: " + diem3mon + "<br>Chúc mừng bạn đã đậu :)"
}
function diemVung(value) {
    var diemKhuVuc = 0;
    if (value == 'A') diemKhuVuc = 0;
    else if (value == 'B') diemKhuVuc = 2;
    else if (value == 'C') diemKhuVuc = 1;
    else diemKhuVuc = 0.5;
    return diemKhuVuc;
}
function diemUuTien(value) {
    var diemDoiTuong = 0;
    if (value == 'A') diemDoiTuong = 0; 
    else if (value == 'B') diemDoiTuong = 2.5;
    else if (value == 'C') diemDoiTuong = 1.5;
    else diemDoiTuong = 1; 
    return diemDoiTuong;
}



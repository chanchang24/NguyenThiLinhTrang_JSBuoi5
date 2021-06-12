//Bài 1 Quản lý tuyển sinh
/*
B1: Input
- diemMon1, diemMon2, diemMon3, diemChuan, khuVuc, doiTuong
B2: Handle
- tạo biến diemDoiTuong, diemKhuVuc 
- tạo hàm tinhDiemUuTien thực hiện các trường hợp của khuVuc và doiTuong 
- trả về biến diemUuTien = diemDoiTuong + diemKhuVuc 
- tạo biến diemTong = diemMon1 + diemMon2 + diemMon3 + diemUuTien;
B3: Output
- xuất thông báo đậu hay rớt, tổng số điểm đạt được.
*/


var btnXem = document.querySelector('#btnXem');

var tinhDiemUuTien = function () {
    var khuVuc = document.querySelector('#khuVuc').value;
    var doiTuong = document.querySelector('#doiTuong').value;
    var diemKhuVuc = 0;
    var diemDoiTuong = 0;
    if (khuVuc == 'A') {
        diemKhuVuc = 2;
    } else if (khuVuc == 'B') {
        diemKhuVuc = 1;
    } else if (khuVuc == 'C') {
        diemKhuVuc = 0.5;
    } else if (khuVuc == 'X') {
        diemKhuVuc = 0;
    } else {
        alert('Hãy nhập lại khu vực')
    }
    if (doiTuong == 1) {
        diemDoiTuong = 2.5;
    } else if (doiTuong == 2) {
        diemDoiTuong = 1.5;
    } else if (doiTuong == 3) {
        diemDoiTuong = 1;
    } else if (doiTuong == 0) {
        diemDoiTuong = 0;
    } else {
        alert('Hãy nhập lại đối tượng')
    }
    var diemUuTien = diemDoiTuong + diemKhuVuc;
    return diemUuTien;

}

btnXem.onclick = function () {
    var diemChuan = document.querySelector('#diemChuan').value;
        var diemMon1 = document.querySelector('#diemMon1').value;
        var diemMon2 = document.querySelector('#diemMon2').value;
        var diemMon3 = document.querySelector('#diemMon3').value;
        
    if (diemMon1 > 10 || diemMon1 < 0 || diemMon2 > 10 || diemMon2 < 0 || diemMon3 > 10 || diemMon3 < 0) {
        alert('Vui lòng nhập lại điểm')
    } else {
        var diemTong = parseFloat(diemMon1) + parseFloat(diemMon2) + parseFloat(diemMon3) + parseFloat(tinhDiemUuTien());
        if (diemTong >= diemChuan && (diemMon1 != 0 && diemMon2 != 0 && diemMon3 != 0)) {
            alert('Bạn đã đậu ' + '\n Điểm của bạn ' + diemTong);
        } else {
            alert('Bạn đã rớt ' + '\n Điểm của bạn ' + diemTong);
        }
    }
}

//Bài 1 Quản lý tuyển sinh
/*
B1: Input
- ten, soKw
B2: Handle
- tạo biến tongTien; 
- tạo biến diemTong = diemMon1 + diemMon2 + diemMon3 + diemUuTien;
B3: Output
- xuất thông báo đậu hay rớt, tổng số điểm đạt được.
*/

var btnTinhTien = document.querySelector('#btnTinhTien');


btnTinhTien.onclick = function(){
        var tongTien = 0;
        var ten = document.querySelector('#ten').value;
        var soKw = document.querySelector('#soKw').value;
        if(soKw != parseInt(soKw)){
            alert('Nhập số nguyên')
        }else{
            if(soKw <= 50 ){
                tongTien = soKw*500;
            }else if(50 < soKw && soKw <= 100 ){
                tongTien = 50*500 + (soKw - 50 ) * 650;
            }else if(100 < soKw && soKw <= 200){
                tongTien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
            }else if(200 < soKw && soKw <= 350){
                tongTien =  50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
            }else{
                tongTien =  50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350 ) * 1300 ;
            }
            alert(ten + ' ' + 'có tiền điện phải trả: '+ tongTien + 'đ');
        }
        
}



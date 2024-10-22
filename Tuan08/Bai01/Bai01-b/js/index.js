$(document).ready(function() {
    $("#register").click(function(e) {
        e.preventDefault();
        var ho = $("#ho").val();
        var ten = $("#ten").val();
        var email = $("#email").val();
        var nlemail = $("#nlemail").val();
        var matKhau = $("#matKhau").val();
        var namSinh = $("#namSinh").val();

        let regHo = /^[A-Z].*$/;
        if (!regHo.test(ho)) {
            alert("Họ bắt đầu bằng ký tự chữ hoa");
            return;
        }

        let regTen = /^[A-Z].*$/;
        if (!regTen.test(ten)) {
            alert("Tên bắt đầu bằng ký tự chữ hoa");
            return;
        }

        let regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!regEmail.test(email)) {
            alert("Email phải đúng định dạng");
            return;
        }

        if (nlemail !== nlemail) {
            alert("Nhập lại email phải trùng khớp với email đã nhập");
            return;
        }

        let regMatKhau = /^[A-Za-z0-9]{6,}$/;
        if (!regMatKhau.test(matKhau)) {
            alert("Mật khẩu phải có ký tự chữ, số và ít nhất là 6 ký tự");
            return;
        }

        let regNamSinh = /^((2[0-9]{2}[0-1])||(1[0-9]{3}))$/;
        if (!regNamSinh.test(namSinh) || namSinh == "") {
            alert("Năm sinh phải < 2002");
            return;
        }
        alert("Đăng kí thành công");
    })
});
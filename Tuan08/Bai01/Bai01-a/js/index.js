$(document).ready(function() {

    $("#txtDN").blur(function(e) {
        var txtDN = $(this).val();
        let reg = /^[a-zA-z]+[!@#$%^&*()]?[0-9]?$/;
        var span = $(this).next();
        if (reg.test(txtDN)) {
            span.text("");
        } else {
            span.text("*");
        }
    });

    $("#txtMK").blur(function() {
        var txtMK = $(this).val();
        let reg = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}$/;
        var span = $(this).next();
        if (reg.test(txtMK)) {
            span.text("");
        } else {
            span.text("Từ 8 ký tự trở lên, có ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt*");
        }
    })

    $("#txtXNMK").blur(function() {
        var txtXNMK = $(this).val();
        var txtMK = $("#txtMK").val();
        var span = $(this).next();
        if (txtXNMK !== txtMK || txtXNMK === '') {
            span.text("Mật khẩu không giống nhau*");
        } else {
            span.text("");
        }
    })

    $("#txtName").blur(function() {
        var txtName = $(this).val();
        var span = $(this).next();
        let reg = /^[A-Z][a-z]+( [A-Z][a-z]+)+$/;
        if (reg.test(txtName)) {
            span.text("");
        } else {
            span.text("Phải có ít nhất Họ, Tên. Ký tự đầu bắt buộc phải viết hoa*");
        }
    })

    $("#date").blur(function() {
        var date = $(this).val();
        var year = date.substring(0, 4);
        var current = (new Date()).getFullYear();
        var span = $(this).next();
        if (current - year >= 16) {
            span.text("");
        } else {
            span.text("Ngày tháng năm sinh phải trên 16 tuổi*");
        }
    })

    $("#txtDC").blur(function() {
        var txtDC = $("#txtDC").val();
        var span = $(this).next();
        if (txtDC == "") {
            span.text("Địa chỉ không được rỗng*");
        } else {
            span.text("");
        }
    })

    $("#txtPhone").blur(function() {
        var txtPhone = $("#txtPhone").val();
        var span = $(this).next();
        let reg = /^(09|03|07|06|05|04)[0-9]{8}$/;
        if (reg.test(txtPhone)) {
            span.text("");
        } else {
            span.text("Số điện thoại 10 ký tự số, bắt đầu là 09, 03, 07, 06, 05, 04*");
        }
    })

    $("#txtEmail").blur(function() {
        var txtEmail = $("#txtEmail").val();
        var span = $(this).next();
        let reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (reg.test(txtEmail)) {
            span.text("");
        } else {
            span.text("Không đúng định dạng email*");
        }
    })
});
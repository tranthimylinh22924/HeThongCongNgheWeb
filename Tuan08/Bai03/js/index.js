$(document).ready(function() {
    $("#hoTen").blur(function() {
        var hoTen = $(this).val();
        let reg = /^[A-Z][a-z]+( [A-Z][a-z]+)+$/;
        if (!reg.test(hoTen)) {
            alert("Phải có ít nhất Họ, Tên. Ký tự đầu bắt buộc phải viết hoa")
            $("#register").attr("disabled", true);
        } else {
            $("#register").attr("disabled", false);
        }
    })

    $("#register").click(function(e) {
        e.preventDefault();
        var hoTen = $("#hoTen").val();
        var lop = $("#lop").val();
        var mon = $("#mon").val();
        var loai = $("#LT:checked").length > 0 ? "Lý thuyết" : "Thực hành";
        var html = `<tr>
                        <td>${hoTen}</td>
                        <td>${lop}</td>
                        <td>${mon}</td>
                        <td>${loai}</td>
                    </tr>`
        var data = document.getElementById("data");
        data.innerHTML += html;
    })
});
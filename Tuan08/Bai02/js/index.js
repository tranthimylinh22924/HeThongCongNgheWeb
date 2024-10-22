$(document).ready(function() {
    $(document).on("change", ".quantity", function() {
        var tong = 0;
        var listQuantity = document.querySelectorAll(".quantity");
        Array.from(listQuantity).forEach(item => {
            var quantity = parseInt(item.value);
            var price = parseInt(item.parentElement.previousElementSibling.textContent);
            tong += quantity * price;
        })
        $("#total").text(tong);
    })
});
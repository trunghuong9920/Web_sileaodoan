function number_order_minus(){
    var ip = document.getElementById("number_order_ip").value
    if(parseFloat(ip) > 0){
    x = parseFloat(ip) - 1

    }
    document.getElementById("number_order_ip").value = x;
}
function number_order_add(){
    var ip = document.getElementById("number_order_ip").value
    var max = document.getElementById("product_number-order_max").value
    if(parseFloat(max) > parseFloat(ip)){
    x = parseFloat(ip) + 1

    }
    document.getElementById("number_order_ip").value = x;
}
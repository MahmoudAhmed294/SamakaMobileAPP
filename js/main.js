var slider = document.getElementById("customRange1");
var output = document.getElementById("demo");

output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
};
var slider_2 = document.getElementById("customRange_2");
var output_2 = document.getElementById("demo_2");

output_2.innerHTML = slider_2.value;

slider_2.oninput = function() {
    output_2.innerHTML = this.value;
};
function GO_back_from_chat() {
history.back()
}

$('#show_categres').click(function(){
    var map_categ = $('#map_Categories').hasClass('hidden_Categories');
   var arrow= $('#map_arrow').hasClass('up_Categories_normal');

    if ((map_categ && arrow) == true ){
$('.up_Categories_normal').addClass('up_Categories');
    $('#map_Categories').removeClass('hidden_Categories');
}
    else if ((map_categ && arrow) == false){
        $('.up_Categories_normal').removeClass('up_Categories');
        $('#map_Categories').addClass('hidden_Categories');

    }
});

function Product_Details_Order() {
    $(".shadow_Product").css("top", "0");
    $(".shadow_Product").css("display", "block");

    $(".shadow_Product").css("opacity", "0.6");
$(".Details_order").css("top", "15%");

}
function close_Product_window() {
    $(".shadow_Product").css("top", "-500px");
    $(".shadow_Product").css("opacity", "0");
    $(".Details_order").css("top", "-500px");

}
    var counter_num=0;
function plus(e){
     counter_num += 1;
     if( e === 1 ){
    $('#value_counter_1').text(counter_num);
     }
    if( e === 2 ){
         $('#value_counter_2').text(counter_num);
     }
     if( e === 3 ){
         $('#value_counter_3').text(counter_num);
     }

}
function minus(e){
    if(counter_num > 0){
     counter_num -= 1;
        if( e === 1 ){
            $('#value_counter_1').text(counter_num);
        }
        if( e === 2 ){
            $('#value_counter_2').text(counter_num);
        }
        if( e === 3 ){
            $('#value_counter_3').text(counter_num);
        }
    }
}
function  Reviewes_page() {
$(".Details_page").css("display","none");
$(".Reviewes_Page").css("display","block");

}function  Details_page() {
$(".Details_page").css("display","block");
$(".Reviewes_Page").css("display","none");

}
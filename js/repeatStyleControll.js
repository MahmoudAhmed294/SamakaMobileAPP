

// input controll --------------------------------------------

// $(".inp_style_login").keyup(function() {
//     if ($(this).attr('type') == 'text')  {
//     if ($(this).val().length >= 2  ) {
//         $(this).css('border-bottom', '#0ECB21 1px solid');   //green color
//     }
//     else if ($(this).val().length <= 2){
//         $(this).css('border-bottom', '#D92A29 1px solid');//red color
//     }
//     }
//      else if ($(this).attr('type') == 'password' ){
//         if ($(this).val().length == 8) {  //password length = 8
//             $(this).css('border-bottom', '#0ECB21 1px solid');   //green color
//         }
//
//     }
//
//
//      // else if ($(this).attr('type') == 'email' ){
//      //    if ($(this).val().length == 8) {  //password length = 8
//      //        $(this).css('border-bottom', '#0ECB21 1px solid');   //green color
//      //    }
//      //
//     // }
//
// });
//
// $(".inp_style_login").focus(function () {
// if ($(this).val() == ""){
//
//     $(this).css('border-bottom', '#D92A29 1px solid'); //red color
// }
//     if ($(this).val().length == 1) {
//         $(this).css('border-bottom', '#0ECB21 1px solid');   //green color
//     }
//
// });
// $(".inp_style_login").focusout(function () {
//     if ($(this).val() == ""){
//
//         $(this).css('border-bottom', '#D92A29 1px solid'); //red color
//     }
//
// });
//

function footer() {
    var data=`<div class='row justify-content-center '   >
    <div class='col footer_item  text-center' onclick='open_nav(1)'><i class='flaticon-home ml-4'></i> </div>
  <div class='col footer_item text-center' onclick='open_nav(2)'><i class='flaticon-shout ml-4'></i></div>
  <div class='col footer_item text-center' onclick='open_nav(3)'> <i class='flaticon-comment ml-4'></i></div>
   <div class='col footer_item text-center' onclick='open_nav(4)'><i class='flaticon-placeholder-filled-point ml-4'></i></div>
    </div>`;

    $('.footer').html(data);
}
footer();
function  open_nav(num) {
if(num == 1 ){
  window.location.assign("#Home");
}
if(num == 2 ){
  window.location.assign("#Offers");
}
if(num == 3 ){
  window.location.assign("#chat");
}
if(num == 4 ){
  window.location.assign("#map");
}


}
function header() {
 var ele_header=`
 <div data-role="header" class="my_bg_blue"   >
    <div class="rounded-circle circle_1 position-absolute"  >
        <div class="rounded-circle circle_2" ">

    </div>
</div>
        </div>
</div>

    <form action="" method="" class="d-flex">
        <a  href="#signup"  class="btn_gray btn_signup w-50 text"   data-role="none" >Sign Up</a>
        <a href="#signin" class="btn_gray btn_login active_btn_login w-50 text"      data-role="none">Log in</a>
    </form>

<div class="text-center mt-5"  >
    <span class="mr-3"><a href="#"><img src="img/icon/twitterLogo.png" > </a></span>
    <span><a href="#"><img src="img/icon/fblogo.png"> </a></span>
<div class="d-flex justify-content-center mt-2">
<div class="line"></div>
<span class="text_color text">or</span>
<div class="line"></div>
</div>
</div>
`;
 $('.content_user_pages').html(ele_header)
}
header();

function menu() {
    let share_menu = `<div class="menu__close">
            <i class="flaticon-cancel  closeMenu"></i>
        </div>
        <div class="menu__content">
            <ul class="menu__content--list list-group ">
                <a href="#Home" ><li class="menu__content--item text active_menu" data-text="Home" data-hash="#Home"></li></a>
                <a href="#Wallet" ><li class="menu__content--item text" data-text="Wallet" data-hash="#Wallet"></li></a>
                <a href="#Notifications" ><li class="menu__content--item text" data-text="Notifications" data-hash="#Notifications"></li></a>
                <a href="#History" ><li class="menu__content--item text" data-text="History" data-hash="#History"></li></a>
                <a href="#My_Orders" ><li class="menu__content--item text" data-text="MyOrders" data-hash="#My_Orders"></li></a>
                <a href="#splash"><li class="menu__content--item text" data-text="Language"  data-hash="#splash"></li></a>
                <a href="#Settings" ><li class="menu__content--item text" data-text="setting" data-hash="#Settings"></li></a>
            </ul>
        </div>`;

    $('.menu').html(share_menu);

}
menu();
$(".btn_signup").click(function () {

    $('.btn_login').removeClass('active_btn_login');
$('.btn_signup').addClass('active_btn_login');
$('#signup .content_user_pages .mt-5 ').addClass('mt-3');
$("#signup .content_user_pages .mt-5 ").removeClass('mt-5');

});
$('.btn_login').click(function () {
    $('.btn_login').addClass('active_btn_login');
    $('.btn_signup').removeClass('active_btn_login');

    })

//----------------------------------------------------------
$(function() {

    var body = $('#phone_code');

    function goToNextInput(e) {
        let key = e.which,
            t = $(e.target),
            sib = t.next('input');



        if (!sib || !sib.length) {
            sib = body.find('input').eq(0);
        }
        sib.select().focus();
    }

    function onKeyDown(e) {
        var key = e.which;

        if (key === 9 || (key >= 48 && key <= 57)) {
            return true;
        }

        e.preventDefault();
        return false;
    }

    function onFocus(e) {
        $(e.target).select();
    }
function  keypress(e){
    var key = e.which;

    if (key === 9 || (key >= 48 && key <= 57)) {
        return true;
    }

    e.preventDefault();
    return false;
}




    body.on('keyup', 'input', goToNextInput);
    body.on('keydown', 'input', onKeyDown);
    body.on('click', 'input', onFocus);
    // body.on('keypress', 'input',);
})

$(".openMenu").click(function(){
    $(".move").css({
        transform: 'translate(180px, 93px)',
        boxShadow: '0px 0 15px #3333337a',
        borderRadius: '10px'
    })
    $(".openMenu").css("display","none");
    $(".menu").css({
        zIndex:'100',
        display: 'block'
    })
})
$(window).on('hashchange', function(e){
        $(".menu").css({
            zIndex:'0',
            display: 'none'
        })
        $(".openMenu").css("display","block");

        $(".header").css({'border-radius':'0px'})
        $(".move").css({
            transform: 'translate(0px, 0px)',
            boxShadow: 'unset',
            borderRadius: '0px'
        })


    });

$(".closeMenu").click(function(){
    $(".menu").css({
        zIndex:'0',
        display: 'none'
    })
    $(".openMenu").css("display","block");

    $(".header").css({'border-radius':'0px'})
    $(".move").css({
        transform: 'translate(0px, 0px)',
        boxShadow: 'unset',
        borderRadius: '0px'
    })

});
// $(window).load(function () {
//

               $(window).on('load', function(e) {
               // debugger;

                   let page_url=location.hash;
let menu_items_Arr=$('.menu__content--item');
        for (let x =0; x < 7; x++) {

       let data_url= menu_items_Arr[x].getAttribute('data-hash');
       if(data_url == page_url){
        $(".menu__content--item").removeClass('active_menu');
           $("[data-hash]").each(function (index, value) {
               $(".menu__content--item").addClass(".active_menu");
           });
       }
        }
               });

// });


// }
// active_st_btn();
// function open_page(val) {
//     $.mobile.pageContainer.pagecontainer("change", "#" + val, {transition: "none"});
// }
//
// $('.back_btn').click(function () {
//     back_btn();
// });

// function alert_bg(content, type) {
//     $('#footer_request_alert').html(content);
//     $('#footer_request_alert').addClass(type);
//     $('#footer_request_alert').removeClass('d-none');
//     setTimeout(function () {
//         $('#footer_request_alert').attr('class', 'd-none animated fadeIn');
//     }, 4000);
// }
//
// $('#footer_request_alert').click(function () {
//     $('#footer_request_alert').attr('class', 'd-none animated fadeIn');
// });
//
// function showToast(toast_msg, type) {
//     alert_bg(toast_msg, type);
//
//
// }

//
// function user_login() {
//     $('.form_loader').html("<img width='50' style='margin-top:5px;' src='img/loader_form.gif'>");
//     $.ajax({
//         url: config_url + "login.php",
//         type: "POST",
//         data: $('#login_form').serialize(),
//         success: function (result) {
//             $('.form_loader').html("");
//
//             var obj = JSON.parse(result);
//             console.log(obj);
//             if (obj.status == 'error') {
//                 showToast(obj.msg, 'error');
//             }
//             if (obj.status == 'success') {
//                 showToast(obj.msg, 'success');
//                 localStorage.setItem('user_id', obj.user.client_id);
//                 localStorage.setItem('user_type', 'mom');
//                 setTimeout(function () {
//                     window.location = "account.html";
//                 }, 2000);
//             }
//
//         }, error: function (error) {
// //console.log(error);
//             $('.form_loader').html("<img width='50' style='margin-top:5px;' src='imgo_wifi.gif'>");
//
//         }
//     });
//
//
// }
//
// function user_create() {
//     $('.form_loader').html("<img width='50' style='margin-top:5px;' src='img/loader_form.gif'>");
//     $.ajax({
//         url: config_url + "sing_up.php",
//         type: "POST",
//         data: $('#client_create_form').serialize(),
//         success: function (result) {
//             var obj = JSON.parse(result);
//             $('.form_loader').html("");
//             console.log(obj);
//             if (obj.status == 'error') {
//                 showToast(obj.msg, 'error');
//             }
//             if (obj.status == 'success') {
//                 showToast(obj.msg, 'success');
//                 $('#active_code').val(obj.active_code);
//                 $('#user_mobile').val(obj.mobile);
//                 $('#active_mobile').val(obj.mobile);
//                 open_page('active');
//             }
//
//         }, error: function (error) {
// //console.log(error);
//             $('.form_loader').html("<img width='50' style='margin-top:5px;' src='imgo_wifi.gif'>");
//         }
//     });
//
//
// }
//
// function active() {
//
//
//     $.ajax({
//         url: config_url + "active.php",
//         type: "POST",
//         data: $('#active_form').serialize(),
//         success: function (result) {
//             $('.form_loader').html("");
//
//             var obj = JSON.parse(result);
//             console.log(obj);
//             if (obj.status == 'error') {
//                 showToast(obj.msg, 'error');
//             }
//             if (obj.status == 'success') {
//                 showToast(obj.msg, 'success');
//                 localStorage.setItem('user_id', obj.user.client_id);
//                 setTimeout(function () {
//                     window.location = "account.html";
//                 }, 2000);
//             }
//
//         }, error: function (error) {
//
//
//         }
//     });
//
//
// }
//
//
//
// function forget_password() {
//     $('.form_loader').html("<img width='50' style='margin-top:5px;' src='img/loader_form.gif'>");
//     $.ajax({
//         url: config_url + "mom_forget.php",
//         type: "POST",
//         data: $('#mom_forget_form').serialize(),
//         success: function (result) {
//             $('.form_loader').html("");
//
//             var obj = JSON.parse(result);
//             console.log(obj);
//             if (obj.status == 'error') {
//                 showToast(obj.msg, 'error');
//             }
//             if (obj.status == 'success') {
//                 showToast(obj.msg, 'success');
//
//             }
//
//         }, error: function (error) {
// //console.log(error);
//             $('.form_loader').html("<img width='50' style='margin-top:5px;' src='imgo_wifi.gif'>");
//
//         }
//     });
//
// }
//
//
// function load_cities_name() {
//     var data_content="";
//
//     $.ajax({
//         url: config_url + "city_list.php",
//         type: "POST",
//         data: {
//             city_id:$('#city_id').val(),
//             lang:lang,
//             user_id:user_id
//         },
//         success: function (result) {
//
//             var obj = JSON.parse(result);
//
//             console.log(obj);
//
//             for(var i=0; i<obj.length; i++){
//                 data_content+=city_data(obj[i].location_id,obj[i].name,obj[i].selected);
//             }
//
//             $('#cititesNames').html(data_content);
//
//         }, error: function (error) {
//             console.log(error);
//
//         }
//     });
//
// }
//
// function city_data(id,name,selected) {
//     var click_ad="'"+id+"','"+name+"'";
//     var data='<li onclick="set_city('+click_ad+')" class="cities-list-item">'+name+'</li>';
//     return data;
// }
//
// //
//
//
// function set_city(city_id,city_name) {
//     $('#city_id').val(city_id);
//     $('#cityName').html(city_name);
//     $("#citieslist").hide();
// }
//
//
// function open_nav(val) {
//
//     if(val==1){ open_page('settingsPage'); accountContent(); }
//     if(val==2){  myFav('all'); }
//     if(val==3){ open_page('catPage'); }
//     if(val==4){ open_page('search'); }
//     if(val==5){ open_page('catPage'); }
// }
//
//
//
// function  load_main_cats() {
//     var data_content="";
//     $.ajax({
//         url: config_url + "cat.php",
//         type: "POST",
//         data: {
//             city_id:$('#city_id').val(),
//             lang:lang,
//             user_id:user_id
//         },
//         success: function (result) {
//
//             var obj = JSON.parse(result);
//
//             console.log(obj);
//
//             for(var i=0; i<obj.length; i++){
//                 data_content+=main_cat_data(obj[i].department_id,obj[i].name,obj[i].description,obj[i].icon);
//             }
//
//             $('#main_cats').html(data_content);
//
//         }, error: function (error) {
//             console.log(error);
//
//         }
//     });
// }
//
// function  main_cat_data(id,name,content,icon) {
//     var main_click="'"+id+"',";
//         main_click+="'"+name+"',";
//         main_click+="'"+icon+"'";
//
//     var data='<div class="cat-one">';
//         data+='<a class="cat-one__link" onclick="open_main_department('+main_click+')"></a>';
//         data+='<img class="cat-one__img" src="'+site_url+icon+'" alt="photo">';
//         data+='<h6 class="cat-one__heading">'+name+'</h6>';
//         data+='<h6 class="cat-one__heading">'+content+'</h6>';
//         data+='</div>';
//         data+=' <div class="page__serprator"></div>';
//
//
// return data;
// }
//
//
//
// function open_main_department(id,name,icon) {
//     $('#cat_details_photo').attr('src',site_url+icon);
//     load_sub_cats(id);
//     open_page('catDetailsPage');
// }
//
// function  load_sub_cats(main_id) {
//     var data_content="";
//     $('#sub_categories_list').html(data_content);
//
//     $.ajax({
//         url: config_url + "sub_cat.php",
//         type: "POST",
//         data: {
//             city_id:$('#city_id').val(),
//             lang:lang,
//             main_id:main_id,
//             user_id:user_id
//         },
//         success: function (result) {
//
//             var obj = JSON.parse(result);
//
//             console.log(obj);
//
//             for(var i=0; i<obj.length; i++){
//                 data_content+=sub_categories_list(obj[i].department_id,obj[i].name,obj[i].description,obj[i].icon,obj[i].bg_photo);
//             }
//
//             $('#sub_categories_list').html(data_content);
//
//         }, error: function (error) {
//             console.log(error);
//
//         }
//     });
// }
//
//
// function sub_categories_list(id,name,content,icon,bg_photo) {
//     var main_click="'"+id+"',";
//     main_click+="'"+name+"',";
//     main_click+="'"+content+"',";
//     main_click+="'"+icon+"',";
//     main_click+="'"+bg_photo+"'";
//     var data='<div class="col-4 display_float" onclick="open_department('+main_click+')">';
//         data+='<a class="cat-details-page__all-cat__link"></a>';
//         data+='<div class="cat-details-page__all-cat--box">';
//         data+='<img class="cat-details-page__all--img" src="'+site_url+icon+'" alt="photo">';
//         data+='<p class="cat-details-page__all--heading">'+name+'</p>';
//         data+='</div>';
//         data+='</div>';
//
// return data;
// }
//
// function open_department(id,name,content,icon,bg_photo) {
//     $('#cat_name').html(name);
//     $('#cat_bg_name').html(name);
//     $('#cat_content').html(content);
//     $('#cat_bg_photo').attr('src',site_url+bg_photo);
//     open_page('storesPage');
//     var data_content="";
//     $('#department_products_list').html(data_content);
//
//     $.ajax({
//         url: config_url + "products.php",
//         type: "POST",
//         data: {
//             city_id:$('#city_id').val(),
//             lang:lang,
//             main_id:id,
//             user_id:user_id
//         },
//         success: function (result) {
//
//             var obj = JSON.parse(result);
//
//             console.log(obj);
//
//             for(var i=0; i<obj.length; i++){
//                 data_content+=departments_product_content(obj[i].product_id,obj[i].name,obj[i].photo,obj[i].size,obj[i].price,obj[i].class_name);
//             }
//
//             $('#department_products_list').html(data_content);
//
//         }, error: function (error) {
//             console.log(error);
//
//         }
//     });
// }
//
// function store_menu_details(menu_id,store_id) {
//
//     var data_content="";
//     $('#store_menu_details').html(data_content);
//
//     $.ajax({
//         url: config_url + "StoreProducts.php",
//         type: "POST",
//         data: {
//             city_id:$('#city_id').val(),
//             lang:lang,
//             main_id:menu_id,
//             store_id:store_id,
//             user_id:user_id
//         },
//         success: function (result) {
//
//             var obj = JSON.parse(result);
//
//             console.log(obj);
//
//             for(var i=0; i<obj.length; i++){
//                 data_content+=departments_product_content(obj[i].product_id,obj[i].name,obj[i].photo,obj[i].size,obj[i].price,obj[i].class_name);
//             }
//
//             $('#store_menu_details').html(data_content);
//
//         }, error: function (error) {
//             console.log(error);
//
//         }
//     });
// }
//
//
// function departments_product_content(product_id,name,photo,size,price,class_name) {
//     var ad_cart_click="'"+product_id+"','"+price+"','"+size+"','1'";
//     var ad_product_click="'"+name+"','"+product_id+"','"+price+"','"+size+"','"+photo+"','"+class_name+"'";
//  var data='<ul class="stores-page__list" >'+
//     '<li class="stores-page__list-item" onclick="open_productDetails('+ad_product_click+')">'+
//     '<div class="stores-page__list-item--img-border">'+
//     '<img class="stores-page__list-item--img" src="'+site_url+photo+'" alt="photo">'+
//     '</div>'+
//     '</li>'+
//     '<li class="stores-page__list-item" onclick="open_productDetails('+ad_product_click+')">'+
//     '<div class="stores-page__list-item--text">'+
//     '<h6 class="stores-page__list-item--heading">'+name+'</h6>'+
//     '<p class="stores-page__list-item--paragraph">'+price+'</p>'+
//     '</div>'+
//     '<li class="stores-page__list-item">' +
//     '<i onclick="add_rm_fav('+product_id+')"  class="fas '+class_name+' heart_id_'+product_id+' fa-heart stores-page__list-item--fav-icon"></i>' +
//     '<a class="stores-page__list-item--link" onclick="add_cart_item('+ad_cart_click+')">' +
//     '<i class="fas fa-plus-circle stores-page__list-item--link-icon"></i>اضف الي العربة </a>' +
//     '</li>'+
//     '</li>'+
//     '</ul>';
//  return data;
//  }
//
//   function open_productDetails(name,product_id,price,size,photo,class_name) {
//      $('#product_name').html(name);
//     $('#heart_id_pro').addClass(class_name);
//     $('#heart_id_pro').addClass('heart_id_'+product_id);
//     $('#product_main_photo').attr('src',site_url+photo);
//     $('#heart_id_pro').click(function () {
//         add_rm_fav(product_id);
//     });
//       loadProductDetails(product_id);
//     open_page('productDetails');
//
//  }
//
//
// function loadProductDetails(product_id) {
//     $.ajax({
//         url: config_url + "loadProductDetails.php",
//         type: "POST",
//         data: {
//             city_id:$('#city_id').val(),
//             lang:lang,
//             product_id:product_id,
//             user_id:user_id
//         },
//         success: function (result) {
//              $('#productDetailsContent').html(result);
//         },
//         error:function (error) {
//             console.log(error);
//         }
//     });
// }
//
//
//
//
//
//
// function add_rm_fav(product_id) {
//     $.ajax({
//         url: config_url + "fav.php",
//         type: "POST",
//         data: {
//             city_id:$('#city_id').val(),
//             lang:lang,
//             product_id:product_id,
//             user_id:user_id
//         },
//         success: function (result) {
//             $('#footer_scripts').html(result);
//
//         }, error: function (error) {
//             console.log(error);
//
//         }
//     });
// }
// function rm_fav(product_id) {
//     $('#fav_pro_rm_'+product_id).remove();
//     $.ajax({
//         url: config_url + "fav.php",
//         type: "POST",
//         data: {
//             city_id:$('#city_id').val(),
//             lang:lang,
//             product_id:product_id,
//             user_id:user_id
//         },
//         success: function (result) {
//             $('#footer_scripts').html(result);
//
//         }, error: function (error) {
//             console.log(error);
//
//         }
//     });
// }
// function add_rm_Store_fav(store_id) {
//     $.ajax({
//         url: config_url + "storeFav.php",
//         type: "POST",
//         data: {
//             city_id:$('#city_id').val(),
//             lang:lang,
//             store_id:store_id,
//             user_id:user_id
//         },
//         success: function (result) {
//             $('#footer_scripts').html(result);
//
//         }, error: function (error) {
//             console.log(error);
//
//         }
//     });
// }
// function rm_Store_fav(store_id) {
//     $('#fav_store_rm_'+store_id).remove();
//     $.ajax({
//         url: config_url + "storeFav.php",
//         type: "POST",
//         data: {
//             city_id:$('#city_id').val(),
//             lang:lang,
//             store_id:store_id,
//             user_id:user_id
//         },
//         success: function (result) {
//             $('#footer_scripts').html(result);
//
//         }, error: function (error) {
//             console.log(error);
//
//         }
//     });
// }
//
// function add_cart_item(product_id,price,size,qty) {
//     $.ajax({
//         url: config_url + "add_cart.php",
//         type: "POST",
//         data: {
//             city_id:$('#city_id').val(),
//             lang:lang,
//             product_id:product_id,
//             price:price,
//             qty:qty,
//             size:size,
//             user_id:user_id
//         },
//         success: function (result) {
//
//             var obj = JSON.parse(result);
//             if (obj.status == 'error') {
//                 showToast(obj.msg, 'error');
//             }
//             if (obj.status == 'success') {
//                 showToast(obj.msg, 'success');
//                 count_cart();
//             }
//
//
//         }, error: function (error) {
//             console.log(error);
//
//         }
//     });
// }
// function count_cart() {
//     $.ajax({
//         url: config_url + "count_cart.php",
//         type: "POST",
//         data: {
//             city_id:$('#city_id').val(),
//             lang:lang,
//             user_id:user_id
//         },
//         success: function (result) {
//
//             var obj = JSON.parse(result);
//             if (obj.status == 'show') {
//                 $('.count_cart').html(obj.qty);
//                 $('.count_cart').removeClass('d-none');
//             }
//             if (obj.status == 'hide') {
//                 $('.count_cart').addClass('d-none');
//             }
//
//
//         }, error: function (error) {
//             console.log(error);
//
//         }
//     });
// }
//
//
//
//
// function  openStoreDetails(store_id,store_name) {
//     $('#store_name').html(store_name);
//      open_page('storePage');
//     $.ajax({
//         url: config_url + "loadStoreDetails.php",
//         type: "POST",
//         data: {
//             city_id:$('#city_id').val(),
//             lang:lang,
//             store_id:store_id,
//             user_id:user_id
//         },
//         success: function (result) {
//             $('#storeDetailsContent').html(result);
//         },
//         error:function (error) {
//             console.log(error);
//         }
//     });
//     store_menu_details('all',store_id);
//
// }
//
//
//
// function  showStoreRating(store_id) {
//      $.ajax({
//         url: config_url + "showStoreRating.php",
//         type: "POST",
//         data: {
//             city_id:$('#city_id').val(),
//             lang:lang,
//             store_id:store_id,
//             user_id:user_id
//         },
//         success: function (result) {
//             $('#storeRatingContent').html(result);
//         },
//         error:function (error) {
//             console.log(error);
//         }
//     });
//  open_page('ratesPage');
// }
//
//
//
// accountContent();
// function  accountContent() {
//      $.ajax({
//         url: config_url + "accountContent.php",
//         type: "POST",
//         data: {
//             city_id:$('#city_id').val(),
//             lang:lang,
//             user_id:user_id
//         },
//         success: function (result) {
//             $('#accountContent').html(result);
//         },
//         error:function (error) {
//             console.log(error);
//         }
//     });
//  }
//
//
//
// function  myWallet() {
//      $.ajax({
//         url: config_url + "myWalletContent.php",
//         type: "POST",
//         data: {
//             city_id:$('#city_id').val(),
//             lang:lang,
//             user_id:user_id
//         },
//         success: function (result) {
//             $('#myWalletContent').html(result);
//         },
//         error:function (error) {
//             console.log(error);
//         }
//     });
//      open_page('wallet');
//  }
//
// function  creditCharge() {
//      $.ajax({
//         url: config_url + "creditCharge.php",
//         type: "POST",
//         data: {
//             city_id:$('#city_id').val(),
//             lang:lang,
//             user_id:user_id
//         },
//         success: function (result) {
//             $('#creditChargeContent').html(result);
//         },
//         error:function (error) {
//             console.log(error);
//         }
//     });
//      open_page('creditCharge');
//  }
//
//
//
//  function myFav(load_type) {
//      $.ajax({
//          url: config_url + "myFav.php",
//          type: "POST",
//          data: {
//              city_id:$('#city_id').val(),
//              load_type:load_type,
//              lang:lang,
//              user_id:user_id
//          },
//          success: function (result) {
//              $('#favoritesContent').html(result);
//          },
//          error:function (error) {
//              console.log(error);
//          }
//      });
//      open_page('favPage');
//  }
//
//  function changePassContent() {
//      $.ajax({
//          url: config_url + "changePassContent.php",
//          type: "POST",
//          data: {
//              city_id:$('#city_id').val(),
//              lang:lang,
//              user_id:user_id
//          },
//          success: function (result) {
//              $('#changePassContent').html(result);
//          },
//          error:function (error) {
//              console.log(error);
//          }
//      });
//      open_page('changePass');
//  }
//
//
//  function changeEmailContent() {
//      $.ajax({
//          url: config_url + "changeEmailContent.php",
//          type: "POST",
//          data: {
//              city_id:$('#city_id').val(),
//              lang:lang,
//              user_id:user_id
//          },
//          success: function (result) {
//              $('#changeEmailContent').html(result);
//          },
//          error:function (error) {
//              console.log(error);
//          }
//      });
//      open_page('changeEmail');
//  }
//  function changeProfileContent() {
//      $.ajax({
//          url: config_url + "changeProfileContent.php",
//          type: "POST",
//          data: {
//              city_id:$('#city_id').val(),
//              lang:lang,
//              user_id:user_id
//          },
//          success: function (result) {
//              $('#changeProfileContent').html(result);
//          },
//          error:function (error) {
//              console.log(error);
//          }
//      });
//      open_page('changeProfile');
//  }
//
//  function get_places(city_id,div_id) {
//     //
//      $.ajax({
//          url: config_url + "get_places.php",
//          type: "POST",
//          data: {
//              city_id:city_id,
//              lang:lang,
//              user_id:user_id
//          },
//          success: function (result) {
//              $('#'+div_id).html(result);
//          },
//          error:function (error) {
//              console.log(error);
//          }
//      });
//
//  }
//
//
// $(document).on("mobileinit", function(){
//     $.mobile.ajaxEnabled=false;
//     $.mobile.loadingMessage = false;
// });
//
// load_main_cats();
// load_cities_name();
// footer();
// count_cart();
//
// $('.back_icon').click(function () {
//     back_btn();
// });
//
//
//
// //page
//
// function login_true_check() {
//     if(user_id=='' || user_id==null || user_id==undefined){
//         open_page('login');
//     }else{
//         console.log(user_id);
//         open_page('catPage');
//
//     }
// }
//
//
// setTimeout(function () {
//     login_true_check();
// },2000);
//
//

//<div class='text ' data-mt="5" data-text="hi_maher">hi_maher</div>
//  <span class='text' ></span>'
//input <input class="place_holder" data-text="name"  >

//select <option class='text' data-text="xzy"></option>

$(".place_holder").each(function (index, value) {
    $(value).addClass('place_holder_'+$(value).attr("data-text"));
    $(value).addClass($(value).attr("data-text"));
    var class_name=$(value).attr("data-text");
    $('.place_holder_'+class_name).attr("placeholder",class_name);
//style='color: transparent !important;'
});

$(".text").each(function (index, value) {
    $(value).addClass('text_show_'+$(value).attr("data-text"));
    $(value).addClass($(value).attr("data-text"));
    var class_name=$(value).attr("data-text");
    $('.text_show_'+class_name).html("<span >"+class_name+"</span>");
//style='color: transparent !important;'
});


function load_text_lang() {
    $.ajax({
        url:config_url+"app_words.php",
        type:"POST",
        data:{
            lang:lang,
        },success:function (result) {
            var obj =  JSON.parse(result);
            for(var i=0; i<obj.length; i++){

                view_lang(obj[i].word_key,obj[i].text);
            }
        },error:function (error) {
            console.log(error);
        }
    });

}

function view_lang(class_name,text){
    $('.text_show_'+class_name).html(text);
    $('.place_holder_'+class_name).attr('placeholder',text);
}


function load_style() {
    $("[data-mt]").each(function (index, value) {
        $(value).css('margin-top', $(value).attr("data-mt") + ".px");
    });

    $("[data-mb]").each(function (index, value) {
        $(value).css('margin-bottom', $(value).attr("data-mb") + ".px");
    });

    $("[data-ml]").each(function (index, value) {
        $(value).css('margin-left', $(value).attr("data-ml") + ".px");
    });
    $("[data-mr]").each(function (index, value) {
        $(value).css('margin-right', $(value).attr("data-mr") + ".px");
    });

    $("[data-m]").each(function (index, value) {
        $(value).css('margin', $(value).attr("data-m") + ".px");
    });
    $("[data-pt]").each(function (index, value) {
        $(value).css('padding-top', $(value).attr("data-pt") + ".px");
    });
    $("[data-pb]").each(function (index, value) {
        $(value).css('padding-bottom', $(value).attr("data-pb") + ".px");
    });
    $("[data-pl]").each(function (index, value) {
        $(value).css('padding-left', $(value).attr("data-pl") + ".px");
    });
    $("[data-pr]").each(function (index, value) {
        $(value).css('padding-right', $(value).attr("data-pr") + ".px");
    });
    $("[data-p]").each(function (index, value) {
        $(value).css('padding', $(value).attr("data-p") + ".px");
    });
    $("[data-h]").each(function (index, value) {
        $(value).css('height', $(value).attr("data-h") + ".px");
    });
    $("[data-w]").each(function (index, value) {
        $(value).css('width', $(value).attr("data-w") + ".px");
    });
    $("[data-h2]").each(function (index, value) {
        $(value).css('height', $(value).attr("data-h2") + ".%");
    });
    $("[data-w2]").each(function (index, value) {
        $(value).css('width', $(value).attr("data-w2") + ".%");
    });
    $("[data-wh]").each(function (index, value) {
        $(value).css('width', $(value).attr("data-wh") + ".px");
        $(value).css('height', $(value).attr("data-wh") + ".px");
    });
    $("[data-wh2]").each(function (index, value) {
        $(value).css('width', $(value).attr("data-wh2") + ".%");
        $(value).css('height', $(value).attr("data-wh2") + ".%");
    });
    $("[data-t]").each(function (index, value) {
        $(value).css('top', $(value).attr("data-t") + ".px");
    });
    $("[data-b]").each(function (index, value) {
        $(value).css('bottom', $(value).attr("data-b") + ".px");
    });
    $("[data-l]").each(function (index, value) {
        $(value).css('left', $(value).attr("data-l") + ".px");
    });
    $("[data-r]").each(function (index, value) {
        $(value).css('right', $(value).attr("data-r") + ".px");
    });
    $("[data-font-s]").each(function (index, value) {
        $(value).css('font-size', $(value).attr("data-font-s") + ".px");
    });


}
load_style();



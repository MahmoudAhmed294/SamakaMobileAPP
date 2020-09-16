//var site_url="https://jaleesah.housab.info/";
var site_url="http://192.168.1.102/estoaa/";
var config_url=site_url+"api/";

var lang="AR";

var user_id,user_type;

 user_id=localStorage.getItem('user_id');
 user_type=localStorage.getItem('user_type');

function makeid() {
    var text = "";
    var possible = "0123456789";
    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

var order_id=localStorage.getItem('order_id');
var skip_tips_status=localStorage.getItem('skip_tips');

if (order_id==null){
    localStorage.setItem('order_id',makeid());
}

function back_btn() {
    window.history.back();
}


function  log_out() {
    localStorage.clear();
    window.location="account.html";
}

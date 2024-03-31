document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});

const Buttonlogout = document.getElementById('logout_btn')

Buttonlogout.addEventListener('click',function(){
    google.accounts.id.cancel();
})

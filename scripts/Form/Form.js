function myMenuFunction() {
    var i = document.getElementById("navMenu");
    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
   }

    var a = document.getElementById("loginBtn");
    var b = document.getElementById("registerBtn");
    var x = document.getElementById("login");
    var y = document.getElementById("register");
    function login() {
        x.style.left = "4px";
        y.style.right = "-520px";
        a.className += " white-btn";
        b.className = "btn";
        x.style.opacity = 1;
        y.style.opacity = 0;
    }
    function register() {
        x.style.left = "-510px";
        y.style.right = "5px";
        a.className = "btn";
        b.className += " white-btn";
        x.style.opacity = 0;
        y.style.opacity = 1;
    }

    document.addEventListener('DOMContentLoaded', () => {
        const mode = document.getElementById('mode_icon');
        const form = document.querySelector('.darkmode');
        const form2 = document.querySelector('.mode');
    
        function setTheme(theme) {
            if (theme === 'dark') {
                mode.classList.remove('fa-moon');
                mode.classList.add('fa-sun');
                form.classList.add('dark');
                form2.classList.add('select');
            } else {
                mode.classList.remove('fa-sun');
                mode.classList.add('fa-moon');
                form.classList.remove('dark');
                form2.classList.remove('select');
            }
        }
    });
    
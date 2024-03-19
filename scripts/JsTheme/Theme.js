const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const form = document.querySelector('.darkmode');
    const form2 = document.querySelector('.mode');

    if(mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark');
        form2.classList.add('select');
        return ;
    }
    
    mode.classList.remove('fa-sun');
    mode.classList.add('fa-moon');

    form.classList.remove('dark');
    form2.classList.remove('select');
});
const modeIcon = document.getElementById('mode_icon');
let isDarkMode = true; // Inicialmente, assume que está no modo escuro

modeIcon.addEventListener('click', () => {
    isDarkMode = !isDarkMode; // Alterna entre modo escuro e claro
    updateIcon(); // Atualiza o ícone
});

function updateIcon() {
    modeIcon.className = isDarkMode ? 'fa-solid fa-moon' : 'fa-solid fa-sun'; // Lua ou sol
}
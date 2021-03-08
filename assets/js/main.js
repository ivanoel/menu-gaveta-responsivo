const navegar = document.querySelector('.navegar');
document.querySelector('.toggle').onclick = function() {
    this.classList.toggle('ativo');
    navegar.classList.toggle('ativo');
}
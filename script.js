document.querySelector('.second-button').addEventListener('click', function () {
    var menuContent = document.querySelector('#navbarToggleExternalContent10');
    menuContent.classList.toggle('show');
document.querySelector('.animated-icon2').classList.toggle('open');
});

document.querySelector('#dropdownMenuButton').addEventListener('click', function (event) {
    event.preventDefault();
});
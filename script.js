// Функция для открытия навигационного меню
function hamburg() {
    // Находим элемент с классом "dropdown"
    const navbar = document.querySelector(".dropdown");
    // Устанавливаем стиль для отображения меню (перемещаем вниз)
    navbar.style.transform = "translateY(0px)";
}

// Функция для закрытия навигационного меню
function cancel() {
    // Находим элемент с классом "dropdown"
    const navbar = document.querySelector(".dropdown");
    // Устанавливаем стиль для скрытия меню (перемещаем вверх)
    navbar.style.transform = "translateY(-500px)";
}

// Загружаем навигацию
fetch('header.html')
  .then((response) => response.text())
  .then((data) => {
    document.getElementById('navbar-placeholder').innerHTML = data;
  })
  .catch((error) => console.error('Error loading navbar:', error));

// Загружаем футер
fetch('footer.html')
  .then((response) => response.text())
  .then((data) => {
    document.getElementById('footer-placeholder').innerHTML = data;
  })
  .catch((error) => console.error('Error loading footer:', error));


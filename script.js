let daysInput = document.getElementById('days');
let setDaysBtn = document.getElementById('set-days-btn');
let progressBar = document.getElementById('progress-bar');
let progressText = document.getElementById('progress-text');
let progress = 0; // Начальный прогресс
let totalDays = 30; // Значение по умолчанию

// Обработчик для кнопки "Установить"
setDaysBtn.addEventListener('click', function() {
    totalDays = parseInt(daysInput.value); // Устанавливаем общее количество дней
    progress = 0; // Сброс прогресса
    progressBar.value = progress; // Обновляем прогресс-бар
    progressText.textContent = 0% ("Цель:" ${totalDays} "дней"); // Обновляем текст прогресса
    updateTreeSize(progress); // Обновляем дерево
});

// Функция для обновления размера дерева
function updateTreeSize(progress) {
    let tree = document.getElementById('tree');
    let size = 50 + (progress / totalDays) * 50; // Увеличиваем размер дерева пропорционально прогрессу
    tree.style.width = size + 'px';
    tree.style.height = size + 'px';
}

// Функция для увеличения прогресса каждый день (в данном случае каждую секунду)
setInterval(function() {
    if (progress < totalDays) {
        progress++; // Увеличиваем прогресс на 1 каждый тик
        progressBar.value = (progress / totalDays) * 100; // Обновляем прогресс-бар (от 0 до 100)
        progressText.textContent = ${Math.round((progress / totalDays) * 100)}% (Цель: ${totalDays} дней); // Обновляем текст прогресса
        updateTreeSize(progress); // Обновляем размер дерева в зависимости от прогресса
    }
}, 1000); // Прогресс увеличивается каждую секунду
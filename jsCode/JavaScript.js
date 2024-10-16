function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString(); // Получаем текущую дату и время в строковом формате
    document.getElementById('date-time').textContent = dateTimeString; // Обновляем содержимое элемента
    }

    updateDateTime(); // Вызываем функцию для обновления даты и времени
    setInterval(updateDateTime, 1000); // Обновляем дату и время каждую секунду
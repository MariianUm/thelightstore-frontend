// Базовые функции для работы с корзиной
document.addEventListener('DOMContentLoaded', function() {
    // Обработчик для кнопок "В корзину"
    const addButtons = document.querySelectorAll('.add-to-cart');
    addButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Товар добавлен в корзину');
        });
    });

    // Обработчик для кнопок "Удалить" в корзине
    const removeButtons = document.querySelectorAll('.remove-item');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('tr').remove();
        });
    });
});
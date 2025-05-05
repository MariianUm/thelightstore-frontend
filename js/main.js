document.addEventListener('DOMContentLoaded', function() {
    // Обработчики для кнопок "В корзину"
    const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            alert(`Товар "${productName}" добавлен в корзину`);
            updateCartCount(1);
        });
    });

    // Обновление счетчика корзины
    function updateCartCount(change) {
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            let currentCount = parseInt(cartCount.textContent) || 0;
            cartCount.textContent = currentCount + change;
        }
    }

    // Удаление товаров из корзины
    const removeButtons = document.querySelectorAll('.btn-remove');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('tr').remove();
            updateCartTotal();
        });
    });

    // Пересчет общей суммы
    function updateCartTotal() {
        let total = 0;
        document.querySelectorAll('.cart-table tbody tr').forEach(row => {
            const price = parseFloat(row.querySelector('.product-price').textContent);
            const quantity = parseInt(row.querySelector('.quantity-input').value);
            const rowTotal = price * quantity;
            row.querySelector('.product-total').textContent = `${rowTotal} руб.`;
            total += rowTotal;
        });
        document.querySelector('.total-price').textContent = `${total} руб.`;
    }

    // Изменение количества
    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', updateCartTotal);
    });
});
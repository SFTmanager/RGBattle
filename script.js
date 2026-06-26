// Ждем, пока весь HTML загрузится
document.addEventListener('DOMContentLoaded', () => {
    const tg = window.Telegram.WebApp;
    tg.ready();

    const user = tg.initDataUnsafe.user;
    
    if (user) {
        // Используем ` (обратные кавычки) вместо ' (одинарных)
        document.getElementById('user-name').textContent = `${user.first_name}`;
        document.getElementById('user-tg-id').textContent = `${user.id}`;
    } else {
        document.getElementById('user-name').textContent = "Гость";
    }
});

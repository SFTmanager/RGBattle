// Инициализация Web App
const tg = window.Telegram.WebApp;
tg.ready();
// Пример получения данных пользователя
const user = tg.initDataUnsafe.user;
if (user) {
  document.getElementById('user-name').textContent = '${user.first_name}';
  document.getElementById('user-tg-id').textContent = '${user.id}';
}

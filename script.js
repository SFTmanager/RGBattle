// Инициализация Web App
const tg = window.Telegram.WebApp;
tg.ready();
// Пример получения данных пользователя
const user = tg.initDataUnsafe.user;
if (user) {
  document.getElementById('user-info').innerHTML = `
  <p>Привет, ${user.first_name}!</p>
  <p>ID: ${user.id}</p>
`;
}

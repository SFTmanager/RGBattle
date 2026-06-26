const tg = window.Telegram.WebApp;
    tg.ready();

    // 1. Попробуем взять данные из initDataUnsafe
    let user = tg.initDataUnsafe.user;

    // 2. Если пусто, попробуем разобрать initData вручную (иногда данные там в строке)
    if (!user && tg.initData) {
        const urlParams = new URLSearchParams(tg.initData);
        const userString = urlParams.get('user');
        if (userString) {
            user = JSON.parse(userString);
        }
    }

    // 3. Вывод данных
    const nameEl = document.getElementById('user-name');
    const idEl = document.getElementById('user-tg-id');

    if (user) {
        nameEl.textContent = user.first_name || "Без имени";
        idEl.textContent = user.id || "Нет ID";
    } else {
        nameEl.textContent = "Данные не получены";
        idEl.textContent = "Попробуйте перезагрузить";
        console.log("Полный объект tg:", tg);
    }

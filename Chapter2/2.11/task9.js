let login = prompt("Введите логин", "");

if (userName === "Админ") {

    let password = prompt("Введите пароль", "");

    if (password === "Я главный") {
        alert("Здравствуйте!");
    } else if (password === "" || password === null) {
        alert("Отменено");
    } else {
        alert("Неверный пароль");
    }

} else if (login === "" || login === null) {
    alert("Отменено");
} else {
    alert("Я вас не знаю");
}
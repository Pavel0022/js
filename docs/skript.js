

    function login() {

        elem = document.getElementById('admin');

        username = elem.value;

        elem = document.getElementById('password');

        password = elem.value;


        if (username == "admin" && password == "12345") {

            alert("Нажмите ОК, чтобы перейти на другую страницу");
            window.open("ADMIN.html", "_self");
        }
        else {
            alert("Вы Дмитрий Ильич")
        }
    }
    if (username == "user" && password == "00000") {

        alert("Нажмите ОК, чтобы перейти на другую страницу");
        window.open("user.html", "_self");
    }
    else
        alert("Вы Дмитрий Ильич")




    function changeTheme(themeName) {

        // Обьявление переменных, которые будут хранить значение цвета var primaryColor;

        var primarycolor;
        var secondaryColor;
        var fontcolor;

        if (themeName == 'light') {
            primarycolor = "white";
            secondaryColor = "gray";
        }

        if (themeName == 'dark') {
            primarycolor = "#303030";
            secondaryColor = "#eee";           
            fontcolor = "white"
        }

        if (themeName == 'blue') {
            primarycolor = "#00008B";
            secondaryColor = "#eee";
            fontcolor = "white"
        }

        if (themeName == 'red') {
            primarycolor = "#FFA500";
            secondaryColor = "#eee";        
            fontcolor = "white"   
        }

        document.documentElement.style.setProperty("--primary-color", primarycolor);
        document.documentElement.style.setProperty("--secondary-color", secondarycolor);
    };


function exitHi() {

    $('.intro').fadeOut(1300);
    $('.wrapper').fadeIn(1300);
}
var name;

function getName() {
    name = document.getElementById("input_form").value;
    if (name == "") {
        alert('Поле с именем должно быть заполнено!')
    } else {

        document.getElementById('sayHi').innerHTML = "Привет " + name + "!";
        $('#hello').fadeIn(1300);
        $('.hi_input').fadeOut(1300);
    }
}

function z1() {
    $('.tem-1').fadeOut(1300);
    $('.tem-2').fadeIn(1300);
    $('body,html').animate({ scrollTop: 0 }, 400);
}

function z2() {
    $('.tem-2').fadeOut(1300);
    $('.tem-3').fadeIn(1300);
    $('body,html').animate({ scrollTop: 0 }, 400);
}

function z3() {
    $('.tem-3').fadeOut(1300);
    $('.tem-4').fadeIn(1300);
    $('body,html').animate({ scrollTop: 0 }, 400);
}

function z4() {
    $('.tem-4').fadeOut(1300);
    $('.tem-5').fadeIn(1300);
    $('body,html').animate({ scrollTop: 0 }, 400);
}

function z5() {
    $('.tem-5').fadeOut(1300);
    $('.test').fadeIn(1300);
    $('body,html').animate({ scrollTop: 0 }, 400);
}

// 1 задание 
document.getElementById('dz1').innerHTML = '1.';
document.getElementById('dz2').innerHTML = '2.';
document.getElementById('dz3').innerHTML = '3.';
document.getElementById('dz4').innerHTML = '4.';
document.getElementById('dz5').innerHTML = '5.';
document.getElementById('dz6').innerHTML = '6.';
document.getElementById('dz7').innerHTML = '7.';
var n = 0;

function zadanie1() {

    if (document.getElementById('dz1').textContent == '1.Физический') {
        document.getElementById('dz1').style.borderColor = "rgba(75,75,75,0.5)";
    } else {
        document.getElementById('dz1').style.borderColor = "red";
    }

    if (document.getElementById('dz2').textContent == '2.Канальный') {
        document.getElementById('dz2').style.borderColor = "rgba(75,75,75,0.5)";
    } else {
        document.getElementById('dz2').style.borderColor = "red";
    }

    if (document.getElementById('dz3').textContent == '3.Сетевой') {
        document.getElementById('dz3').style.borderColor = "rgba(75,75,75,0.5)";
    } else {
        document.getElementById('dz3').style.borderColor = "red";
    }
    if (document.getElementById('dz4').textContent == '4.Транспортный') {
        document.getElementById('dz4').style.borderColor = "rgba(75,75,75,0.5)";
    } else {
        document.getElementById('dz4').style.borderColor = "red";
    }
    if (document.getElementById('dz5').textContent == '5.Сеансовый') {
        document.getElementById('dz5').style.borderColor = "rgba(75,75,75,0.5)";
    } else {
        document.getElementById('dz5').style.borderColor = "red";
    }
    if (document.getElementById('dz6').textContent == '6.Уровень представления') {
        document.getElementById('dz6').style.borderColor = "rgba(75,75,75,0.5)";
    } else {
        document.getElementById('dz6').style.borderColor = "red";
    }
    if (document.getElementById('dz7').textContent == '7.Прикладной') {
        document.getElementById('dz7').style.borderColor = "rgba(75,75,75,0.5)";
    } else {
        document.getElementById('dz7').style.borderColor = "red";
    }
    if (document.getElementById('dz1').textContent == '1.Физический' && document.getElementById('dz2').textContent == '2.Канальный' && document.getElementById('dz3').textContent == '3.Сетевой' && document.getElementById('dz4').textContent == '4.Транспортный' && document.getElementById('dz5').textContent == '5.Сеансовый' && document.getElementById('dz6').textContent == '6.Уровень представления' && document.getElementById('dz7').textContent == '7.Прикладной') {
        $('.zd-good-1').fadeIn(300);
        $('#zd-bt-1-n').fadeIn(1300);
    } else {
        alert();
    }
}

function zadanie2() {
    var t = 0;
    if (document.getElementById('zd2-1').value.trim().toLowerCase() == 'представительский') {
        t = t + 1;
        document.getElementById('zd2-1').style.borderColor = "green";

    } else {
        document.getElementById('zd2-1').style.borderColor = "red";
    }
    if (document.getElementById('zd2-2').value.trim().toLowerCase() == 'канальный') {
        t = t + 1;
        document.getElementById('zd2-2').style.borderColor = "green";

    } else {
        document.getElementById('zd2-2').style.borderColor = "red";
    }
    if (document.getElementById('zd2-3').value.trim().toLowerCase() == 'сетевой') {
        t = t + 1;
        document.getElementById('zd2-3').style.borderColor = "green";

    } else {
        document.getElementById('zd2-3').style.borderColor = "red";
    }
    if (t == 3) {
        $('.zd-good-2').fadeIn(300);
        $('#zd-bt-2-n').fadeIn(1300);
    }

}

function zadanie3() {
    var r = 0;
    if (document.getElementById('zd3-1').value.trim().toLowerCase() == '4') {
        r = r + 1;
        document.getElementById('zd3-1').style.borderColor = "green";

    } else {
        document.getElementById('zd3-1').style.borderColor = "red";
    }
    if (document.getElementById('zd3-2').value.trim().toLowerCase() == '3') {
        r = r + 1;
        document.getElementById('zd3-2').style.borderColor = "green";

    } else {
        document.getElementById('zd3-2').style.borderColor = "red";
    }
    if (document.getElementById('zd3-3').value.trim().toLowerCase() == '2') {
        r = r + 1;
        document.getElementById('zd3-3').style.borderColor = "green";

    } else {
        document.getElementById('zd3-3').style.borderColor = "red";
    }
    if (document.getElementById('zd3-4').value.trim().toLowerCase() == '5') {
        r = r + 1;
        document.getElementById('zd3-4').style.borderColor = "green";

    } else {
        document.getElementById('zd3-4').style.borderColor = "red";
    }
    if (document.getElementById('zd3-5').value.trim().toLowerCase() == '1') {
        r = r + 1;
        document.getElementById('zd3-5').style.borderColor = "green";

    } else {
        document.getElementById('zd3-5').style.borderColor = "red";
    }
    if (r == 5) {
        $('.zd-good-3').fadeIn(300);
        $('#zd-bt-3-n').fadeIn(1300);
    }
}

function zadanie4() {
    var a = 0;
    if (document.getElementById('zd4-1').value.trim().toLowerCase() == 'физический') {
        a = a + 1;
        document.getElementById('zd4-1').style.borderColor = "green";

    } else {
        document.getElementById('zd4-1').style.borderColor = "red";
    }
    if (document.getElementById('zd4-2').value.trim().toLowerCase() == 'сетевой') {
        a = a + 1;
        document.getElementById('zd4-2').style.borderColor = "green";

    } else {
        document.getElementById('zd4-2').style.borderColor = "red";
    }
    if (document.getElementById('zd4-3').value.trim().toLowerCase() == 'канальный') {
        a = a + 1;
        document.getElementById('zd4-3').style.borderColor = "green";

    } else {
        document.getElementById('zd4-3').style.borderColor = "red";
    }
    if (a == 3) {
        $('.zd-good-4').fadeIn(300);
        $('#zd-bt-4-n').fadeIn(1300);
    }
}

function zadanie5() {
    var q = 0;
    if (document.getElementById('zd5-1').value.trim().toLowerCase() == 'сетевой доступ') {
        q = q + 1;
        document.getElementById('zd5-1').style.borderColor = "green";

    } else {
        document.getElementById('zd5-1').style.borderColor = "red";
    }
    if (document.getElementById('zd5-2').value.trim().toLowerCase() == 'интернет') {
        q = q + 1;
        document.getElementById('zd5-2').style.borderColor = "green";

    } else {
        document.getElementById('zd5-2').style.borderColor = "red";
    }
    if (document.getElementById('zd5-3').value.trim().toLowerCase() == 'транспортный') {
        q = q + 1;
        document.getElementById('zd5-3').style.borderColor = "green";

    } else {
        document.getElementById('zd5-3').style.borderColor = "red";
    }
    if (document.getElementById('zd5-4').value.trim().toLowerCase() == 'уровень приложений') {
        q = q + 1;
        document.getElementById('zd5-4').style.borderColor = "green";

    } else {
        document.getElementById('zd5-4').style.borderColor = "red";
    }
    if (q == 4) {
        $('.zd-good-5').fadeIn(300);
        $('#zd-bt-5-n').fadeIn(1300);
    }
}

function test() {
    var b = 0;
    var v1 = document.getElementsByName("vop1");
    var v2 = document.getElementsByName("vop2");
    var v3 = document.getElementsByName("vop3");
    var v4 = document.getElementsByName("vop4");
    var v5 = document.getElementsByName("vop5");
    var v6 = document.getElementsByName("vop6");
    var v7 = document.getElementsByName("vop7");
    var v8 = document.getElementsByName("vop8");
    var v9 = document.getElementsByName("vop9");
    var v10 = document.getElementsByName("vop10");
    if (v1[0].checked == true) {
        b = b + 1;
        document.getElementById("vop1").style.background = 'rgba(124, 255, 119,0.5)';
    }
    if (v2[2].checked == true) {
        b = b + 1;
        document.getElementById("vop2").style.background = 'rgba(124, 255, 119,0.5)';
    }
    if (v3[1].checked == true) {
        b = b + 1;
        document.getElementById("vop3").style.background = 'rgba(124, 255, 119,0.5)';
    }
    if (v4[2].checked == true) {
        b = b + 1;
        document.getElementById("vop4").style.background = 'rgba(124, 255, 119,0.5)';
    }
    if (v5[0].checked == true) {
        b = b + 1;
        document.getElementById("vop5").style.background = 'rgba(124, 255, 119,0.5)';
    }
    if (v6[0].checked == true) {
        b = b + 1;
        document.getElementById("vop6").style.background = 'rgba(124, 255, 119,0.5)';
    }
    if (v7[1].checked == true) {
        b = b + 1;
        document.getElementById("vop7").style.background = 'rgba(124, 255, 119,0.5)';
    }
    if (v8[1].checked == true) {
        b = b + 1;
        document.getElementById("vop8").style.background = 'rgba(124, 255, 119,0.5)';
    }
    if (v9[2].checked == true) {
        b = b + 1;
        document.getElementById("vop9").style.background = 'rgba(124, 255, 119,0.5)';
    }
    if (v10[2].checked == true) {
        b = b + 1;
        document.getElementById("vop10").style.background = 'rgba(124, 255, 119,0.5)';
    }

    var ozenka
    if (b >= 8) {
        ozenka = 5;
    } else {
        if (b >= 7) {
            ozenka = 4;
        } else {
            if (b >= 6) {
                ozenka = 3;
            } else {
                ozenka = 2;
            }
            1
        }
    }
    document.getElementById("itog-test").innerHTML = '<div class="itog-txt">' + name + ' , вы завершили изучение темы "Модель OSI"</div> <p>Колличество правильных ответов:' + b + ' </p> <p>Оценка:' + ozenka + '</p>';
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#itog-test").offset().top
    }, 400);
}
function saatGoster() {
    var suankiZaman = new Date(); 
    var saat = suankiZaman.getHours(); 
    var dakika = suankiZaman.getMinutes(); 
    var saniye = suankiZaman.getSeconds();
   
    var gun = suankiZaman.getDate(); // Gün bilgisini alır
    var ay = suankiZaman.getMonth() + 1; // Ay bilgisini alır (Ocak = 0, Aralık = 11)
    var yil = suankiZaman.getFullYear(); // Yıl bilgisini alır

    saat = saat < 10 ? '0' + saat : saat; 
    dakika = dakika < 10 ? '0' + dakika : dakika; 
    saniye = saniye < 10 ? '0' + saniye : saniye;

    ay = ay < 10 ? '0' + ay : ay;

    var zaman =  saat + ":" + dakika +":" + saniye +" <br/> " +gun + "." + ay + "." + yil 
    document.getElementById("saat").innerHTML = zaman; 
}

window.onload = function() {
    saatGoster();
    setInterval(saatGoster, 1000);
};



document.getElementById('girisFormu').addEventListener('submit', function (event) {
    event.preventDefault(); 
    var girilenSifre = document.getElementById('sifreAlani').value;
    var uyari = document.getElementById('uyari');
    if (girilenSifre === '1234') {
        window.location.href = 'index.html'; 
    } else {

        uyari.classList.remove('text-white');
        uyari.classList.add('bg-danger', 'text-white', 'p-2', 'rounded-3', 'text-center', 'm-3');
        uyari.textContent = 'Şifre Yanlış';

    
    }
});


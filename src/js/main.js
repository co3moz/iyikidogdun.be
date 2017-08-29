var hostname = location.hostname.split(".");
var last = hostname.pop();
if (last == "be") {
  hostname.pop();
}

var person = hostname.join(".").trim();
if (person == "") {
  person = decodeURI(location.pathname.substring(1));
} else {
  person = person.split(".").map(function (e) {
    var nick = e.substring(0, 1).toUpperCase() + e.substring(1);
    return isimler[nick] ? isimler[nick] : nick;
  }).join(" ");
}

var nameSection = document.getElementById("nameSection");

if (person.trim() != "") {
  nameSection.innerHTML = person;
}

var messages = [
  "Yeni yaşın önce sağlık ve huzur sonra dilediğin tüm mutlulukları getirsin sana nice yıllara…",
  "Hayatının her döneminde mutlu ve sağlıklı olmanı diliyorum. Tüm hayallerin gerçekleşsin, hayat güneşin her daim seni aydınlatsın. Doğum günün kutlu olsun..",
  "Kalbin hangi güzel şey için çarpıyorsa, her doğan güneş sana onu getirsin.. Doğum Günün Kutlu Olsun..",
  "Yılların sormadığı, yolların yormadığı, dostların unutmadığı bir ömür için, bu doğum günün bir başlangıç olsun, yeni yaşın Kutlu olsun.. İyi ki doğdun",
  "Bugün geride kalan bir yaşını daha doldurmanın mutluluğunu yaşarken geleceğin sana kalbindeki tüm dilekleri vermesini diliyorum. Doğum günün kutlu olsun.",
  "Güzel bir yaş diliyorum sana. Mutlu bir gelecek. Gülümseyen gözlerinle… İyi ki doğdun. Doğum günün kutlu olsun."
];

document.getElementById("randomSection").innerHTML = messages[Math.random() * messages.length >> 0];
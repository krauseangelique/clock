// time first second from today
let today            = new Date();
let timeForOneSecond = d.getSecond() + 60*d.getMinutes() + 3600*d.getHours();

// the needles hour minutes seconds
let needSecond      = document.getElementsByClassName('second-hand');
let needMinute       = document.getElementsByClassName('min-hand');
let needHour        = document.getElementsByClassName('hour-hand');

// Code
needSecond.style.transform = 'rotate(' + (time * 6) + 'deg)'; // 60 sec => 1 min

needMinute.style.transform = 'rotate(' + Math.round(time / 10) + 'deg)'; 

needHour.style.transform = 'rotate(' + Math.round(time / 120) + 'deg)'; // 12 hours

/*
Comme vous le voyez, il n'y a qu'un nombre inconnu ( : x ), donc pour calculer l'angle de décalage de l'aiguille des secondes, on doit faire : x_s=\frac{360s}{60}
Pour celle des minutes, on doit faire : x_m=\frac{360m}{60}
Et pour celle des heures, on fait : x_h=\frac{360h}{12}
Et donc en simplifiant, on obtient respectivement : x_s=6s\qquad ;\qquad x_m=6m\qquad;\qquad x_h=30h

Je devine que tout le monde sait qu'il y a 3600 secondes dans une heure et 60 secondes dans une minute.
Donc on a : m=\frac{s}{60}\qquad;\qquad h=\frac{s}{3600}
Les calculs de tout à l'heure deviennent donc, en simplifiant : x_s=6s\qquad ;\qquad x_m=\frac{s}{10}\qquad;\qquad x_h=\frac{s}{120}
*/
// to change every second

setInterval(function() {

    time++;
    needSecond.style.transform = 'rotate(' + (time * 6) + 'deg)' ;
    needMinute.style.transform = 'rotate(' + Math.round(time / 10) + 'deg)' ;
    needHour.style.transform = 'rotate(' + Math.round(time / 120) + 'deg)' ;


}, 1000);
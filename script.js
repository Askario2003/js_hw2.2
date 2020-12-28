var time = +prompt('введите время')
var night = 'часов ночи'
var utro = 'часов утра'
var dna = 'часa дня'
var vech = 'часов вечера'
var o = 'час '
var t = 'два '
var th = 'три '
var f = 'четыре '
var fi = 'пять '
var s = 'шесть '
var se = 'семь '
var e ='восемь '
var n = 'девять '
var te = 'десять '
var el = 'одиннадцать '
var tw = 'двеннадцать '
if (time === 0 || time === 24) {
    alert(' 0 ' + night)
}
else if (time === 1){
    alert (o + night)
}
else if (time === 2){ 
    alert(t + night)
}
else if (time === 3){ 
    alert(th + night)
}
else if (time === 4){ 
    alert(f + night)
}
else if (time === 5){ 
    alert(fi + night)
}
else if (time === 6){ 
    alert(s + utro)
}
else if (time === 7){ 
    alert(se + utro)
}
else if (time === 8){ 
    alert(e + utro)
}
else if (time === 9){ 
    alert(n + utro)
}
else if (time === 10){ 
    alert(te + utro)
}
else if (time === 11){ 
    alert(el + utro)
}
else if (time === 12){ 
    alert(tw + dna)
}
else if (time === 13){ 
    alert(o + dna)
}
else if (time === 14){ 
    alert(t + dna)
}
else if (time === 15){ 
    alert(th + dna)
}
else if (time === 16){ 
    alert(f + dna)
}
else if (time === 17){ 
    alert(fi + dna)
}
else if (time === 18){ 
    alert(s + vech)
}
else if (time === 19){ 
    alert(se + vech)
}
else if (time === 20){ 
    alert(e + vech)
}
else if (time === 21){ 
    alert(n + night)
}
else if (time === 22){ 
    alert(te + night)
}
else if (time === 23){ 
    alert(el + night)
}
else {
    alert( 'в сутках только 24 часа')
}


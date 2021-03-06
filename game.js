const characters = {
    'A': 'KeyA',
    'B': 'KeyB',
    'C': 'KeyC',
    'D': 'KeyD',
    'E': 'KeyE',
    'F': 'KeyF',
    'G': 'KeyG',
    'H': 'KeyH',
    'I': 'KeyI',
    'J': 'KeyJ',
    'K': 'KeyK',
    'L': 'KeyL',
    'M': 'KeyM',
    'N': 'KeyN',
    'O': 'KeyO',
    'P': 'KeyP',
    'R': 'KeyR',
    'S': 'KeyS',
    'T': 'KeyT',
    'U': 'KeyU',
    'W': 'KeyW',
    'Z': 'KeyZ',
};
const soundLibrary = [
    'sounds/A/snd_voices_item_Akrobata.mp3',
    'sounds/A/snd_voices_item_Akwarium.mp3',
    'sounds/A/snd_voices_item_Aligator.mp3',
    'sounds/A/snd_voices_item_Anakonda.mp3',
    'sounds/A/snd_voices_item_Ananas.mp3',
    'sounds/A/snd_voices_item_Ara.mp3',
    'sounds/A/snd_voices_item_Arbuz.mp3',
    'sounds/A/snd_voices_item_Atleta.mp3',
    'sounds/A/snd_voices_item_Autobus.mp3',
    'sounds/B/snd_voices_item_Bak.mp3',
    'sounds/B/snd_voices_item_Baletnica.mp3',
    'sounds/B/snd_voices_item_Balon.mp3',
    'sounds/B/snd_voices_item_Balwan.mp3',
    'sounds/B/snd_voices_item_Banka.mp3',
    'sounds/B/snd_voices_item_Bebenek.mp3',
    'sounds/B/snd_voices_item_Beczka.mp3',
    'sounds/B/snd_voices_item_Broda.mp3',
    'sounds/B/snd_voices_item_Byk.mp3',
    'sounds/C/snd_voices_item_Cebula.mp3',
    'sounds/C/snd_voices_item_Cegly.mp3',
    'sounds/C/snd_voices_item_Ciasteczka.mp3',
    'sounds/C/snd_voices_item_Ciasto.mp3',
    'sounds/C/snd_voices_item_Ciupaga.mp3',
    'sounds/C/snd_voices_item_Cukierki.mp3',
    'sounds/C/snd_voices_item_Cylinder.mp3',
    'sounds/C/snd_voices_item_Cymbalki.mp3',
    'sounds/C/snd_voices_item_Cyrk.mp3',
    'sounds/C/snd_voices_item_Cysterna.mp3',
    'sounds/C/snd_voices_item_Cytryna.mp3',
    'sounds/D/snd_voices_item_Dlon.mp3',
    'sounds/D/snd_voices_item_Dmuchawiec.mp3',
    'sounds/D/snd_voices_item_Dom.mp3',
    'sounds/D/snd_voices_item_Drzewo.mp3',
    'sounds/D/snd_voices_item_Dylizans.mp3',
    'sounds/D/snd_voices_item_Dynia.mp3',
    'sounds/D/snd_voices_item_Dzik.mp3',
    'sounds/D/snd_voices_item_Dzwon.mp3',
    'sounds/E/snd_voices_item_Ekierka.mp3',
    'sounds/E/snd_voices_item_Eklerka.mp3',
    'sounds/E/snd_voices_item_Ekran.mp3',
    'sounds/E/snd_voices_item_Elektrownia.mp3',
    'sounds/E/snd_voices_item_Elementarz.mp3',
    'sounds/E/snd_voices_item_Elf.mp3',
    'sounds/E/snd_voices_item_Emu.mp3',
    'sounds/E/snd_voices_item_Eskimos.mp3',
    'sounds/E/snd_voices_item_Eukaliptus.mp3',
    'sounds/F/snd_voices_item_Fajka.mp3',
    'sounds/F/snd_voices_item_Fasola.mp3',
    'sounds/F/snd_voices_item_Flaga.mp3',
    'sounds/F/snd_voices_item_Flet.mp3',
    'sounds/F/snd_voices_item_Foka.mp3',
    'sounds/F/snd_voices_item_Fontanna.mp3',
    'sounds/F/snd_voices_item_Fortepian.mp3',
    'sounds/F/snd_voices_item_Fotel.mp3',
    'sounds/F/snd_voices_item_Fryzjer.mp3',
    'sounds/G/snd_voices_item_Garnek.mp3',
    'sounds/G/snd_voices_item_Gasienica.mp3',
    'sounds/G/snd_voices_item_Gazeta.mp3',
    'sounds/G/snd_voices_item_Ges.mp3',
    'sounds/G/snd_voices_item_Glowa.mp3',
    'sounds/G/snd_voices_item_Goryl.mp3',
    'sounds/G/snd_voices_item_Grabie.mp3',
    'sounds/G/snd_voices_item_Grzebien.mp3',
    'sounds/G/snd_voices_item_Guzik.mp3',
    'sounds/H/snd_voices_item_Hak.mp3',
    'sounds/H/snd_voices_item_Hamak.mp3',
    'sounds/H/snd_voices_item_Harcerz.mp3',
    'sounds/H/snd_voices_item_Harmonijka.mp3',
    'sounds/H/snd_voices_item_Herb.mp3',
    'sounds/H/snd_voices_item_Hiena.mp3',
    'sounds/H/snd_voices_item_Hokej.mp3',
    'sounds/H/snd_voices_item_Hotel.mp3',
    'sounds/H/snd_voices_item_Hulajnoga.mp3',
    'sounds/I/snd_voices_item_Igla.mp3',
    'sounds/I/snd_voices_item_Iglo.mp3',
    'sounds/I/snd_voices_item_Ilustracja.mp3',
    'sounds/I/snd_voices_item_Iluzjonista.mp3',
    'sounds/I/snd_voices_item_Imbryk.mp3',
    'sounds/I/snd_voices_item_Indyk.mp3',
    'sounds/I/snd_voices_item_Irys.mp3',
    'sounds/I/snd_voices_item_Iskry.mp3',
    'sounds/J/snd_voices_item_Jablko.mp3',
    'sounds/J/snd_voices_item_Jacht.mp3',
    'sounds/J/snd_voices_item_Jajka.mp3',
    'sounds/J/snd_voices_item_Jamnik.mp3',
    'sounds/J/snd_voices_item_Jaskolka.mp3',
    'sounds/J/snd_voices_item_Jaszczurka.mp3',
    'sounds/J/snd_voices_item_Jelen.mp3',
    'sounds/J/snd_voices_item_Jez.mp3',
    'sounds/J/snd_voices_item_Jodla.mp3',
    'sounds/K/snd_voices_item_Kaczka.mp3',
    'sounds/K/snd_voices_item_Kajak.mp3',
    'sounds/K/snd_voices_item_Kogut.mp3',
    'sounds/K/snd_voices_item_Konewka.mp3',
    'sounds/K/snd_voices_item_Korale.mp3',
    'sounds/K/snd_voices_item_Kot.mp3',
    'sounds/K/snd_voices_item_Krowa.mp3',
    'sounds/K/snd_voices_item_Kucyk.mp3',
    'sounds/L/snd_voices_item_Lampa.mp3',
    'sounds/L/snd_voices_item_Lew.mp3',
    'sounds/L/snd_voices_item_Lina.mp3',
    'sounds/L/snd_voices_item_Lis.mp3',
    'sounds/L/snd_voices_item_Lizak.mp3',
    'sounds/L/snd_voices_item_Lodowka.mp3',
    'sounds/L/snd_voices_item_Lokomotywa.mp3',
    'sounds/L/snd_voices_item_Lornetka.mp3',
    'sounds/L/snd_voices_item_Lustro.mp3',
    'sounds/M/snd_voices_item_Malina.mp3',
    'sounds/M/snd_voices_item_Malpa.mp3',
    'sounds/M/snd_voices_item_Mapa.mp3',
    'sounds/M/snd_voices_item_Medal.mp3',
    'sounds/M/snd_voices_item_Mewa.mp3',
    'sounds/M/snd_voices_item_Miecz.mp3',
    'sounds/M/snd_voices_item_Mikrofon.mp3',
    'sounds/M/snd_voices_item_Motorowka.mp3',
    'sounds/N/snd_voices_item_Namiot.mp3',
    'sounds/N/snd_voices_item_Narty.mp3',
    'sounds/N/snd_voices_item_Nasionko.mp3',
    'sounds/N/snd_voices_item_Niedzwiedz.mp3',
    'sounds/N/snd_voices_item_Nitka.mp3',
    'sounds/N/snd_voices_item_Nos.mp3',
    'sounds/N/snd_voices_item_Nosorozec.mp3',
    'sounds/N/snd_voices_item_Notes.mp3',
    'sounds/N/snd_voices_item_Noz.mp3',
    'sounds/N/snd_voices_item_Nurek.mp3',
    'sounds/O/snd_voices_item_Obraz.mp3',
    'sounds/O/snd_voices_item_Ognisko.mp3',
    'sounds/O/snd_voices_item_Ogorek.mp3',
    'sounds/O/snd_voices_item_Okno.mp3',
    'sounds/O/snd_voices_item_Oko.mp3',
    'sounds/O/snd_voices_item_Olowek.mp3',
    'sounds/O/snd_voices_item_Orzel.mp3',
    'sounds/O/snd_voices_item_Osa.mp3',
    'sounds/O/snd_voices_item_Owca.mp3',
    'sounds/P/snd_voices_item_Papuga.mp3',
    'sounds/P/snd_voices_item_Patelnia.mp3',
    'sounds/P/snd_voices_item_Pelikan.mp3',
    'sounds/P/snd_voices_item_Pies.mp3',
    'sounds/P/snd_voices_item_Pilka.mp3',
    'sounds/P/snd_voices_item_Pingwiny.mp3',
    'sounds/P/snd_voices_item_Pisanka.mp3',
    'sounds/P/snd_voices_item_Pomidor.mp3',
    'sounds/R/snd_voices_item_Radio.mp3',
    'sounds/R/snd_voices_item_Rak.mp3',
    'sounds/R/snd_voices_item_Rakieta.mp3',
    'sounds/R/snd_voices_item_Rekawiczka.mp3',
    'sounds/R/snd_voices_item_Rekin.mp3',
    'sounds/R/snd_voices_item_Robot.mp3',
    'sounds/R/snd_voices_item_Ropucha.mp3',
    'sounds/R/snd_voices_item_Rower.mp3',
    'sounds/R/snd_voices_item_Roza.mp3',
    'sounds/S/snd_voices_item_Salata.mp3',
    'sounds/S/snd_voices_item_Samolot.mp3',
    'sounds/S/snd_voices_item_Serce.mp3',
    'sounds/S/snd_voices_item_Skakanka.mp3',
    'sounds/S/snd_voices_item_Skarpeta.mp3',
    'sounds/S/snd_voices_item_Slon.mp3',
    'sounds/S/snd_voices_item_Slonce.mp3',
    'sounds/S/snd_voices_item_Smok.mp3',
    'sounds/S/snd_voices_item_Stol.mp3',
    'sounds/T/snd_voices_item_Tecza.mp3',
    'sounds/T/snd_voices_item_Telefon.mp3',
    'sounds/T/snd_voices_item_Telewizor.mp3',
    'sounds/T/snd_voices_item_Tornister.mp3',
    'sounds/T/snd_voices_item_Tort.mp3',
    'sounds/T/snd_voices_item_Traktor.mp3',
    'sounds/T/snd_voices_item_Trampki.mp3',
    'sounds/T/snd_voices_item_Tramwaj.mp3',
    'sounds/T/snd_voices_item_Tygrys.mp3',
    'sounds/U/snd_voices_item_Ucho.mp3',
    'sounds/U/snd_voices_item_Uczen.mp3',
    'sounds/U/snd_voices_item_Ufoludek.mp3',
    'sounds/U/snd_voices_item_Ukladanka.mp3',
    'sounds/U/snd_voices_item_Ukwial.mp3',
    'sounds/U/snd_voices_item_Ul.mp3',
    'sounds/U/snd_voices_item_Ulica.mp3',
    'sounds/U/snd_voices_item_Umywalka.mp3',
    'sounds/U/snd_voices_item_Usta.mp3',
    'sounds/W/snd_voices_item_Wachlarz.mp3',
    'sounds/W/snd_voices_item_Walizka.mp3',
    'sounds/W/snd_voices_item_Waz.mp3',
    'sounds/W/snd_voices_item_Wiaderko.mp3',
    'sounds/W/snd_voices_item_Wilk.mp3',
    'sounds/W/snd_voices_item_Wodospad.mp3',
    'sounds/W/snd_voices_item_Wrona.mp3',
    'sounds/W/snd_voices_item_Wrotki.mp3',
    'sounds/Z/snd_voices_item_Zajac.mp3',
    'sounds/Z/snd_voices_item_Zamiec.mp3',
    'sounds/Z/snd_voices_item_Zbroja.mp3',
    'sounds/Z/snd_voices_item_Zebra.mp3',
    'sounds/Z/snd_voices_item_Zeszyt.mp3',
    'sounds/Z/snd_voices_item_Zorro.mp3',
    'sounds/Z/snd_voices_item_Zwieciadlo.mp3',
];
const audioCorrect = new Audio('sounds/correct.mp3');
const audioIncorrect = new Audio('sounds/incorrect.mp3');

// self executing function here
(function () {
    let letter = shuffleLetters();
    let snd = shuffleSounds(letter);
    createCard(letter, snd);
})();

document.addEventListener('keydown', function (e) {
    // console.log(e.code);
    if (e.code === 'Enter') {
        resetPoints();
    } else if (e.code === 'Space') {
        let letter = shuffleLetters();
        let snd = shuffleSounds(letter);
        createCard(letter, snd);
    } else if (Object.values(characters).includes(e.code)) {
        let c = document.getElementById('card').textContent;
        if (e.code === characters[c]) {
            audioCorrect.play().then(r => {
                increasePoint('good_answer');
            });

        } else {
            audioIncorrect.play().then(r => {
                increasePoint('bad_answer');
            });
        }
    }
});

function createCard(letter, snd) {
    let card = document.getElementById('card');
    card.textContent = letter;
    let letterAudio = new Audio(snd);
    letterAudio.play();
}

function shuffleLetters() {
    let randomIdx = Math.floor(Math.random() * Object.keys(characters).length);
    return Object.keys(characters)[randomIdx];
}

function shuffleSounds(letter) {
    let soundsByLetter = [];
    for (const item of soundLibrary) {
        if (item.search(letter + "/snd_voices_item_") > 0) {
            soundsByLetter.push(item);
        }
    }

    let randomIdx = Math.floor(Math.random() * soundsByLetter.length);
    return soundsByLetter[randomIdx];
}

function increasePoint(item) {
    let points = Number(document.getElementById(item).textContent);
    points += 1;
    document.getElementById(item).textContent = points.toString();
}

function resetPoints() {
    document.getElementById('good_answer').textContent = Number(0).toString();
    document.getElementById('bad_answer').textContent = Number(0).toString();
}
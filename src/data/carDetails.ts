export type CarSpecRow = {
  variant: string;
  engineType: string;
  power: string;
  topSpeed: string;
  consumption: string;
  co2: string;
};

export type CarPriceRow = {
  model: string;
  price: string;
  engine: string;
  drive: string;
};

export type CarSection = {
  title: string;
  body: string;
};

export type CarDetail = {
  id: string;
  name: string;
  heroImage: string;
  lead: string;
  features: string[];
  specTitle: string;
  specs: CarSpecRow[];
  sections: CarSection[];
  priceTitle: string;
  prices: CarPriceRow[];
  closingNote: string;
};

export const carDetails: Record<string, CarDetail> = {
  octavia: {
    id: 'octavia',
    name: 'Skoda Octavia',
    heroImage:
      'https://cdn.nwi-ms.com/media/hu/C/mc/PV3DCDOH/model/front.jpg?F=9P9P&P=GM&M=&size=M&background=transparent',
    lead: 'A Skoda Octavia egy középkategóriás autó, amely az egyik legnépszerűbb modell a márka történetében. Az Octavia változatai között megtalálhatóak a szedán és kombi formák is, amelyek mindegyike magas szintű kényelmet és megbízhatóságot biztosít.',
    features: [
      'Motorválaszték: 1.0 TSI, 1.5 TSI, 2.0 TDI motortípusok',
      'Teljesítmény: 115-190 lóerő',
      'Hajtás: Elsőkerék- és összkerék-hajtás',
      'Átlagfogyasztás: 4.0-6.0 liter / 100 km',
      'Biztonsági jellemzők: frontális ütközéssegítő, automatikus vészfékezés, sávelhagyás figyelmeztető',
    ],
    specTitle: 'Motorkínálat és műszaki adatok',
    specs: [
      {
        variant: '1.0 TSI',
        engineType: 'Benzin',
        power: '115 LE',
        topSpeed: '200 km/h',
        consumption: '4.5',
        co2: '105',
      },
      {
        variant: '1.5 TSI',
        engineType: 'Benzin',
        power: '150 LE',
        topSpeed: '210 km/h',
        consumption: '5.0',
        co2: '115',
      },
      {
        variant: '2.0 TDI',
        engineType: 'Dízel',
        power: '150 LE',
        topSpeed: '210 km/h',
        consumption: '4.5',
        co2: '120',
      },
      {
        variant: '2.0 TDI 4x4',
        engineType: 'Dízel',
        power: '190 LE',
        topSpeed: '220 km/h',
        consumption: '5.5',
        co2: '130',
      },
    ],
    sections: [
      {
        title: 'Design',
        body: 'A Skoda Octavia letisztult, modern formavilága az elegancia és praktikum ideális egyensúlya. A karosszéria harmonikus arányai mellett a tágas beltér prémium érzetet biztosít, miközben a csomagtartó mérete is kiemelkedő a kategóriájában.',
      },
      {
        title: 'Történet',
        body: 'Az első generáció 1996-ban mutatkozott be, és azóta is az egyik legsikeresebb Skoda modell. A folyamatos fejlesztéseknek köszönhetően az Octavia mindig képes volt lépést tartani a vásárlói igényekkel, legyen szó hatékonyságról, biztonságról vagy digitalizációról.',
      },
    ],
    priceTitle: 'Árak és felszereltségek',
    prices: [
      {
        model: 'Skoda Octavia Alap',
        price: '6 000 000 Ft',
        engine: '1.0 TSI',
        drive: 'Elsőkerék',
      },
      {
        model: 'Skoda Octavia Ambition',
        price: '7 000 000 Ft',
        engine: '1.5 TSI',
        drive: 'Elsőkerék',
      },
      {
        model: 'Skoda Octavia Style',
        price: '8 000 000 Ft',
        engine: '2.0 TDI',
        drive: 'Elsőkerék',
      },
      {
        model: 'Skoda Octavia L&K',
        price: '8 500 000 Ft',
        engine: '2.0 TDI',
        drive: '4x4',
      },
    ],
    closingNote:
      'További információért kérjük, vegye fel velünk a kapcsolatot!',
  },
  octaviacombi: {
    id: 'octaviacombi',
    name: 'Skoda Octavia Combi',
    heroImage:
      'https://cdn.nwi-ms.com/media/hu/C/mc/PV5DC5OH/model/front.jpg?F=2Y2Y&P=GM&size=L&background=transparent',
    lead: 'A Skoda Octavia Combi a népszerű Octavia modell praktikusabb, kombi változata. A tágas csomagtér, a variálható hátsó ülések és a kifinomult technológia ideális társsá teszik a nagycsaládosok és az aktív életmódot kedvelők számára.',
    features: [
      '610 literes csomagtér, 1740 literig bővíthető',
      'Hajtás: Elsőkerék, opcióként 4x4',
      'Maximális vonóhorog terhelhetőség: 2 000 kg',
      'Adaptív futómű és vezetéstámogató rendszerek széles választéka',
      'Simply Clever megoldások: csomagrögzítők, esernyőtartó, okos tárolók',
    ],
    specTitle: 'Motorkínálat és műszaki adatok',
    specs: [
      {
        variant: '1.0 TSI',
        engineType: 'Benzin',
        power: '110 LE',
        topSpeed: '198 km/h',
        consumption: '4.7',
        co2: '108',
      },
      {
        variant: '1.5 TSI ACT',
        engineType: 'Benzin',
        power: '150 LE',
        topSpeed: '210 km/h',
        consumption: '5.1',
        co2: '118',
      },
      {
        variant: '2.0 TDI DSG',
        engineType: 'Dízel',
        power: '150 LE',
        topSpeed: '215 km/h',
        consumption: '4.6',
        co2: '122',
      },
      {
        variant: '2.0 TDI 4x4',
        engineType: 'Dízel',
        power: '200 LE',
        topSpeed: '225 km/h',
        consumption: '5.5',
        co2: '135',
      },
    ],
    sections: [
      {
        title: 'Praktikum és design',
        body: 'A kombi karosszéria elegáns és aerodinamikus, miközben a praktikumot helyezi előtérbe. A LED-es világítás, a krómozott részletek és a kontrasztos tetősínek karakteres megjelenést biztosítanak.',
      },
      {
        title: 'Történet',
        body: 'A Skoda Octavia Combi generációról generációra bővítette piaci részesedését. A modell népszerű a flottavásárlók körében is, köszönhetően a hosszú távú megbízhatóságának és kedvező fenntartási költségeinek.',
      },
    ],
    priceTitle: 'Árak és felszereltség',
    prices: [
      {
        model: 'Octavia Combi Active',
        price: '6 300 000 Ft',
        engine: '1.0 TSI',
        drive: 'Elsőkerék',
      },
      {
        model: 'Octavia Combi Ambition',
        price: '7 300 000 Ft',
        engine: '1.5 TSI',
        drive: 'Elsőkerék',
      },
      {
        model: 'Octavia Combi Style',
        price: '8 200 000 Ft',
        engine: '2.0 TDI',
        drive: 'Elsőkerék',
      },
      {
        model: 'Octavia Combi Scout',
        price: '8 900 000 Ft',
        engine: '2.0 TDI',
        drive: '4x4',
      },
    ],
    closingNote:
      'További információért kérjük, vegye fel velünk a kapcsolatot!',
  },
  karoq: {
    id: 'karoq',
    name: 'Skoda Karoq',
    heroImage:
      'https://cdn.nwi-ms.com/media/hu/C/mc/NU7DM5OH/model/front.jpg?F=2Y2Y&P=TA&M=&size=M&background=transparent',
    lead: 'A Skoda Karoq egy kompakt SUV, amely a mindennapi használhatóságot kombinálja a kalandra kész megjelenéssel. Variálható üléseivel, tágas utasterével és fejlett biztonsági rendszereivel ideális választás lehet családoknak és aktív életet élőknek.',
    features: [
      'VarioFlex hátsó ülések a maximális variálhatóságért',
      'Akár 1 630 literig bővíthető csomagtér',
      'IntelliSafe biztonsági csomag: sávelhagyás-gátló, adaptív tempomat, holttér-figyelő',
      '4x4 összkerékhajtás és terep mód választható felszereltségtől függően',
      'Fejlett infotainment 9.2"-es Columbus rendszerrel és online szolgáltatásokkal',
    ],
    specTitle: 'Motorkínálat és műszaki adatok',
    specs: [
      {
        variant: '1.0 TSI',
        engineType: 'Benzin',
        power: '110 LE',
        topSpeed: '187 km/h',
        consumption: '5.3',
        co2: '121',
      },
      {
        variant: '1.5 TSI ACT',
        engineType: 'Benzin',
        power: '150 LE',
        topSpeed: '204 km/h',
        consumption: '5.6',
        co2: '128',
      },
      {
        variant: '2.0 TDI DSG',
        engineType: 'Dízel',
        power: '150 LE',
        topSpeed: '207 km/h',
        consumption: '4.8',
        co2: '125',
      },
      {
        variant: '2.0 TDI 4x4',
        engineType: 'Dízel',
        power: '190 LE',
        topSpeed: '212 km/h',
        consumption: '5.4',
        co2: '138',
      },
    ],
    sections: [
      {
        title: 'Design',
        body: 'A markáns hűtőrács és az éles LED-fényszórók magabiztos megjelenést kölcsönöznek a Karoqnak. A belső tér prémium anyagokkal és hangulatvilágítással emeli a vezetési élményt.',
      },
      {
        title: 'Történet',
        body: 'A Karoq 2017 óta szerepel a Skoda kínálatában és gyorsan a márka egyik legfontosabb SUV-jává vált. Kompakt méretei ellenére tágas és sokoldalú, ami világszerte népszerűvé tette.',
      },
    ],
    priceTitle: 'Árak és felszereltség',
    prices: [
      {
        model: 'Karoq Active',
        price: '8 200 000 Ft',
        engine: '1.0 TSI',
        drive: 'Elsőkerék',
      },
      {
        model: 'Karoq Ambition',
        price: '9 000 000 Ft',
        engine: '1.5 TSI',
        drive: 'Elsőkerék',
      },
      {
        model: 'Karoq Style',
        price: '9 800 000 Ft',
        engine: '2.0 TDI',
        drive: 'Elsőkerék',
      },
      {
        model: 'Karoq Sportline 4x4',
        price: '10 600 000 Ft',
        engine: '2.0 TDI',
        drive: '4x4',
      },
    ],
    closingNote:
      'További információért kérjük, vegye fel velünk a kapcsolatot!',
  },
  kodiaq: {
    id: 'kodiaq',
    name: 'Skoda Kodiaq',
    heroImage:
      'https://cdn.nwi-ms.com/media/hu/C/mc/PS7DYCYH/model/front.jpg?F=2Y2Y&P=ED&M=&size=M&background=transparent',
    lead: 'A Skoda Kodiaq a márka legnagyobb SUV modellje, amely akár hét üléssel is rendelhető. Erőteljes megjelenése, prémium utastere és innovatív technológiái tökéletes partnerré teszik hosszú utakhoz és mindennapi használathoz is.',
    features: [
      'Akár hét személy számára elegendő hely',
      'Progresszív kormányzás és adaptív futómű',
      'Akár 2 500 kg vontatókapacitás',
      'Fejlett biztonsági rendszerek: Travel Assist, Emergency Assist, Crew Protect Assist',
      'Prémium Canton hangrendszer és háttámla mögötti tablettartók',
    ],
    specTitle: 'Motorkínálat és műszaki adatok',
    specs: [
      {
        variant: '1.5 TSI ACT',
        engineType: 'Benzin',
        power: '150 LE',
        topSpeed: '203 km/h',
        consumption: '6.2',
        co2: '142',
      },
      {
        variant: '2.0 TSI 4x4',
        engineType: 'Benzin',
        power: '190 LE',
        topSpeed: '210 km/h',
        consumption: '7.2',
        co2: '168',
      },
      {
        variant: '2.0 TDI DSG',
        engineType: 'Dízel',
        power: '150 LE',
        topSpeed: '205 km/h',
        consumption: '5.7',
        co2: '149',
      },
      {
        variant: '2.0 TDI 4x4',
        engineType: 'Dízel',
        power: '200 LE',
        topSpeed: '218 km/h',
        consumption: '6.0',
        co2: '158',
      },
    ],
    sections: [
      {
        title: 'Design',
        body: 'Az éles vonalakkal formált karosszéria és a kristályszerű LED Matrix fényszórók karakteres megjelenést adnak a Kodiaqnak. A beltérben puha tapintású anyagok, panoráma tető és személyre szabható hangulatvilágítás teremt luxus érzetet.',
      },
      {
        title: 'Történet',
        body: 'A 2016-ban bemutatott Kodiaq a Skoda SUV-offenzívájának nyitánya volt. Rövid idő alatt több mint 100 országban jelent meg, és többször elnyerte a „Legjobb családi SUV” díjat.',
      },
    ],
    priceTitle: 'Árak és felszereltség',
    prices: [
      {
        model: 'Kodiaq Active',
        price: '10 900 000 Ft',
        engine: '1.5 TSI',
        drive: 'Elsőkerék',
      },
      {
        model: 'Kodiaq Ambition',
        price: '11 800 000 Ft',
        engine: '2.0 TSI',
        drive: '4x4',
      },
      {
        model: 'Kodiaq Style',
        price: '12 400 000 Ft',
        engine: '2.0 TDI',
        drive: 'Elsőkerék',
      },
      {
        model: 'Kodiaq L&K 4x4',
        price: '13 600 000 Ft',
        engine: '2.0 TDI',
        drive: '4x4',
      },
    ],
    closingNote:
      'További információért kérjük, vegye fel velünk a kapcsolatot!',
  },
  superb: {
    id: 'superb',
    name: 'Skoda Superb',
    heroImage:
      'https://cdn.nwi-ms.com/media/hu/C/mc/NZ3DYCOH/model/front.jpg?F=0Q0Q&P=HS&M=&size=M&background=transparent',
    lead: 'A Skoda Superb a gyártó zászlóshajója: egy prémium középkategóriás modell, amely tágas utasteret, kifinomult technológiát és elegáns megjelenést kínál. A Superb szedán és kombi kivitelben is elérhető, így üzleti felhasználásra és családi autóként is tökéletes társ.',
    features: [
      'Akár 625 literes csomagtér a szedán verzióban',
      'Matrix-LED fényszórók és dinamikus hátsó irányjelző',
      'Fejlett asszisztens rendszerek: Travel Assist, Park Assist, Side Assist',
      'Plug-in hibrid iV változat akár 55 km tisztán elektromos hatótávval',
      'Prémium belső anyagok, masszírozós első ülések, háromzónás klíma',
    ],
    specTitle: 'Motorkínálat és műszaki adatok',
    specs: [
      {
        variant: '1.5 TSI ACT',
        engineType: 'Benzin',
        power: '150 LE',
        topSpeed: '220 km/h',
        consumption: '6.0',
        co2: '139',
      },
      {
        variant: '2.0 TSI DSG',
        engineType: 'Benzin',
        power: '190 LE',
        topSpeed: '232 km/h',
        consumption: '6.9',
        co2: '158',
      },
      {
        variant: '2.0 TDI SCR',
        engineType: 'Dízel',
        power: '150 LE',
        topSpeed: '222 km/h',
        consumption: '5.2',
        co2: '135',
      },
      {
        variant: 'Superb iV',
        engineType: 'Plug-in hibrid',
        power: '218 LE',
        topSpeed: '224 km/h',
        consumption: '1.5 (komb.)',
        co2: '35',
      },
    ],
    sections: [
      {
        title: 'Design',
        body: 'A Superb sziluettje elegáns és időtlen, miközben a legújabb Skoda formanyelvet képviseli. A LED-es világítás, a krómozott részletek és a 19"-os felnik prémium hatást keltenek.',
      },
      {
        title: 'Történet',
        body: 'A Superb név 1934 óta része a Skoda történetének. A modern korszak 2001-ben indult, azóta három generáción keresztül töretlen a siker: a Superb számos szakmai díjat nyert és a Skoda kínálatának csúcsát jelenti.',
      },
    ],
    priceTitle: 'Árak és felszereltség',
    prices: [
      {
        model: 'Superb Ambition',
        price: '11 200 000 Ft',
        engine: '1.5 TSI',
        drive: 'Elsőkerék',
      },
      {
        model: 'Superb Style',
        price: '12 100 000 Ft',
        engine: '2.0 TDI',
        drive: 'Elsőkerék',
      },
      {
        model: 'Superb L&K',
        price: '13 400 000 Ft',
        engine: '2.0 TSI',
        drive: '4x4',
      },
      {
        model: 'Superb iV',
        price: '13 900 000 Ft',
        engine: 'Plug-in hibrid',
        drive: 'Elsőkerék',
      },
    ],
    closingNote:
      'További információért kérjük, vegye fel velünk a kapcsolatot!',
  },
  superbcombi: {
    id: 'superbcombi',
    name: 'Skoda Superb Combi',
    heroImage:
      'https://cdn.nwi-ms.com/media/hu/C/mc/NZ5DYCOH/model/front.jpg?F=0Q0Q&P=HS&M=&size=M&background=transparent',
    lead: 'A Skoda Superb Combi a Superb minden erényét még több hellyel és rugalmassággal párosítja. A kategóriában kiemelkedő csomagtér, a kifinomult futómű és a csúcstechnológiás asszisztensek biztosítják, hogy hosszú utakon és a mindennapokban is első osztályú élményt nyújtson.',
    features: [
      '660 literes csomagtér, lehajtott ülésekkel 1 950 liter',
      'Elektromos csomagtérajtó láblendítésre nyíló funkcióval',
      'Adaptív légrugózás a komfortos utazás érdekében',
      'Head-up display és digitális műszeregység',
      'Simply Clever kiegészítők: csomagrögzítő hálók, kihajtható vonóhorog',
    ],
    specTitle: 'Motorkínálat és műszaki adatok',
    specs: [
      {
        variant: '1.5 TSI ACT',
        engineType: 'Benzin',
        power: '150 LE',
        topSpeed: '218 km/h',
        consumption: '6.1',
        co2: '141',
      },
      {
        variant: '2.0 TSI 4x4',
        engineType: 'Benzin',
        power: '190 LE',
        topSpeed: '233 km/h',
        consumption: '7.1',
        co2: '166',
      },
      {
        variant: '2.0 TDI SCR',
        engineType: 'Dízel',
        power: '150 LE',
        topSpeed: '220 km/h',
        consumption: '5.3',
        co2: '137',
      },
      {
        variant: 'Superb Combi iV',
        engineType: 'Plug-in hibrid',
        power: '218 LE',
        topSpeed: '225 km/h',
        consumption: '1.6 (komb.)',
        co2: '36',
      },
    ],
    sections: [
      {
        title: 'Design',
        body: 'A kombi karosszéria határozottan dinamikus, mégis elegáns. A tetősínek, a hátsó LED-fénysáv és a krómozott részletek prémium megjelenést biztosítanak.',
      },
      {
        title: 'Történet',
        body: 'A Superb Combi 2009-ben csatlakozott a modellcsaládhoz, és gyorsan az egyik legnépszerűbb üzleti kombivá vált. A harmadik generáció finomított dizájnt és hibrid hajtásláncot is hozott, ezzel erősítve a fenntarthatósági törekvéseket.',
      },
    ],
    priceTitle: 'Árak és felszereltség',
    prices: [
      {
        model: 'Superb Combi Ambition',
        price: '11 600 000 Ft',
        engine: '1.5 TSI',
        drive: 'Elsőkerék',
      },
      {
        model: 'Superb Combi Style',
        price: '12 500 000 Ft',
        engine: '2.0 TDI',
        drive: 'Elsőkerék',
      },
      {
        model: 'Superb Combi Scout',
        price: '13 200 000 Ft',
        engine: '2.0 TDI',
        drive: '4x4',
      },
      {
        model: 'Superb Combi iV',
        price: '14 200 000 Ft',
        engine: 'Plug-in hibrid',
        drive: 'Elsőkerék',
      },
    ],
    closingNote:
      'További információért kérjük, vegye fel velünk a kapcsolatot!',
  },
};

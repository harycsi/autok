import { Container } from "./Container";
import { Autok, AutokProps } from "./Autok";

export const cars: AutokProps[] = [
    {
        img: "https://cdn.nwi-ms.com/media/hu/C/mc/PV3DCDOH/model/front.jpg?F=9P9P&P=GM&M=&size=M&background=transparent",
        name: "Skoda Octavia",
        children: <>
            <p>A Skoda Octavia egy középkategóriás autó, amely az egyik legnépszerűbb modell 
                a márka történetében. Az Octavia változatai között megtalálhatóak a szedán 
                és kombi formák is, amelyek mindegyike magas szintű kényelmet és megbízhatóságot biztosít.</p>
        </>
    },
    {
        img: "https://cdn.nwi-ms.com/media/hu/C/mc/PV5DC5OH/model/front.jpg?F=2Y2Y&P=GM&size=L&background=transparent",
        name: "Skoda Octavia Combi",
        children: <>
            <p>A Skoda Octavia egy középkategóriás autó, amely az egyik legnépszerűbb modell 
                a márka történetében. Az Octavia változatai között megtalálhatóak a szedán 
                és kombi formák is, amelyek mindegyike magas szintű kényelmet és megbízhatóságot biztosít.</p>
        </>
    },
    {
        img: "https://cdn.nwi-ms.com/media/hu/C/mc/NU7DM5OH/model/front.jpg?F=2Y2Y&P=TA&M=&size=M&background=transparent",
        name: "Skoda Karoq",
        children: <>
            <p>A Skoda Karoq egy kompakt SUV, amely a márka dinamikus és stílusos megoldásait 
                kínálja a vásárlóknak. A Karoq különleges egyensúlyt teremt a megbízhatóság, 
                kényelem és a szabadidős autózás élménye között, miközben szabadon választott 
                hajtásláncok és gazdag felszereltség jellemzik.</p>
        </>
    },
    {
        img: "https://cdn.nwi-ms.com/media/hu/C/mc/PS7DYCYH/model/front.jpg?F=2Y2Y&P=ED&M=&size=M&background=transparent",
        name: "Skoda Kodiaq",
        children: <>
            <p>A Skoda Kodiaq egy prémium kategóriájú, nagy méretű SUV, amely a Skoda 
                legnagyobb és legdinamikusabb modellje. A Kodiaq egyesíti a tágas 
                utasteret, a családbarát megoldásokat és a kifinomult technológiai 
                jellemzőket, hogy egyensúlyba hozza a kényelmet és a teljesítményt. 
                A Kodiaq ideális választás a hosszú utazásokra és a mindennapi városi 
                közlekedésre egyaránt.</p>
        </>
    },  
    {
        img: "https://cdn.nwi-ms.com/media/hu/C/mc/NZ3DYCOH/model/front.jpg?F=0Q0Q&P=HS&M=&size=M&background=transparent",
        name: "Skoda Superb",
        children: <>
            <p>A Skoda Superb egy prémium középkategóriás autó, amely a márka 
                csúcsváltozata, és kényelmével, tágasságával, valamint fejlett 
                technológiai megoldásaival kiemelkedik a piacon. Az autó elérhető szedán 
                és kombi változatban is.</p>
        </>
    },
    {
        img: "https://cdn.nwi-ms.com/media/hu/C/mc/NZ5DYCOH/model/front.jpg?F=0Q0Q&P=HS&M=&size=M&background=transparent",
        name: "Skoda Superb Combi",
        children: <>
            <p>A Skoda Superb egy prémium középkategóriás autó, amely a márka 
                csúcsváltozata, és kényelmével, tágasságával, valamint fejlett 
                technológiai megoldásaival kiemelkedik a piacon. Az autó elérhető szedán 
                és kombi változatban is.</p>
        </>
    }
];

type AutokListaProps = {
    array: AutokProps[]
}

export const AutokLista = ({ array }: AutokListaProps) => {
    return <Container>
        {array.map(({ name, ...rest }) =>
            <Autok {...rest} name={name} key={name} />
        )}
    </Container>
}
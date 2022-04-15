let jugadores = {
    lista: [
    { 
        id: "1",
        nombre: "Paulo Bruno Exequiel",
        apellido: "Dybala",
        edad: "28",
        nacimiento: "15/11/1993",
        nacionalidad: "Argentina", 
        club: "Juventus",
        posicion:"Mediapunta",
        trayectoria: "Instituo Central de Cordoba(2011-2012); Palermo(2012-2015); Juventus(2015-2022)",
        fisico: "Mide 1,77m y pesa 77kg",
        valorDeMercado: "40 millones de euros",
        img: "https://i.pinimg.com/originals/09/3d/55/093d55e3c6dd2d8ad32298b8842d7491.jpg"
        
    },
    { 
        id: "2",
        nombre: "Lionel Andres",
        apellido: "Messi",
        edad: "34",
        nacimiento: "24/6/1987",
        nacionalidad: "Argentina", 
        club: "PSG",
        posicion: "Delantero-Extremo Derecho",
        trayectoria: "Newells(1995-2000); FC Barcelona(2004-2021); PSG(2021-actualmente)",
        fisico: "Mide 1,69m y pesa 67kg",
        valorDeMercado: "60 millones de euros",
        id: "2",
        imagen: "https://www.clarin.com/img/2019/04/03/lionel-messi-una-de-las___mDtdBqB3n_720x0__1.jpg"

    },
    { 
        id: "3",
        nombre: "Robert",
        apellido: "Lewandoski",
        edad: "33",
        nacimiento: "21/08/1988",
        nacionalidad: "Polonia", 
        club: "Bayern Munich",
        posicion: "Delantero centro",
        trayectoria: "Mide 1,85 m y pesa 81 kg",
        fisico: "Legia de Varsovia II(2005-2006); Znicz Pruszkow(2006-2008); Lech Poznan(2008-2010); B.V Borussia(2010-2014); FC Bayern Munich(2014-actualmente)",
        valorDeMercado: "50 millones de euros",
        imagen: "https://i.pinimg.com/736x/3b/22/7e/3b227ec0dc2c43d571b7243c813c760d.jpg"

    },
    { 
        id: "4",
        nombre: "Zlatan",
        apellido: "Ibrahimovic",
        edad: "40",
        nacimiento:"03/10/1981",
        nacionalidad: "Suecia", 
        club: "AC Milan",
        posicion:"Delantero centro",
        trayectoria: "Malmo(1999-2001); Ajax(2001-2004); Juventus(2004-2006); Internazionale(2006-2009); FC Barcelona(2009-2010); A.C Milan(2010-2012); PSG(2012-2016); Manchester United(2016-2018); L.A Galaxy(2018-2019); A.C Milan(2020-actualmente)",
        fisico: "Mide 1,95m y pesa 95kg",
        valorDeMercado: "4 millones de euros",
        imagen: "https://i.pinimg.com/736x/31/43/3f/31433fa373f28923cce68aad724fa70c.jpg"

    },
    { 
        id: "5",
        nombre: "N'Golo",
        apellido: "Kante",
        edad: "31",
        nacimiento: "29/03/1991",
        nacionalidad: "Francia", 
        club: "Chelsea FC",
        posicion: "Mediocampista",
        trayectoria: "U.S Boulogne(2012-2013); S.M Caen(2013-2015); Leicester City (2015-2016); Chelsea FC(2016-actualmente)",
        fisico: "Mide 1,68m y pesa 68kg",
        valorDeMercado: "50 millones de euros",
        imagen: "https://i.pinimg.com/474x/e2/a3/cc/e2a3cc24a99d2f4a1f87456f4eb3b6d4.jpg"

    },
    { 
        id: "6",
        nombre: "Julian",
        apellido: "Alvarez",
        edad: "22",
        nacimiento: "31/01/200",
        nacionalidad: "Argetnina", 
        club: "River Plate",
        posicion: "Delantero centro",
        trayectoria: "River Plate(2018-2021); Manchester City F.C(2022-presente); prestamo de River Plate (2022-presente)",
        fisico: "Mide 1,70m y pesa 71kg",
        valorDeMercado: "23 millones de euros",
        imagen: "https://1.bp.blogspot.com/-d8wZVg1fYF8/YY1mUIIdzXI/AAAAAAAAatY/M_iKn5h1XRIv2w84TbRC6DwJZ07j-HSQACLcBGAsYHQ/s381/panini-instant-argentina-2021-8-julian-alvarez.jpg"
},
{ 
        id: "7",
        nombre: "Phil",
        apellido: "Foden",
        edad: "21",
        nacimiento: "28/05/2000",
        nacionalidad: "Inglaterra", 
        club: "Manchester City",
        posicion: "Mediocentro",
        trayectoria: "Manchester City(2017-actualmente)",
        fisico: "Mide 1,71m y pesa 61kg",
        valorDeMercado: "90 millones de euros",
        imagen: "https://i.pinimg.com/736x/86/6a/6a/866a6a6c081c4bd9ddcbe3776d6fe39b.jpg"

},
{ 
        id: "8",    
        nombre: "Angel Fabian",
        apellido: "Di Maria",
        edad: "34",
        nacimiento: "14/02/1988",
        nacionalidad: "Argentina", 
        club: "PSG",
        posicion: "Extremo derecho",
        trayectoria: "Rosario Central (2005-2007); Benfica(2007-2010); Real Madrid(2010-2014); Manchester United(2014-2015); PSG(2015-Act.)",
        fisico: "Mide 1,80m y pesa 75kg",
        valorDeMercado: "15 millones de euros",
        imagen: "https://media.minutouno.com/adjuntos/150/imagenes/029/005/0029005745.jpg?0000-00-00-00-00-00"

},
{ 
        id: "9",
        nombre: "Juan Fernando",
        apellido: "Quintero",
        edad: "29",
        nacimiento: " 18/01/1993",
        nacionalidad: "Colombia", 
        club: "River Plate",
        posicion: "Mediocentro ofensivo",
        trayectoria: "Envigado(2009-1011); Atlético Nacional(2012); Delfino Pescara(2012-2013); F.C Porto(2013-2018); Stade Rennes(2015-2016); Independiente Medellín(2017); River Plate(2018); River Plate(2019-20); Shenzhen FC(2021); River Plate(2022-actualmente)",
        fisico: "Mide 1,68m y pesa 65kg",
        valorDeMercado: "6 millones de euros",
        imagen: "https://i.pinimg.com/originals/6d/97/c6/6d97c6433b012fa814c17859f201d444.png"

},
{ 
        id: "10",
        nombre: "Antoine",
        apellido: "Griezman",
        edad: "31",
        nacimiento: "21/03/1991",
        nacionalidad: "Francia", 
        club: "Atletico de Madrid",
        posicion: "Mediapunta",
        trayectoria: "Real Sociedad(2009-2014); Atlético de Madrid(2014-2019); F. C. Barcelona(2019-2021); Atlético de Madrid(2021-presente)",
        fisico: "Mide 1,76m y pesa 70kg",
        valorDeMercado: "50 millones de euros",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_668972-MLA49366289997_032022-V.jpg"

},

    ]
}

module.exports = jugadores; 
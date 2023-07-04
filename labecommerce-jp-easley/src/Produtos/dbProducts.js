import pedra1 from '../utils/pedra1.jpg'
import pedra2 from '../utils/pedra2.jpg'
import pedra3 from '../utils/pedra3.jpg'
import pedra4 from '../utils/pedra4.jpg'
import pedra5 from '../utils/pedra5.png'
import pedra6 from '../utils/pedra6.jpg'
import pedra7 from '../utils/pedra7.jpg'
import pedra8 from '../utils/pedra8.jpg'
import pedra9 from '../utils/pedra9.jpg'
import spacialclothes2 from '../utils/spacialclothes2.jpeg'
import spacialclothes3 from '../utils/spacialclothes3.jpeg'
import spacialclothes4 from '../utils/spacialclothes4.jpeg'
import spacialclothes5 from '../utils/spacialclothes5.jpeg'
import spacialclothes6 from '../utils/spacialclothes6.jpeg'
import spacialclothes7 from '../utils/spacialclothes7.jpeg'
import spacialclothes8 from '../utils/spacialclothes8.jpeg'
import spacialclothes9 from '../utils/spacialclothes9.jpeg'
import spacialclothes10 from '../utils/spacialclothes10.jpeg'
import spacialclothes11 from '../utils/spacialclothes11.jpeg'


const dbProducts
 = [
    {
     name:"pedra de venus",
     id: 1,
     rate: 5,
     category:"pedra",
     price: 209.90,
     stoke: 2,
     description: "Uma pedra caída do espaço é um objeto incrivelmente raro e fascinante, resultado de uma jornada cósmica que atravessa imensidões insondáveis do universo. Essas pedras, conhecidas como meteoritos, são fragmentos sólidos de corpos celestes, como asteroides ou cometas, que sobrevivem à sua entrada na atmosfera terrestre e alcançam a superfície do nosso planeta.",
     image:pedra1
    },
    {
    name:"pedra da lua",
    id: 2,
    rate: 5,
    category:"pedra",
    price: 462.90,
    stoke: 2,
    description: "A aparência de uma pedra caída do espaço pode variar amplamente, dependendo da sua composição e das condições atmosféricas durante a sua queda. Ela pode ter tamanhos diferentes, desde pequenos fragmentos até corpos maiores que deixam uma cratera ao atingir a Terra. A cor também pode variar, com tonalidades que vão desde o preto carbonoso até tons metálicos brilhantes.",
    image:pedra2     
    },
    {
    name:"pedra de marte",
    id: 3,
    rate: 5,
    category:"pedra",
    price: 659.90,
    stoke: 2,
    description: "Os meteoritos podem conter uma grande variedade de materiais, incluindo rochas, minerais, metais e até mesmo compostos orgânicos complexos. Alguns meteoritos são compostos principalmente de ferro e níquel, formando estruturas metálicas distintas, enquanto outros são compostos por silicatos e minerais terrestres.",
    image:pedra3
    },
    {
    name:"pedra de jupter",
    id: 4,
    rate: 5,
    category:"pedra",
    price: 605.90,
    stoke: 2,
    description: "Uma pedra caída do espaço é muito mais do que apenas um objeto terrestre comum. Ela carrega consigo uma história cósmica única, contendo informações preciosas sobre a formação e a evolução do nosso sistema solar. Cada meteorito é um registro antigo, preservando pistas sobre a idade do universo, processos geológicos e até mesmo possíveis formas de vida extraterrestre.",
    image:pedra4
    },
    {
    name:"pedra de vrido",
    id: 5,
    rate: 5,
    category:"pedra",
    price: 256.90,
    stoke: 2,
    description: "Além do valor científico, uma pedra caída do espaço pode despertar o interesse e a curiosidade das pessoas. Sua natureza exótica e a sensação de ter sido tocada pelo cosmos atraem colecionadores, cientistas e entusiastas de todo o mundo. Elas podem ser expostas em museus, estudadas em laboratórios ou até mesmo utilizadas como joias, transformando-se em objetos de beleza e admiração.",
    image:pedra5
    },
    {
    name:"meteorito do pombo",
    id: 6,
    rate: 5,
    category:"meteorito",
    price: 544.90,
    stoke: 2,
    description: "Em resumo, uma pedra caída do espaço é uma testemunha silenciosa de eventos cósmicos extraordinários. Ela nos conecta com o vasto universo, provocando questionamentos e ampliando nossa compreensão sobre a nossa própria existência e o lugar que ocupamos no cosmos.",
    image:pedra6
    },
    {
    name:"meteorito de odin",
    id: 7,
    rate: 5,
    category:"meteorito",
    price: 456.76,
    stoke: 2,
    description: "Uma pedra caída do espaço é muito mais do que apenas um objeto terrestre comum. Ela carrega consigo uma história cósmica única, contendo informações preciosas sobre a formação e a evolução do nosso sistema solar. Cada meteorito é um registro antigo, preservando pistas sobre a idade do universo, processos geológicos e até mesmo possíveis formas de vida extraterrestre.",
    image:pedra7
    },
    {
    name:"meteorito do jubscraubes",
    id: 8,
    rate: 5,
    category:"meteorito",
    price: 456.99,
    stoke: 2,
    description: "Uma pedra caída do espaço é muito mais do que apenas um objeto terrestre comum. Ela carrega consigo uma história cósmica única, contendo informações preciosas sobre a formação e a evolução do nosso sistema solar. Cada meteorito é um registro antigo, preservando pistas sobre a idade do universo, processos geológicos e até mesmo possíveis formas de vida extraterrestre.",
    image:pedra8
    },
    {
    name:"meteorito scraubes",
    id: 9,
    rate: 5,
    category:"meteorito",
    price: 446.56,
    stoke: 2,
    description: "Uma pedra caída do espaço é muito mais do que apenas um objeto terrestre comum. Ela carrega consigo uma história cósmica única, contendo informações preciosas sobre a formação e a evolução do nosso sistema solar. Cada meteorito é um registro antigo, preservando pistas sobre a idade do universo, processos geológicos e até mesmo possíveis formas de vida extraterrestre.",
    image:pedra9
    },
    {
    name:"Roupa Espacial Classe 1",
    id: 10,
    rate: 5,
    category:"roupa espacial",
    price: 3862.99,
    stoke: 2,
    description: " ",
    image:spacialclothes2
    },
    {
    name:"Roupa Espacial Classe 2",
    id: 11,
    rate: 5,
    category:"roupa espacial",
    price: 4533.99,
    stoke: 2,
    description: " ",
    image:spacialclothes3
    },
    {
    name:"Roupa Espacial Classe 3",
    id: 12,
    rate: 5,
    category:"roupa espacial",
    price: 5343.99,
    stoke: 2,
    description: " ",
    image:spacialclothes4
    },
    {
    name:"Roupa Espacial Classe 4",
    id: 13,
    rate: 5,
    category:"roupa espacial",
    price: 4234.99,
    stoke: 2,
    description: " ",
    image:spacialclothes5
    },
    {
    name:"Roupa Espacial Classe 5",
    id: 14,
    rate: 5,
    category:"roupa espacial",
    price: 5362.99,
    stoke: 2,
    description: " ",
    image:spacialclothes6
    },
    {
    name:"Roupa Espacial Classe 6",
    id: 15,
    rate: 5,
    category:"roupa espacial",
    price: 4862.99,
    stoke: 2,
    description: " ",
    image:spacialclothes7
    },
    {
    name:"Roupa Espacial Classe 7",
    id: 16,
    rate: 5,
    category:"roupa espacial",
    price: 5662.99,
    stoke: 2,
    description: " ",
    image:spacialclothes8
    },
    {
    name:"Roupa Espacial Classe 8",
    id: 17,
    rate: 5,
    category:"roupa espacial",
    price: 6662.99,
    stoke: 2,
    description: " ",
    image:spacialclothes9
    },
    {
    name:"Roupa Espacial Classe 9",
    id: 18,
    rate: 5,
    category:"roupa espacial",
    price: 8862.99,
    stoke: 2,
    description: " ",
    image:spacialclothes10
    },
    {
    name:"Roupa Espacial Classe 10",
    id: 19,
    rate: 5,
    category:"roupa espacial",
    price: 6562.99,
    stoke: 2,
    description: " ",
    image:spacialclothes11
    },
    
]

export default dbProducts

import homodeus from '../assets/homo-deus.jpg';
import sapiens from '../assets/sapiens.jpg';
import licoes21 from '../assets/21-licoes.jpg';
import entendaGato from '../assets/entenda-gato.jpg';
import jojoManga from '../assets/jojo-manga.jpg';
import diarioAnne from '../assets/diario-anne.jpg';
import hyruleHistoria from '../assets/hyrule-historia.jpg';
import homemDeGiz from '../assets/homem-de-giz.jpg';

export default function mock(){

    return [
            {id:0, img: sapiens, titulo:'Sapiens', autor:'Yuval Noah Harari', preco:39.90},
            {id:1, img: homodeus, titulo:'Homo Deus', autor:'Yuval Noah Harari', preco:64.90},    
            {id:2, img: licoes21, titulo:'21 Lições para o século 21', autor:'Yuval Noah Harari', preco:59.90},
            {id:3, img: entendaGato, titulo:'Entenda Seu Gato', autor:'Arden Moore', preco:37.00}, 
            {id:4, img: jojoManga, titulo:'JOJO: Phantom Blood', autor:'Hirohiko Araki', preco:29.90}, 
            {id:5, img: diarioAnne, titulo:'O Diário de Anne Frank', autor:'Anne Frank', preco:27.00}, 
            {id:6, img: hyruleHistoria, titulo:'The Legend of Zelda: Hyrule História', autor:'Eiji Aonuma', preco:185.00},
            {id:7, img: homemDeGiz, titulo:'O Homem de Giz', autor:'C. J. Tudor', preco:34.90},
        ]
  }
  
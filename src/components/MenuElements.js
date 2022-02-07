import  Home  from '../components/Home';
import { PaginaListas } from '../components/PaginaListas';
import { Perfil } from '../components/Perfil';
import Series from '../components/Series';
import PelisGhibli from '../components/PelisGhibli';
import Especies from '../components/Especies';
import Crypto from '../components/Crypto';
export const MenuItems = [
  {
    id: 1,
    path: '/',
    title: 'Home',
    component: Home,
  },
  {
    id: 2,
    path: '/listas',
    title: 'Listas de tareas',
    component: PaginaListas,
  },
 
];
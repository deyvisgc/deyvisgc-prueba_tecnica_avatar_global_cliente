import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: 'Estrenos'
  },
  {
    name: 'Peliculas',
    url: '/pelicula/lista',
    iconComponent: { name: 'cil-movie' }
  },
];

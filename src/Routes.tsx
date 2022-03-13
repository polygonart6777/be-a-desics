import Home from './chapters/Home'
import Mobius from './chapters/Mobius'
import Schottky from './chapters/Schottky'

const Routes = [
    {
        path: '/',
        sidebarName: 'Home',
        component: Home,
    },
    {
        path: '/Mobius',
        sidebarName: 'Mobius',
        component: Mobius,
    },
    {
        path: '/schottky',
        sidebarName: 'Schottky',
        component: Schottky,
    },
]

export default Routes


import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './src/pages/Login';
import Inscription from './src/pages/Inscription';
import Abonnes from './src/pages/Abonnes';
import Welcome from './src/pages/Welcome';
import Compte from './src/pages/Compte';

const Screens = createStackNavigator({
    Welcome,
    Compte,
    Login,
    Abonnes,
    Inscription
});

export default createAppContainer(Screens);
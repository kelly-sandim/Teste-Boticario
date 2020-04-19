import { createStackNavigator } from 'react-navigation-stack';

import Login from '../views/Login';
import Register from '../views/Register';
import ForgotPassword from '../views/ForgotPassword';

const PublicRouter = createStackNavigator({
    Login: {
        screen: Login
    },
    Register: {
        screen: Register
    },
    ForgotPassword: {
        screen: ForgotPassword
    }
},
{
    headerMode: 'none',
});

export default PublicRouter;
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../views/LoginScreen';
import Register from '../views/RegisterScreen';

const Router = createStackNavigator();
// {
//     Login: {
//         screen: Login
//     },
//     Register: {
//         screen: Register
//     },
//     ForgotPassword: {
//         screen: ForgotPassword
//     }
// },
// {
//     headerMode: 'none',
// }

export default function PublicRouter() {
    return (
      <Router.Navigator>
        <Router.Screen name="Login" component={Login} />
        <Router.Screen name="Register" component={Register} />        
      </Router.Navigator>
    );
}
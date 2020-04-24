import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Login from '../views/LoginScreen';
import Register from '../views/RegisterScreen';

const Router = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Login';

export default function PublicRouter() {
    return (
      <Router.Navigator initialRouteName={INITIAL_ROUTE_NAME}
                        headerMode='none'>
        <Router.Screen name="Login" component={Login} />
        <Router.Screen name="Register" component={Register} />        
      </Router.Navigator>
    );
}
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PublicRouter from '../public/routes/PublicRouter';
import UserRouter from '../user/routes/UserRouter';
import * as React from 'react';


// create switch navigation with authentication flow and main app
// const RouterConfig  = createSwitchNavigator(
//     {
//       Login: PublicRouter,
//       App: UserRouter
//     },
//     {
//       initialRouteName: 'Login'
//     }
//   );

// //routes.public.render() ou routes.user.render()
// export default RouterConfig;
const Stack = createStackNavigator();

const INITIAL_ROUTE_NAME = 'Login';

export default function RouterConfig() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
          {/* {isLoggedIn ? (
            <> */}
              <Stack.Screen name="Home" component={UserRouter} />              
            {/* </> */}
          ) : (
            <Stack.Screen name="Login" component={PublicRouter} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
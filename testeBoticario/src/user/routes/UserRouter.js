import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import TabBarIcon from '../../../components/TabBarIcon';
import HomeScreen from '../views/HomeScreen';
import Profile from '../views/Profile';
import NewTweet from '../views/NewTweet';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  
  navigation.setOptions({ headerTitle: getHeaderTitle(route),
                          });

  return (
    <BottomTab.Navigator headerMode='screen' initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'HomePage',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Meu Perfil',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-person" />,
        }}
      />      
    </BottomTab.Navigator>
  );
}

const Stack = createStackNavigator();
export function UserRouter()
{
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name="NewTweet" component={NewTweet} />
      <Stack.Screen name="Register" component={Register} />        
    </Stack.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Página Inicial';
    case 'Profile':
      return 'Meu Perfil';    
  }
}

import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons, Fontisto } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import store from "./store";

import HomeScreen from './src/user/views/HomeScreen';
import DrawerContainer from './src/user/views/DrawerContainer';
import Profile from './src/user/views/Profile';
import ReplyTweet from './src/user/views/ReplyTweet';
import UserRouter from './src/user/routes/UserRouter';
import PublicRouter from './src/public/routes/PublicRouter';
import RouterConfig from './src/app/RouterConfig';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import useLinking from './navigation/useLinking';

const Stack = createStackNavigator();

const INITIAL_ROUTE_NAME = 'Login';

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
          <Stack.Navigator headerMode='none' initialRouteName={INITIAL_ROUTE_NAME}>  
            <Stack.Screen name="NewTweet" component={ReplyTweet} />          
            <Stack.Screen name="Home" component={UserRouter} />  
            <Stack.Screen name="Login" component={PublicRouter} />
            <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}


const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <DrawerContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    </DrawerContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E53935',
  },
});

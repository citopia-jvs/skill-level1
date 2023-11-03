/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {Home, Profile} from './src/views';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import store from './src/context/store';
import {Provider} from 'react-redux';

export type RootStackParamsList = {
  TabBarNavigation: NavigatorScreenParams<TabBarNavigationParamsList>;
};

export type TabBarNavigationParamsList = {
  Home: undefined;
  Profile: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamsList>();
const TabBarStack = createBottomTabNavigator<TabBarNavigationParamsList>();

export const TabBarNavigator = () => {
  return (
    <TabBarStack.Navigator>
      <TabBarStack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Accueil',
          tabBarIcon: props => (
            <AntDesign name="home" size={20} color={props.color} />
          ),
        }}
      />
      <TabBarStack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profil',
          tabBarIcon: props => (
            <AntDesign name="profile" size={20} color={props.color} />
          ),
        }}
      />
    </TabBarStack.Navigator>
  );
};

export const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="TabBarNavigation"
        component={TabBarNavigator}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;

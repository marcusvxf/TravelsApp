import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Image} from 'react-native';
import Home from './pages/Home';
import TabBar from './components/TabBar';
import Archived from './pages/Archived';
import HomeStack from './pages/Home/homeStack';

const Stack = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({route}) => ({
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#DB00FF',
            borderRadius: 60,
            margin: 2,
          },
        })}>
        <Stack.Screen
          name="Home"
          component={HomeStack}
          options={{
            headerShown: false,

            tabBarIcon: ({focused, color, size}) => {
              return (
                <Ionicons
                  name="home"
                  size={focused ? 40 : 30}
                  color={`${focused ? '#FF9F2E' : 'white'}`}
                />
              );
            },
          }}
        />
        <Stack.Screen
          name="Arquivadas"
          component={Archived}
          options={{
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => {
              return (
                <Ionicons
                  name="archive"
                  size={focused ? 35 : 25}
                  color={`${focused ? '#FF9F2E' : 'white'}`}
                />
              );
            },
          }}
        />
        <Stack.Screen
          name="Revies"
          component={Home}
          options={{
            headerShown: false,

            tabBarIcon: ({focused, color, size}) => {
              return (
                <Ionicons
                  name="star"
                  size={focused ? 40 : 30}
                  color={`${focused ? '#FF9F2E' : 'white'}`}
                />
              );
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

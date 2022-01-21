import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PayScreen from '../screen/PayScreen';
import OnBoarding from '../screen/OnBoarding';
import Splash from '../screen/Splash';
import DOB from '../screen/DOB';
import PayBill from '../screen/PayBill';
import MobileNo from '../screen/MobileNo'
import BottomTabs from '../screen/BottomTabs';
import HomeScreen from '../screen/BottomTabs/Home';

const AppStack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
        <AppStack.Navigator headerShown='none' initialRouteName='Splash' >
            <AppStack.Screen name='Splash' component={Splash} options={{headerShown:false}}/>
            <AppStack.Screen  name='OnBoarding' component={OnBoarding} options={{headerShown:false}}/>
            <AppStack.Screen name='PayScreen' component={PayScreen} options={{headerShown:false}}/>
            <AppStack.Screen name='DOB' component={DOB} />
            <AppStack.Screen name='PayBill' component={PayBill} options={{headerShown:false}}/>
            <AppStack.Screen name='MobileNo' component={MobileNo} options={{headerShown:false}}/>
            <AppStack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>

        </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

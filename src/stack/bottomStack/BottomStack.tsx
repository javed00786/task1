import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/home/Home';
import HomeStack from '../homeStack/HomeStack';
import { COLOR } from '../../const/COLOR';

const BottomTab = createBottomTabNavigator();

const BottomStack = () => {
    return (
        <BottomTab.Navigator screenOptions={
            {
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: { height: 0, backgroundColor: COLOR.black }
            }}>
            <BottomTab.Screen name='HomeStack' component={HomeStack} />
            {/* <BottomTab.Screen name='Home1' component={Home} />
            <BottomTab.Screen name='Home2' component={Home} />
            <BottomTab.Screen name='Home3' component={Home} />
            <BottomTab.Screen name='Home4' component={Home} /> */}
        </BottomTab.Navigator>
    )
}

export default BottomStack
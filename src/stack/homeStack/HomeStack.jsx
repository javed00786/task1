import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/home/Home';
import Detail from '../../screens/detail/Detail';

const HomeTab = createNativeStackNavigator();
const HomeStack = () => {
    return (
        <HomeTab.Navigator screenOptions={{ headerShown: false }}>
            <HomeTab.Screen name='home' component={Home} />
            <HomeTab.Screen name='detail' component={Detail} />
        </HomeTab.Navigator>
    )
}

export default HomeStack
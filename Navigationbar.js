import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//importing files
import HomeScreen from "./HomeScreen";
import MyCartScreen from "./MyCartScreen";
import ProfileScreen from "./ProfileScreen";

//Screen names
const homeName = "Explore Cazataa !";
const myCartName = "My Cart";
const profileName = "Setting";

const Tab = createBottomTabNavigator();

function Navigationbar() {
  return (
    
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'fast-food' : 'fast-food-outline';

            } else if (rn === myCartName) {
              iconName = focused ? 'restaurant' : 'restaurant-outline';

            } else if (rn === profileName) {
              iconName = focused ? 'cog' : 'cog-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        ScreenOptions={{
          activeTintColor: 'tomato',
          InactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { display: "flex"},
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={myCartName} component={MyCartScreen} />
        <Tab.Screen name={profileName} component={ProfileScreen} options={{headerShown: false}} />

      </Tab.Navigator>
    
  );
}
export default Navigationbar;
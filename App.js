import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navigationbar from "./Navigationbar";
import Productdetails1 from "./Productdetails1";
import Productdetails2 from "./Productdetails2";
import Productdetails3 from "./Projectdetails3";
import Productdetails4 from "./Projectdetails4";
import Productdetails5 from "./Projectdetails5";
import Productdetails6 from "./Productdetails6"; 
import MenuScreen from "./MenuScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Navigationbar" 
        component={Navigationbar} 
        options={{headerShown: false}}
        />

        <Stack.Screen 
        name="Productdetails1" 
        component={Productdetails1} 
        options={{headerShown:false}}
        />

        <Stack.Screen 
        name="Productdetails2" 
        component={Productdetails2} 
        options={{headerShown:false}}
        />

        <Stack.Screen 
        name="Productdetails3" 
        component={Productdetails3} 
        options={{headerShown:false}}
        />
        <Stack.Screen 
        name="Productdetails4" 
        component={Productdetails4} 
        options={{headerShown:false}}
        />

        <Stack.Screen 
        name="Productdetails5" 
        component={Productdetails5} 
        options={{headerShown:false}}
        />

        <Stack.Screen 
        name="Productdetails6" 
        component={Productdetails6} 
        options={{headerShown:false}}
        />

        <Stack.Screen 
        name="MenuScreen" 
        component={MenuScreen} 
        options={{headerShown:false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}




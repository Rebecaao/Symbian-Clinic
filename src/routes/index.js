import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Home from "../pages/home";
import Register from "../pages/register";

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false}}
            />
            
            <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false}}
            />
        </Stack.Navigator>
    )
}
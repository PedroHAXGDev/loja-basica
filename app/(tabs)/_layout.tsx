import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome"

export default function TabLayout (){
    return(
        <Tabs>
            <Tabs.Screen 
            name="home"
            options={{
                title: 'Inicio',
                headerShown: false ,
                tabBarIcon:({color}) => <FontAwesome size={28} name="home" color={color}/>
            }}
            />

            <Tabs.Screen 
            name="categories"
            options={{
                title: 'Categorias',
                tabBarIcon:({color}) => <FontAwesome size={28} name="filter" color={color}/>
            }}
            />

            <Tabs.Screen 
            name="about"
            options={{
                title: 'Sobre Mim',
                tabBarIcon:({color}) => <FontAwesome size={28} name="user" color={color}/>
            }}
            />

            <Tabs.Screen 
            name="menu"
            options={{
                title: 'Menu',
                tabBarIcon:({color}) => <FontAwesome size={28} name="list" color={color}/>
            }}
            />

        </Tabs>
    )
}
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Image, Text, ImageBackground} from "react-native";
import { Button } from "../components/button";
import { router } from "expo-router";

export default function Screen(){
    const Start = () => {
        router.replace('/home')
    }
    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground
            source={require('../assets/jungle.png')}
            style={styles.background}>
                <Image source={require('../assets/Vendedor-League-of-Legends.png')} style={styles.logo}/>

                <Text style={styles.h1}>Man's Wear</Text>
                <Text style={styles.h2}>Seu estilo você encontra aqui!</Text>
                <Button title="Começar as Compras" onPress={Start}/>
            </ImageBackground>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
    },
    background:{
        width: '100%',
        height: '107%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        width: 250,
        height: 200,
        marginBottom: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#BE5A04'
    },
    h1:{
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white',
        textAlign: 'center',
    },
    h2:{
        fontSize: 16,
        marginBottom: 10,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
})
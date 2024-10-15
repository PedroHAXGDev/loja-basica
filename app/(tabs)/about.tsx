import { View, Text, StyleSheet, Image } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Screen(){
    return(
        <View style={styles.container}>
            <View style={styles.fotodescricao}>
                <Image source={require('../../assets/lobo.png')} style={styles.img}/>

            </View>
            <Text style={styles.descricao}>Olá! Sou um programador apaixonado por criar soluções que tornam a tecnologia mais acessível
                    e eficiente. Minha jornada começou com a curiosidade de entender como as coisas funcionam e, 
                    desde então, venho me dedicando a transformar ideias em realidades digitais.</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    img:{
        width: 150,
        height: 150,
        margin: 10,
        borderRadius: 10,
    },
    fotodescricao:{
        flexDirection: 'row',
    },
    descricao:{
        margin: 10,
        width: 350,
    },
})
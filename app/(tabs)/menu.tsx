import { View, Text, StyleSheet, FlatList } from "react-native";
import { getAllProducts } from "../../services/products";
import { ProductItem } from "../../components/product-item";

export default function Screen (){
    //puxando todos os produtos.
    const products = getAllProducts();
    return(
        <View style={styles.container}>
                ki
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    list:{
        flex: 1,
        width: '100%',
        padding: 20,
    }
})
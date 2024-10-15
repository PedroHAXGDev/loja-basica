import { View, Text, StyleSheet, FlatList, ImageBackground } from "react-native";
import { getAllProducts } from "../../services/products";
import { ProductItem } from "../../components/product-item";
import { SearchBar } from "../../components/search-bar";

export default function Screen (){
    //puxando todos os produtos.
    const products = getAllProducts();
    const ItemSeparator = () => <View style={styles.separator} />;
    return(
        <View style={styles.container}>
            <SearchBar/>
            
            <FlatList
                data={products}
                renderItem={({item}) => <ProductItem data={item}/>}
                keyExtractor={item => item.id.toString()}
                style={styles.list}
                ItemSeparatorComponent={ItemSeparator}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#D4D4D4FF',
    },
    list:{
        flex: 1,
        width: '100%',
        padding: 20,
    },
    separator: {
        height: 1, // Altura da linha
        backgroundColor: '#ccc', // Cor da linha
        marginHorizontal: 5, // Margem horizontal para centralizar a linha
        marginBottom: 20,
      },    
})
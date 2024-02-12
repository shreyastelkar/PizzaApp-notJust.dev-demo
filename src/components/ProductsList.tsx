import { StyleSheet, Text, View, Image, Pressable} from 'react-native';
import Colors from 'src/constants/Colors';
import { Product } from 'src/types';
import { Link } from 'expo-router';

export const defaultPizzaImage = 
'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png'

type ProductsList = {
    product: Product;
}

const ProductsList = ({product}: ProductsList) => {
  return (
    <Link href={`/menu/${product.id}`} asChild>
        <Pressable style={styles.container}>
            <Text style={styles.my_title}> ${product.price}  </Text>
            <Image source={{ uri: product.image || defaultPizzaImage }} 
                    style={styles.image}
                    resizeMode="contain"
            />
            <Text style = {styles.price}> {product.name} </Text>
        </Pressable>
    </Link>
  )
}

export default ProductsList


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        borderRadius: 20,
    },
    image: {
      width: '100%',
      aspectRatio: 1,
    },
    my_title: {
      fontSize: 18,
      fontWeight: '600',
      marginVertical: 15,
      color: 'white',
    },
    price: {
      fontWeight: 'bold',
      color: Colors.light.tint,
    }
});

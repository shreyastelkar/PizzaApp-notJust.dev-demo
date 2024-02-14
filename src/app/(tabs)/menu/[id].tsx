import { View, Text, Image, StyleSheet} from 'react-native';
import { defaultPizzaImage } from '@/src/components/ProductsList';
import { useLocalSearchParams } from 'expo-router';
import {Stack} from 'expo-router';
import products from '@/assets/Food Ordering Asset bundle/data/products';

const sizes = ['S', 'M', 'L', 'XL'];

const product = () => {
  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <Text> Product not found </Text>;
  }

  return (
    <View>

      <Stack.Screen options={{ title: product?.name }} />
      <Image source={{ uri: product.image || defaultPizzaImage}} style={styles.image}/>

      <Text> Select Size </Text>
      {sizes.map((size) => (
        <Text key={size} > {size} </Text>
      ))}

      <Text style={styles.price}> ${product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },

});

export default product;
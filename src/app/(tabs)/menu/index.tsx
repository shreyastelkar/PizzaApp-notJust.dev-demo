import { View, FlatList } from 'react-native';
import products from '@assets/Food Ordering Asset bundle/data/products';
import ProductsList from '@/src/components/ProductsList';


export default function TabOneScreen() {
  return (

      <FlatList
        data={ products }
        renderItem={({ item }) => <ProductsList product={item} />}
        numColumns={2}
        contentContainerStyle={{gap: 10, padding: 10}}
        columnWrapperStyle={{ gap: 10}}
      />
  );
};

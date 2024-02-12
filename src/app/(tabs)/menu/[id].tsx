import { View, Text } from 'react-native';
import { styles } from '@/src/components/ProductsList';
import { useLocalSearchParams } from 'expo-router';
import {Stack} from 'expo-router';
const product = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>

      <Stack.Screen options={{ title: 'Details' + id }} />
      <Text style={styles.my_title}> product details for id: {id}</Text>
    </View>
  );
};

export default product;
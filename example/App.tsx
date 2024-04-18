import { StyleSheet, Text, View } from 'react-native';

import * as RustExpoModule from 'rust-expo-module';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>"Foobar"</Text>
      <Text>{RustExpoModule.rustAdd(10, 10)}</Text>
      <Text>{RustExpoModule.rustHelloWorld()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

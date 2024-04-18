import { StyleSheet, Text, View } from 'react-native';

import * as RustExpoModule from 'rust-expo-module';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>"Rust add 2 and 4: " {RustExpoModule.rustAdd(2, 4)}</Text>
      <Text>"String from rustHelloWorld: "{RustExpoModule.rustHelloWorld()}</Text>
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

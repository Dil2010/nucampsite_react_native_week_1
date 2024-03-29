// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// // import { NavigationContainer } from '@react-navigation/native';


// import Main from './screens/MainComponent';

// export default function App() {
//     return <Main />;
// }

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import Main from './screens/MainComponent';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
    return (
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    );
};

import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, SafeAreaView } from 'react-native';
import { DATA } from './Data';
import Row from './components/Row';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      data={DATA}
      renderItem = {({item}) => (
        <Row person={item} />
      )}>
        <StatusBar style="auto" />
      </FlatList>
    </SafeAreaView>
  );
}

/* TAPA 1
function renderItem({item}) {
  return (<Text>{item.lastname}</Text>);
}
*/

/* TAPA 2
const renderItem = ({item}) => (
  <Text>{item.lastname}</Text>
);
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

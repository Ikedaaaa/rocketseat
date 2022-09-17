import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Isso tá funcionando :D
      </Text>
      <Button title="Send 1"/>
      <Button title="Send 2"/>
      <Button title="Send 3"/>
      <Button title="Hello World"/>
      <StatusBar style="auto" backgroundColor='#093743'/>
    </View>
  );
}

interface ButtonProps{
  title: string;
}

function Button(props: ButtonProps){
  return (
    <TouchableOpacity>
      <Text>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color:'#000',
    fontSize: 24
  }
});

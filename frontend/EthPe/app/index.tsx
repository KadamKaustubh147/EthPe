import { Text, View, StyleSheet } from "react-native";

const Index = () => {
  return ( 
    <View
      style={styles.body}
    >
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#1E1E1E',
    flex:1,
    color: '#fff'
  }
})
 
export default Index;
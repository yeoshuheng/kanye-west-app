import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [currQuote, setQuote] = useState("");
  const [currLoading, setLoading] = useState(false);

  async function kanyeButAsync() {
    const resp = await fetch("https://api.kanye.rest");
    const yeWisdom = await resp.json();
    return yeWisdom.quote;
  }

  function getKanye() {
    kanyeButAsync()
      .then((q) => {setQuote(q);})
      .catch((err) => {console.log(err);})
  }

  return (
    <View style={styles.inputContainer}>
      <Image source = {require('./assets/kanye.png')} style = {styles.kanye}/>
      <Text style = {styles.paris}>Kanye Quote Generator V1.0.</Text>
      <Text style = {styles.title}>Do you want a quote from Paris?</Text>
      <InputButton title = {currLoading ? "Loading..." : "ye"} onPress = {() => {
        setLoading(true);
        getKanye();
        setLoading(false);}}></InputButton>
      <Text style = {styles.quote}> {currQuote} </Text>
    </View>
  );
}

const InputButton = ({onPress, title}) => (
  <TouchableOpacity onPress = {onPress} activeOpacity = {0.8} style = {styles.buttonContainer}>
    <Text style = {styles.buttonText}> {title} </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  quote : {
    paddingTop : 30,
    color : '#fff',
    fontWeight : "normal",
    fontSize : 20,
    fontStyle : "italic",
    paddingLeft : 20,
    paddingRight :20
  },
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#8D7B68',
    alignItems: 'center',
    justifyContent: 'center',
  },
  kanye : {
    width : 250,
    height : 250
  },
  title: {
    margin: 10,
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.1,
    lineHeight: 20,
    color : "#fff"
  },
  buttonText: {
    fontSize : 20,
    fontWeight : "bold",
    alignSelf : "center",
    color: "#8D7B68" 
  },
  buttonContainer: {
    backgroundColor: "#FFF4E0",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingLeft: 50,
    paddingRight: 50
  },
  paris : {
    color : "#fff",
    paddingTop : 30,
    fontWeight : "500"
  }
});

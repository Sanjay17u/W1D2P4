import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'



function App() {

  const [isHave, setIsHave] = useState(true)
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState("");


  const countHandler = (text: any) => {
    if (text.length > inputValue.length) {

      setCount(() => count + 1)

    } else if (text.length < inputValue.length) {

      setCount(() => count - 1)

    }
    
    if (text.length === 0 || text.length >= 20) {
      setIsHave(false)
    } else {
      setIsHave(true)
    }

    setInputValue(text)

  }

  const clearCount = () => {
    setCount(0)
    setInputValue('')
    setIsHave(true)
  }

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.countText}> { count } </Text>    
        <TextInput editable={ isHave } value={inputValue} onChangeText={ (text) => countHandler(text) } style={styles.InputCounter} />  
        <Button onPress={ clearCount } disabled={ isHave } title='Clear Text'/>  
    </View>
    </>
  )
}



export default App


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  countText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '700',

  },

  InputCounter: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '80%',
    borderRadius: 5,
    marginVertical: 30,
    color: 'white'
  }
})
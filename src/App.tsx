import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren, useState } from 'react'
import one from "../assets/one.png"
import two from "../assets/two.png"
import three from "../assets/three.png"
import four from "../assets/four.png"
import five from "../assets/five.png"
import six from "../assets/six.png"


// better approch 
type DiceProps = PropsWithChildren<{
  // it verifies the image url source more error checkiing
 imageUrl : ImageSourcePropType
}>

// with this we can ahndle muliple image like by deflut which we can render and then we can update it 
const Dice = ({imageUrl} : DiceProps):JSX.Element=>{
  return (

<View>
  <Image  style={styles.diceimage} source={imageUrl} />
</View>
  );


}

const App = () => {
  // we explicitely say the type of the state
  const [diceimage , setdiceimage] = useState<ImageSourcePropType>(one);

  const rollthedice = ()=>{
    let random = Math.floor(Math.random() * 6) + 1;
    switch (random) {
      case 1:
        setdiceimage(one)
        break;
      case 2:
        setdiceimage(two)
        break;
      case 3:
        setdiceimage(three)
        break;
      case 4:
        setdiceimage(four)
        break;
      case 5:
        setdiceimage(five)
        break;
      case 6:
        setdiceimage(six)
        break;
      default:
        break;
    }

  }
  return (
    <View style={styles.conatiner}>
      <Dice imageUrl={diceimage} />
      <Pressable style={styles.btn} onPress={rollthedice}>
        <Text>Rool the Dice!!!</Text></Pressable>
      
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  diceimage : {
    width: 100,
    height: 100,
    


 
  }
  ,
  btn : {
    backgroundColor: "lightblue",
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
  }
})
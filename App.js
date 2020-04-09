import React, {
    useState
} from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
export default function App() {
    const [color, setColor] = useState(getRandomColor);
    changeColor = ()=>{
        setColor(getRandomColor)
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style = {{...styles.colorBox,backgroundColor:color}} onPress = {changeColor}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    colorBox: {
        //backgroundColor : 'red',
        width: 300,
        height: 300,
    },

});
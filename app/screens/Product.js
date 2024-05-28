import {View, Text, StyleSheet, Button} from 'react-native'

export const Product = ({navigation}) =>{
    return <View style={styles.container}> 
        <Text>Bienvenidos a mi tienda, soy Juan Yanangomez</Text>
        <Text style={styles.colorProducto1}>Doritos</Text>
        <Text style={styles.colorProducto2}>Chifles</Text>
        <Text style={styles.colorProducto3}>Cristal beer</Text>
        <Button
            title='HOME'
            onPress={()=>{
                navigation.navigate('Wellcome_Juan_Yanangomez');
            }}
        />
    </View>

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightslategrey',
      alignItems: 'center',
      justifyContent: 'center',
    },
    colorProducto1:{
        color: "brown",
        marginBottom:10,
        backgroundColor: 'chartreuse',
    },
    colorProducto2:{
        color: "chocolate",
        marginBottom:10,
        backgroundColor: 'chartreuse',
    },
    colorProducto3:{
        color: "darkblue",
        marginBottom:10,
        backgroundColor: 'chartreuse',
    }
  });
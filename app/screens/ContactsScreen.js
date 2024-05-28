import {View, Text, StyleSheet, Button} from 'react-native'

export const Contacts = ({navigation}) => {
    return <View style={styles.container}>
        <Text >Bienvenido a mi aplicacion, soy JeanPierre</Text>
        <Text style={styles.contacto1}>Pedro Sanchez</Text>
        <Text style={styles.contacto2}>Felix Valdivieso</Text>
        <Text style={styles.contacto3}>Jose Serrano</Text>
        <Button
            title='HOME'
            onPress={()=>{
                navigation.navigate('HomeNav');
            }}
        />
    </View>

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
    contacto1: {
       
        color: '#141823'
      },
      contacto2: {
       
        color: 'yellow'
      },
      contacto3: {
       
        color: 'black'
      }
  });
  
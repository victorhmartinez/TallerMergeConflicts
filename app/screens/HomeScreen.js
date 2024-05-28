import { View, Text, StyleSheet, Button } from 'react-native'

export const Home = ({ navigation }) => {
    return <View style={styles.container}>
        <Text>Bienvenido a mi apliacion, soy Victor Martinez</Text>
        <Text>Frase cualquiera .... XD</Text>
        <View style={styles.botones}>

            <View style={styles.boton1}>
                <Button
                color='red'
                    title='CONTACTS'
                    onPress={() => {
                        navigation.navigate('ContactsNav');
                    }}
                />
            </View>



            <Button
            color='red'
                title='PRODUCTOS'
                onPress={() => {
                    navigation.navigate('ProductNav');
                }}
            />

        </View>

    </View>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botones: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,

    },
    boton1: {

        marginRight: 60,
        
    },
});

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';

export default function Welcome(){
const navigation = useNavigation();

    return(
        <View style={styles.container}>
            
        <View style={styles.containerLogo}>
            <Animatable.Image
               animation="flipInY"
               source={require('../../assets/LOGO.png')}
               style={{width: '100%'}}
               resizeMode='contain'
            />
            <Text style={styles.logotext}>R A B B I T</Text>
        </View>



        <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.title}>Aprenda informática em qualquer lugar!</Text>

            <TouchableOpacity
            style={styles.button}
            onPress={ () => navigation.navigate('SignIn')}
            >
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>

        </Animatable.View>

        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: "white"
    },
    containerLogo: {
        flex: 2,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    containerForm: {
        flex: 1,
        backgroundColor: "#F4BC86",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '3%',
        paddingEnd: '3%'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },
    text: {
        color: "#a1a1a1",
    },
    button: {
        position: "absolute",
        backgroundColor: "grey",
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: "center",
        bottom: '15%',
        alignItems: "center",
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: "#FFF",
        fontWeight: 'bold',

    },
    logotext: {
        fontSize: 35,
        fontWeight: 'bold',
    }

})
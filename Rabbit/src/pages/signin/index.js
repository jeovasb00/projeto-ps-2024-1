import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

import * as Animatable from 'react-native-animatable';

export default function SignIn() {
    return(
        <View style={styles.container}>
            
            <Animatable.View animation="fadeInUp" style={styles.containerHeader}>
                <Animatable.Image
                animation="fadeInUp"
                source={require('../../assets/LOGO.png')}
                style={{width: '100%'}}
                resizeMode='contain'
                />
                    <Animatable.Text animation="fadeInUp" style={styles.message}>R A B B I T</Animatable.Text >

            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <TextInput
                    placeholder = 'Email'
                    style={styles.input}
                />
            
                <TextInput
                    secureTextEntry = {true}
                    placeholder = 'Senha'
                    style={styles.input}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>

            </Animatable.View>



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:2,
        backgroundColor: "white",
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center',
    },
    containerForm: {
        backgroundColor: 'white',
        flex: 3,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
        alignContent: 'center',
    },
    input: {
        borderRadius: 10,
        borderWidth: 1,
        height: 50,
        marginBottom: 20,
        fontSize: 16,
        width: '90%',
        alignSelf: 'center',
        fontSize: 20,
        paddingLeft: '5%',
        textAlignVertical: 'center',
        backgroundColor: 'lightgrey',
    },
    button: {
        backgroundColor: '#F4BC86',
        width: '40%',
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1,
        paddingVertical: 15,
        marginTop: 14,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center',
    },
    registerText: {
        color: '#a1a1a1',
    }


})
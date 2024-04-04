import { View, Text, Image, StyleSheet, TouchableOpacity
 } from 'react-native'
import React from 'react'
import colors from '../Common/colors';
import { AntDesign } from '@expo/vector-icons';

const LoginImage = require("../../assets/images/login.png")

export default function Login() {

  return (
    <View>
    <View className='rounded-full h-10 w-10 align-center flex '>
        <Image source={LoginImage}  />
    </View>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to CodeBox</Text>
        <Text style={styles.loginText}>Login/SignUp</Text>
        <View style={styles.button}>
            <AntDesign name='google' size={20} color='white' />
            <Text style={{color: 'white'}}>Sign In with Google</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        marginTop: -20,
        backgroundColor: '#fff',
        borderRadius:30,
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center'

    },
    welcomeText: {
        fontSize: 35, 
        textAlign: 'center',
        borderRadius: 16,
        fontWeight:'bold',
    },
    loginText: {
        textAlign: 'center',
        marginTop: 36,
        fontSize: 24,
    },
    button: {
        backgroundColor: colors.primary,
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 30,
        borderRadius: 8,
        fontSize: 24,
    }
})
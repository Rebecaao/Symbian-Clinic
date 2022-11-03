import { View,
         Text,
        StyleSheet,
        Image,
        TouchableOpacity } from 'react-native'
import Button from '../../components/button';
import React from 'react'
import COLORS from '../../const/color';
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'


export default function Home() {
    const navigation = useNavigation();

    return (
    <View style={styles.container}>
     
    <View style={styles.containeLogo}>
        <Animatable.Image 
        animation="flipInY"
        source={require('../../assets/logo.png')}
        resizeMode="contain"
       />    
    </View>

    <Animatable.View delay={800} animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Seja Bem-vindoa Symbian Clinic</Text>
        
        <Text style={styles.text}>Faça seu cadastro para começar</Text>

        <Button title="Cadastrar-me" 
        onPress={() => navigation.navigate('Register')}/>
    </Animatable.View>

        

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
      

    },
    containeLogo:{
        justifyContent:'center',
        alignItems:'center',
        flex:2
    },
    containerForm:{
        alignItems: 'center',
        paddingHorizontal: "5%",
        backgroundColor: "#581845",
        height: '100%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        flex:1
    
    }, 
    title:{
        fontSize:18,
        color: COLORS.white,
        marginVertical:20
    },
    text:{
        color: COLORS.gray,
        fontSize:15,
    
}

})
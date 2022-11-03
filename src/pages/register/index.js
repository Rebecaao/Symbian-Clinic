import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'
import Input from '../../components/input'

export default function Register() {
  return (
    <View style={style.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={style.containerHeader}>
        <Text style={style.title}></Text>
      </Animatable.View>

        <Text> Dados do paciente</Text>
      <Animatable.View animation="fadeInUp" >

      <Input label="Nome"
            iconName="account"
            onChangeText={(text) => handlerOnChange(text, 'titulo')} 
            onFocus={() => {handlerErrors(null , 'titulo')}} />

             <Input label="Telefone"
            iconName="phone-in-talk"
            onChangeText={(text) => handlerOnChange(text, 'titulo')} 
            
            onFocus={() => {handlerErrors(null , 'titulo')}} />

     <Input label="Celular"
            iconName="cellphone"
            onChangeText={(text) => handlerOnChange(text, 'titulo')} 
            onFocus={() => {handlerErrors(null , 'titulo')}} />

        
<Input label="Email"
            iconName="email"
            onChangeText={(text) => handlerOnChange(text, 'titulo')} 
            
            onFocus={() => {handlerErrors(null , 'titulo')}} />

            

            
      </Animatable.View>
    </View>
  )
}

const style = StyleSheet.create({
    container:{

    }
})
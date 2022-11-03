import React from "react";
import {TouchableOpacity, StyleSheet, Text} from"react-native";


const Button = ({title, onPress=()=>{}})=>{
    return(
        <TouchableOpacity style={estilos.button} activeOpacity={0.5} onPress={onPress}>
            <Text style={estilos.title}>{title}</Text>
        </TouchableOpacity>
    );
    
}

const estilos = StyleSheet.create({
    button:{
    height:55,
    width: '50%',
    justifyContent:"center",
    alignItems:"center",
    marginVertical:20,
    backgroundColor: "#000",
    borderRadius: 120
    },
    title:{
        fontWeight: "bold",
        fontSize:18,
        color: "#FFF"
        
    }
});

export default Button;
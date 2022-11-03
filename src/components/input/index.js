import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

import COLORS from "../../const/color";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";


const Input = ({ label, iconName, errors, onFocus=()=>{}, value ,...props }) => {
    return (
        <View style={estilos.formContainer}>
            <Text style={estilos.inputLabel}>
                {label}
            </Text>

            <View style={[estilos.inputContainer , {borderColor: errors  ? COLORS.red  : COLORS.darkBlue }]}>
                <Icon name={iconName} style={estilos.icon}/>
                <TextInput
                    style={estilos.textInput}
                    autoCorrect={false}
                    onFocus={()=>{onFocus()}}
                    {...props}
                    value={value}
                />
            </View>

            <Text>
                {errors}
            </Text>
        </View>


    )
}

const estilos = StyleSheet.create({

    formContainer: {
        marginBottom: 20,
    },
    inputLabel: {
        marginVertical: 5,
        fontSize: 15,
        color: COLORS.blue
    },
    inputContainer: {
        height: 55,
        backgroundColor: COLORS.light,
        flexDirection: "row",
        paddingHorizontal: 15,
        borderWidth: 0.5,
        alignItems: "center",
        width: '80%'
    },
    textInput: {
        color: COLORS.darkBlue,
        flex: 1
    },
    icon:{
        fontSize:22,
        color:COLORS.darkBlue,
        marginRight:10,
    },

});
export default Input;
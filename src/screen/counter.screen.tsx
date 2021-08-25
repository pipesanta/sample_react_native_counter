import React, { useState, useEffect } from "react";
import { Button, Text, TouchableOpacity, View, StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    counterText: {
        textAlign: 'center',
        fontSize: 40
    },
    btnInc: {
        backgroundColor: 'green',
        borderRadius: 100
    },
    btnDec: {
        backgroundColor: 'red',
        borderRadius: 100
    }
});


export const CounterScreenComponent = () => {

    const [counter, setCounter] = useState(5);

    return (
        <View style={styles.container}>

            <Text style={styles.counterText} >
                Contador: {counter}
            </Text>



            <TouchableOpacity

                onPress={() => setCounter(counter - 1)}
            >
                <View style={styles.btnDec} >
                    <Text>-1</Text>
                </View>

            </TouchableOpacity>

            <TouchableOpacity onPress={() => setCounter(counter + 1)} >
                <View style={styles.btnInc} >
                    <Text>+1</Text>
                </View>

            </TouchableOpacity>







        </View>
    );
}
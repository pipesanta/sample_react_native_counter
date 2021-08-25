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
        borderRadius: 100,
        width: 60,
        height: 60,
        justifyContent: 'center'
    },
    btnDec: {
        backgroundColor: 'red',
        borderRadius: 100,
        width: 60,
        height: 60,
        justifyContent: 'center'
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    fabToLeft: {
        position: 'absolute',
        bottom: 20,
        left: 20
    },
    fabToRight: {
        position: 'absolute',
        bottom: 20,
        right: 20
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
                style={styles.fabToLeft}
                onPress={() => setCounter(counter - 1)}
            >
                <View style={styles.btnDec} >
                    <Text style={styles.fabText} >-1</Text>
                </View>

            </TouchableOpacity>


            <TouchableOpacity style={styles.fabToRight} onPress={() => setCounter(counter + 1)} >
                <View style={styles.btnInc} >
                    <Text style={styles.fabText} >+1</Text>
                </View>

            </TouchableOpacity>



        </View>
    );
}
import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { FabButton } from '../components/FabButton';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    counterText: {
        textAlign: 'center',
        fontSize: 40
    }
});


export const CounterScreenComponent = () => {

    const [counter, setCounter] = useState(5);

    return (
        <View style={styles.container}>

            <Text style={styles.counterText} >
                Contador: {counter}
            </Text>

            <FabButton
                title="-1"
                position="left"
                onClick={() => setCounter(counter - 1)}
            />

            <FabButton
                title="+1"
                position="right"
                onClick={() => setCounter(counter + 1)}
            />

        </View>
    );
}
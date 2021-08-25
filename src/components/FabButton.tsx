import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";


const styles = StyleSheet.create({
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


interface Props {
    title: string;
    position: 'right' | 'left';
    onClick: () => void;
}


export const FabButton = (props: Props) => {

    const { title, position, onClick } = props;

    return (
        <TouchableOpacity
            style={(position === 'left')
                ? styles.fabToLeft
                : styles.fabToRight
            }
            onPress={() => onClick()} >
            <View style={position === 'left'
                ? styles.btnDec
                : styles.btnInc
            } >
                <Text style={styles.fabText}> {title} </Text>
            </View>

        </TouchableOpacity>
    );
}
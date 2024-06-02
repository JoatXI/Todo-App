import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.leftItem}>
                <TouchableOpacity style={styles.board}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circle}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#3d5af1',
        padding: 20,
        borderRadius: 15,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between'
    },
    leftItem: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    itemText: {
        color: '#fff',
        fontSize: 20
    },
    board: {
        width: 25,
        height: 25,
        borderRadius: 5,
        backgroundColor: '#22d1ee',
        marginRight: 20
    },
    circle: {
        width: 15,
        height: 15,
        borderRadius: 10,
        backgroundColor: '#fff'
    },
});

export default Task;
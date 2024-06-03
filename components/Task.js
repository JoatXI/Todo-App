import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { faBarsProgress } from "@fortawesome/free-solid-svg-icons/faBarsProgress";

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.leftItem}>
                <TouchableOpacity style={styles.board}>
                    <FontAwesomeIcon icon={faBarsProgress} size={20} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View>
                <FontAwesomeIcon icon={faTrash} size={20} color="#22d1ee" />
            </View>
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
        fontSize: 20,
        fontWeight: 'bold'
    },
    board: {
        marginRight: 20
    }
});

export default Task;
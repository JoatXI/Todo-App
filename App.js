import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      {/* creates the title */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.title}>Today's Tasks</Text>

        {/* this holds our tasks created in components folder */}
        <View style={styles.items}>
          <Task text={"Beans"} />
          <Task text={"Bread"} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2f3f5',
  },
  tasksWrapper: {
    paddingTop: 50,
    paddingHorizontal: 20
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0e153a',
    textAlign: 'center',
  },
  items: {
    marginTop: 30,
  },
});

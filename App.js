import { React, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons/faCircleCheck';

export default function App() {

  const [task, setTask] = useState();
  const [taskItem, setTaskItem] = useState([]);

  const addTask = () => {
    Keyboard.dismiss();
    setTaskItem([...taskItem, task]);
    setTask(null);
  }

  const deleteTask = (index) => {
    let deleteItem = [...taskItem];
    deleteItem.splice(index, 1);
    setTaskItem(deleteItem);
  }

  return (
    <View style={styles.container}>
      {/* creates the title */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.title}>Today's Tasks</Text>

        {/* this holds our tasks created in components folder */}
        <View style={styles.items}>
          {taskItem.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={ () => deleteTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            )
          })}
        </View>
      </View>

      <KeyboardAvoidingView behavior={Platform.OS == "android" ? "height" : "padding"} style={styles.inputWrapper}>
        <TextInput style={styles.input} placeholder={"Add a task"} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={ () => addTask() }>
          <View style={styles.iconWrapper}>
            <FontAwesomeIcon icon={faCircleCheck} size={55} style={styles.icon} />
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
  inputWrapper: {
    position: 'absolute',
    bottom: 20,
    paddingHorizontal: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center'
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 50,
    borderWidth: .5,
    borderColor: '#0e153a',
    width: '75%',
    fontSize: 20
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    color: '#3d5af1',
    backgroundColor: '#fff',
    borderRadius: 80
  }
});

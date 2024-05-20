


import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Button, StyleSheet,TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addtask, updatetask, deletetask } from '../services/actions/actions';

const Todolist = () => {
  const [task, setTask] = useState('');
  const [editstatus, setEditStatus] = useState(-1);
  const tasks = useSelector(state => state.task);
  const dispatch = useDispatch();

  const handleEdit = (index) => {
    const taskToEdit = tasks.tasks[index];
    setTask(taskToEdit);
    setEditStatus(index);
  };

  const handleDelete = (index) => {
    dispatch(deletetask(index));
  };

  const handleAdd = () => {
    if (editstatus !== -1) {
      dispatch(updatetask(editstatus, task));
      setEditStatus(-1);
    } else {
      dispatch(addtask(task));
    }
    setTask('');
  };

  const renderitem = ({ item, index }) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.taskText}>{item}</Text>
        <View style={styles.buttonContainer}>
          {/* <Button title={'Edit'} onPress={() => handleEdit(index)} /> */}
          <TouchableOpacity 
                style={styles.editButton} 
                onPress={()=> handleEdit(index)}> 
                <Text style={styles.addButton}> 
                    Edit
                </Text> 
        </TouchableOpacity> 
          <TouchableOpacity 
                style={styles.editButton} 
                onPress={() => handleDelete(index)}> 
                <Text style={styles.addButton}> 
                    Delete
                </Text> 
        </TouchableOpacity> 
          {/* <Button title={'Delete'} onPress={() => handleDelete(index)} /> */}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Daily Task Manager!</Text>
      <Text style={styles.subtitle}>To Do List</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter the task"
        value={task}
        onChangeText={text => setTask(text)}
      />
       <TouchableOpacity 
                style={styles.addButton} 
                onPress={handleAdd}> 
                <Text style={styles.addButton}> 
                    {editstatus !== -1 ? "Update Task" : "Add Task"} 
                </Text> 
        </TouchableOpacity> 
      <Text style={styles.listTitle}>Your List:</Text>
      <FlatList
        data={tasks.tasks}
        renderItem={renderitem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
  },
  title: {
    fontSize:24,
    fontWeight:'bold',
    textAlign: 'center',
    color:'white'
  },
  subtitle: {
    color:'white',
    textAlign:'center',
    fontSize:18,
    marginTop:12
  },
  input: {
    color:'black',
    backgroundColor:'white',
    marginTop:10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    
  },
  addButton: {
    backgroundColor: '#7FFFD4',  
    borderRadius: 5, 
    marginBottom: 5,
    color:'black', 
    textAlign:'center',
    fontWeight:'bold',
    justifyContent:'center'
  },
  editButton: {
    margin:5,
    textAlign:'center',
    fontWeight:'bold',
    justifyContent:'center',
    width:50
  },
  listTitle: {
    color:'white',
    fontSize: 16,
    textAlign:'center',
    fontWeight:'bold',
    marginTop:15,
    marginBottom:10


  },
  itemContainer: {
    flexDirection:'row',
    justifyContent:'space-between',
    borderWidth:2,
    borderColor:'grey',
    textAlignVertical:'center'
  },
  taskText: {
    color:'white',
    fontSize:18,
    margin:12,
    fontWeight:'bold'
    

  },
  buttonContainer: {
    flexDirection:'row',
    margin:10
  },
});

export default Todolist;

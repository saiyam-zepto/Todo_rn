import React from 'react';
import {useState} from 'react';
import {View, Text, TextInput, FlatList, Button} from 'react-native';

const Todolist = () => {
  const [task, setTask] = useState('');
  const [editstatus, setEditStatus] = useState(-1);
  // const changeText = (text: any) => {
  //   setTask(text);
  // };

  const handleEdit = (index) => {
    const taskToEdit = collection[index];
    setTask(taskToEdit);
    setEditStatus(index);


  };

  const handleDelete = (index) => {
    const updatedTasks = [...collection];
    updatedTasks.splice(index, 1);
    setCollection(updatedTasks);
  };
  const [collection, setCollection] = useState<string[]>([]);
  const renderitem = ({item, index}) => {
    return (
      <View>
        <Text>{item}</Text>
        <View>
          <Button title={'Edit'} onPress={() => handleEdit(index)} />
          <Button title={'Delete'} onPress={() => handleDelete(index)} />
        </View>
      </View>
    );
  };

  const handleAdd = () => {
    if (editstatus !== -1) {
      const updatedCollection = [...collection];
      const x = task;
      updatedCollection[editstatus] = x;
      setCollection(updatedCollection);
      setEditStatus(-1);
    } else {
      setCollection([...collection, task]);
    }
    setTask('');
  };

  return (
    <View>
      <Text> Your Daily Task Manager </Text>
      <Text> To Do List</Text>
      <TextInput
        placeholder="Enter the task"
        value={task}
        onChangeText={text => setTask(text)}
      />
      <Button
        title={editstatus !== -1 ? 'Update task' : 'Add Task'}
        onPress={handleAdd}
      />

      <Text>Your List :- </Text>
      <FlatList
        data={collection}
        renderItem={renderitem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Todolist;

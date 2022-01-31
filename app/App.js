import React, { useState } from 'react';
import { Entypo } from '@expo/vector-icons';

import { Text, View, ScrollView } from 'react-native';
import styles from './App.style';
import data from '../data/Todos'

export default function App() {

  const [allTodos, setAllTodos] = useState(data);
  const [todosDone , setTodosDone] = useState([]);
  //Set up all the states we need


  function arraymove(arr, fromIndex, toIndex) {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
  };
  //Set up a function to move an element inside an array

  const todoView = allTodos.map((todo) => {
  //Set up a map to loop all the todos from "data"

    const onClickDone = () => {
      setTodosDone(todosDone.concat(todo));
      arraymove(allTodos, allTodos.indexOf(todo), allTodos.length);
    }
    //Set up a function to push the todos done in the array "todosDone" and replace it at the end of the array "allTodos"

    const onClickUnDone = () => {
      setTodosDone(todosDone.filter(element => element !== todo));
      arraymove(allTodos, allTodos.indexOf(todo), 0);
    }
    //Set up a function to remove the todos undone from the array "todosDone" and replace it at the first place of "allTodos"

    const onClickDelete = () => {
      setAllTodos(allTodos.filter(element => element !== todo));
    }
    //Set up a function to remove the todo clicked from the array "allTodos"
    
    const todoEnd = todosDone.find(element => element === todo);
    //Set up a const who tried to find if a todo is in the array "todosDone" or not
    return (
      <View key={todo.title}>
        {todoEnd ? 
        <View style={styles.todo}>
          <Text style={styles.todoTextDone} >{todo.title}</Text>
          <View style={styles.todoIcons} >
            <Entypo onPress={onClickUnDone} name="check" size={22} color="rgba(60, 179, 113, 1)" />
            <Entypo onPress={onClickDelete} name="cross" size={22} color="rgba(255, 0, 0, 1)" />
          </View>
        </View>
      : null}
        {!todoEnd ? 
        <View style={styles.todo}>
          <Text style={styles.todoText} >{todo.title}</Text>
          <View style={styles.todoIcons} >
            <Entypo onPress={onClickDone} name="check" size={22} color="rgba(220, 218, 224, 1)" />
            <Entypo onPress={onClickDelete} name="cross" size={22} color="rgba(255, 0, 0, 1)" />
          </View>
        </View>
      : null}
      </View>
    )
  });


  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>TodoList</Text>
        {todoView}
      </ScrollView>
    </>
  );
}
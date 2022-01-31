import React, { useState } from 'react';

import { Text, View, ScrollView } from 'react-native';
import styles from './App.style';
import data from '../data/Todos'

export default function App() {

  const [allTodos, setAllTodos] = useState(data);
  //Set up all the states we need

  const todoView = allTodos.map((todo) => {
  //Set up a map to loop all the todos from "data"

    return (
      <View key={todo.title}>
        <View style={styles.todo}>
          <Text style={styles.todoText} >{todo.title}</Text>
        </View>
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
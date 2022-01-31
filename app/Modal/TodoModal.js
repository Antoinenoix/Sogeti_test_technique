import React, { useState } from 'react';

import { Entypo } from '@expo/vector-icons';
import { Text, View, Pressable, Modal, TextInput } from 'react-native';

import styles from './TodoModal.style';

export default function TodoModal({ setModal, modal, description, title, allTodos, setAllTodos }) {

  const [text, setText] = useState(description);
  //Set up the textinput state with the description
    
  const validModal = () => {
    if ((text !== description) && (text !== '')) {
      setAllTodos(allTodos.filter(element => element !== allTodos.find(element => element.title === title)));
      setAllTodos(allTodos => [{title: title, description: text}, ...allTodos]);
    }
    setText('');
    setModal(false);
  };
  //Set up a function to validate the textinput and bring it to the description and close the modal

  const closeModal = () => {
    setText('');
    setModal(false);
  };
  //Set up a function to close the modal and nothing else

  return (
    <Modal
      animationType="fade"
      visible={modal}
      onTodosClose={() => {
        setModal(!modal);
      }}
    >
        <View style={styles.modal}>
          <Text style={styles.todoModalTitle}>{title}</Text>
              <View style={styles.todoModalBar} />
              <View style={styles.todoDetail}>
                  <View style={styles.todoDetailBox}>
                    <TextInput
                      style={styles.todoLightText}
                      maxLength={60}
                      multiline
                      numberOfLines={3}
                      placeholder={description || "Décrire la tâche"}
                      onChangeText={(text) => setText(text)}
                    />
                  </View>
              </View>
          <Pressable style={styles.buttonClicked} onPress={validModal}>
            <Text style={styles.buttonClickedText}>Valider</Text>
          </Pressable>
        </View>
      <Pressable style={styles.modalClose} onPress={closeModal}>
        <Entypo name="cross" size={30} color="rgba(220, 218, 224, 1)" />
      </Pressable>
    </Modal>
  );
}

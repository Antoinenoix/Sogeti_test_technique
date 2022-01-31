import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      justifyContent: 'center',
      paddingTop: 50,
      marginHorizontal: '10%',
      width: '80%',
    },
    todo: {
      marginVertical: 10,
      flexDirection: 'row',
    },
    todoTextDone: {
      textDecorationLine: "line-through",
      color: 'lightgrey',
    },
    todoIcons: {
      marginLeft: 'auto',
      flexDirection: 'row',
      width: '40%',
      justifyContent: 'space-between',
    },
    textInput: {
      padding: 15,
      backgroundColor: '#fafafa',
      width: '100%',
      borderRadius: 10,
      marginBottom: 10,
    },
    public: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      backgroundColor: 'lightgreen',
      borderRadius: 10,
    },
    publicText: {
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    clear: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      backgroundColor: 'red',
      borderRadius: 10,
      alignSelf: 'flex-end',
    },
    clearText: {
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 30,
    },
    title: {
      alignSelf:'center',
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: 10,
    }
  });
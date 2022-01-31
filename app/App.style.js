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
    title: {
      alignSelf:'center',
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: 10,
    }
  });
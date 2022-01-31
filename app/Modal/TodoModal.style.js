import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 50,
        paddingVertical: 100,
      },
      todoLightText: {
        color: 'black',
        fontSize: 12,
      },
      todoDetailBox: {
        paddingHorizontal: 8,
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: "lightgrey",
        width: '100%',
        height: 100,
      },
      todoDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8,
      },
      todoModalTitle: {
        color: "black",
      },
      todoModalBar: {
        marginVertical: 16,
        backgroundColor: "lightblue",
        width: 32,
        height: 1,
      },
      modalClose: {
        position: 'absolute',
        top: 16,
        right: 16,
      },
      buttonClicked: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: 'lightgreen',
        borderRadius: 10,
        alignSelf: 'flex-end',
      },
      buttonClickedText: {
        color: 'white',
        fontWeight: 'bold',
      },
  });
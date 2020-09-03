import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, AppRegistry, TouchableOpacity, Alert, Modal, TouchableHighlight} from 'react-native';

const App = (props: any) => {
    const [count, setCount] = useState<number>(0);
    const [modalVisible, setModalVisible] = useState(false);
    const onPress = () => {
        setModalVisible(true);
        setCount(oldCount => oldCount + 1)
    };

    return (
        <View style={styles.newView}>
            <View style={styles.newerView}>
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.textStyleModal}>Count: <Text style={{color: 'black'}}>{count}</Text></Text>

                        <TouchableOpacity
                            style={styles.ModalButton}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text style={{color: 'white'}}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
            >
            <Text style={styles.textStyle}> #crushingit</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
            </View>
        </View>
    );
}



export default  App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
    centeredView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "flex-start",
        alignItems: "stretch",
        marginTop: 22
    },
    modalView: {
        margin: 100,
        backgroundColor: "violet",
        borderRadius: 20,
        padding: 10,
        justifyContent:'space-evenly',
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    button: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        borderColor: 'blue',
        backgroundColor: 'red',
        borderWidth: 5,
        padding: 5,
        borderRadius: 20,
    },
  newView:{
   flex: 1,
   backgroundColor: 'red',
   padding: 20
  },
    newerView:{
        flex: 1,
        backgroundColor: 'black',
        padding: 20
    },
  textStyle:{
    color: 'white',
    fontFamily: 'American Typewriter',
    fontSize: 40,
  },
    textStyleModal:{
        color: 'yellow',
        fontFamily: 'American Typewriter',
        fontSize: 25,
        marginBottom: 20
    },
    ModalButton:{
        backgroundColor: "red" ,
        borderWidth:1 ,
        borderColor:'red',
        borderRadius:5 ,
        paddingTop:3,
        paddingBottom:3,
        paddingHorizontal:50,
        shadowColor: '#000',
        shadowOffset: { width: 0.125, height: 0.5 },
        shadowOpacity: 0.8,
        shadowRadius: 1
    },
  view: {
    backgroundColor: 'green',

  }
});

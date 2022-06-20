import {useState} from "react";
import {Button, StyleSheet, TextInput, View, Modal, Image} from "react-native";

const GoalInput = (props) => {
    const [goal, setGoal] = useState("");

    const goalInputHandler = (text) => {
        setGoal(text);
    }

    const addGoalHandle = () => {
        props.addGoal(goal);
        setGoal("");
        props.closeModal();
    }

    return <Modal visible={props.showModal} animationType={"slide"}>
        <View style={styles.inputContainer}>
            <Image style={styles.image} source={require('./../assets/images/adaptive-icon.png')} />
            <TextInput style={styles.textInput} placeholder={"Input Goal..."} value={goal} onChangeText={goalInputHandler} />
            <View style={styles.buttonsContainer}>
                <View style={styles.button}>
                    <Button title={"Cancel"} onPress={props.closeModal} color={"#138282"} />
                </View>
                <View style={styles.button}>
                    <Button title={"Add Goal"} onPress={addGoalHandle} color={"#b180f0"} />
                </View>
            </View>
        </View>
    </Modal>;
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        padding: 16,
        backgroundColor: '#311b6b',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16,
    },
    buttonsContainer : {
        flexDirection: "row",
        marginTop: 25,
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },
    image : {
        width: 100,
        height: 100,
        margin: 20,
    }
})
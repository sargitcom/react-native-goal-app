import {StyleSheet, Text, View, Pressable} from "react-native";

const GoalItem = (props) => {
    const {id} = props.itemData;

    const deleteItemHandler = () => {
        props.onDeleteItem(id);
    }

    return <View style={styles.goalItem}>
            <Pressable
                android_ripple={{color: '#ddd'}}
                onPress={deleteItemHandler}
                style={({pressed}) => {pressed && styles.iosPressedItem}}
            >
                <Text style={styles.goalText}>{props.itemData.goal}</Text>
            </Pressable>
        </View>;
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem : {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        color: '#fff',
        padding: 8,
    },
    iosPressedItem : {
        color: 'red',
    }
})
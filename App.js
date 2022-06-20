import { Button, StyleSheet, Text, View, FlatList } from 'react-native';
import {useState} from "react";
import GoalItem from "./components/Goalitem";
import GoalInput from "./components/GoalInput";
import {StatusBar} from "expo-status-bar";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  const [goals, setGoals] = useState([]);

  const addGoal = (goal) => {
    setGoals(goals => [...goals, {id: (new Date()).getTime(), goal: goal}]);
  }

  const renderGoalItem = (itemData) => {
    return <GoalItem itemData={itemData.item} onDeleteItem={deleteGoalItemHandler} />;
  }

  const deleteGoalItemHandler = (id) => {
    setGoals(goals => goals.filter(item => item.id !== id));
  }

  const showModalHandler = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
      <>
        <StatusBar style={"light"}/>
          <View style={styles.appContainer}>
            <Button title={"Add New Goal"} color={"#5e0acc"} onPress={showModalHandler} />
            <GoalInput addGoal={addGoal} showModal={showModal} closeModal={closeModal} />
            <View style={styles.goalsContainer}>
              <Text>List of goals</Text>
              <FlatList data={goals} renderItem={renderGoalItem} keyExtractor={(item) => item.id}/>
            </View>
          </View>
      </>
  );
}

const styles = StyleSheet.create({
  appContainer : {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085e'
  },
  goalsContainer: {
    flex: 5,
  },
});

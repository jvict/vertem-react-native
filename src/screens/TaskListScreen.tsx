import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useTasks } from '../contexts/TaskContext';
import TaskItem from '../components/TaskItem';
import CustomButton from '../components/CustomButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type TaskListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TaskList'>;

interface TaskListScreenProps {
  navigation: TaskListScreenNavigationProp;
}

const TaskListScreen: React.FC<TaskListScreenProps> = ({ navigation }) => {
  const { tasks, clearCompletedTasks } = useTasks();

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskItem task={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Adicionar Tarefa"
          onPress={() => navigation.navigate('AddTask')}
          style={styles.addButton}
        />
        <CustomButton
          title="Limpar Concluídas"
          onPress={clearCompletedTasks}
          style={styles.clearButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  addButton: {
    flex: 1,
    marginRight: 10,
  },
  clearButton: {
    flex: 1,
    backgroundColor: '#FF3B30',
  },
});

export default TaskListScreen;
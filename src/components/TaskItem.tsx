import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTasks } from '../contexts/TaskContext';
import { Task } from '../types/tasks';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { toggleTaskStatus } = useTasks();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => toggleTaskStatus(task.id)}>
        <Text style={[styles.text, task.status === 'concluído' && styles.completed]}>
          {task.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 16,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
});

export default TaskItem;
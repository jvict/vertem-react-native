import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { useTasks } from '../contexts/TaskContext';
import CustomButton from '../components/CustomButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type AddTaskScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddTask'>;

interface AddTaskScreenProps {
  navigation: AddTaskScreenNavigationProp;
}

const AddTaskScreen: React.FC<AddTaskScreenProps> = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const { addTask } = useTasks();

  const handleAddTask = () => {
    if (title.trim()) {
      addTask({ title });
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Digite o título da tarefa"
      />
      <CustomButton title="Adicionar Tarefa" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

export default AddTaskScreen;
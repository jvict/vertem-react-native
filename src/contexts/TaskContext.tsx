import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Task } from '../types/tasks';


interface TaskContextData {
  tasks: Task[];
  addTask: (newTask: Omit<Task, 'id' | 'status'>) => void;
  toggleTaskStatus: (taskId: number) => void;
  clearCompletedTasks: () => void;
}

const TaskContext = createContext<TaskContextData>({} as TaskContextData);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem('tasks');
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.error('Erro ao carregar tarefas:', error);
    }
  };

  const saveTasks = async (newTasks: Task[]) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
      setTasks(newTasks);
    } catch (error) {
      console.error('Erro ao salvar tarefas:', error);
    }
  };

  const addTask = (newTask: Omit<Task, 'id' | 'status'>) => {
    const updatedTasks = [...tasks, { id: Date.now(), ...newTask, status: 'pendente' }];
    saveTasks(updatedTasks);
  };

  const toggleTaskStatus = (taskId: number) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId
        ? { ...task, status: task.status === 'pendente' ? 'concluído' : 'pendente' }
        : task
    );
    saveTasks(updatedTasks);
  };

  const clearCompletedTasks = () => {
    const updatedTasks = tasks.filter(task => task.status !== 'concluído');
    saveTasks(updatedTasks);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTaskStatus, clearCompletedTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
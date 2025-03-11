import React from 'react';
import { TaskProvider } from './src/contexts/TaskContext';
import AppNavigator from './src/navigation/AppNavigator';
import 'react-native-gesture-handler';

const App: React.FC = () => {
  return (
    <TaskProvider>
      <AppNavigator />
    </TaskProvider>
  );
};

export default App;
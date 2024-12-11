import { useState } from 'react';

import './App.css';
import { TodoList } from './TodoList';
import { v1 } from 'uuid';

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

export type FilterValueType = 'all' | 'active' | 'completed';

function App() {
  const [task, setTask] = useState<Array<TaskType>>([
    { id: v1(), title: 'HTML&CSS', isDone: false },
    { id: v1(), title: 'Js', isDone: true },
    { id: v1(), title: 'React', isDone: true },
  ]);
  const [filterType, setFilterType] = useState<FilterValueType>('all');

  const removeTask = (id: string) => {
    const filteredTask: Array<TaskType> = task.filter((task) => task.id !== id);
    setTask(filteredTask);
  };

  const changeFilterType = (filterType: FilterValueType) => {
    setFilterType(filterType);
  };

  let filteredTask: Array<TaskType> = task;

  if (filterType === 'active') {
    filteredTask = task.filter((task) => !task.isDone);
  } else if (filterType === 'completed') {
    filteredTask = task.filter((task) => task.isDone);
  }

  return (
    <div className="App">
      <TodoList
        title={'TestTodoList'}
        task={filteredTask}
        removeTask={removeTask}
        changeFilterType={changeFilterType}
      />
    </div>
  );
}

export default App;

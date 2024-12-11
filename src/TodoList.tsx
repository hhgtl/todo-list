import { FilterValueType, TaskType } from './App';
import { TodoListHeader } from './TodoListHeader';
import { AddForm } from './AddForm';
import { FilterButtons } from './FilterButtons';
import { Button } from './Button';

type TodoListPropsType = {
  title: string;
  task: Array<TaskType>;
  removeTask: (id: string) => void;
  changeFilterType: (filterType: FilterValueType) => void;
};

export const TodoList = ({ title, task, removeTask, changeFilterType }: TodoListPropsType) => {
  const taskList =
    task.length === 0 ? (
      <span>Your todolist is empty</span>
    ) : (
      <ul>
        {task.map((task) => {
          return (
            <li key={task.id}>
              <input type="checkbox" checked={task.isDone} />
              <span>{task.title}</span>
              <Button title="x" onClickHandler={() => removeTask(task.id)} />
            </li>
          );
        })}
      </ul>
    );

  return (
    <div>
      <TodoListHeader title={title} />
      <AddForm />
      {taskList}
      <FilterButtons changeFilterType={changeFilterType} />
    </div>
  );
};

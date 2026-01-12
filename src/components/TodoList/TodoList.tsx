import { TodoInfo } from '../TodoInfo';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

type Todo = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
  user: User;
};

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <section className="TodoList">
    {todos.map((todo: Todo) => (
      <TodoInfo key={todo.id} todo={todo} />
    ))}
  </section>
);

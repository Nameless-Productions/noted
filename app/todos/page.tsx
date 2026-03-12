import { createTodoForm } from '@/lib/createTodo';
import deleteTodo from '@/lib/deleteTodo';
import getTodos from '@/lib/getTodos';
import { verifyToken } from '@/lib/jws';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import CreateTodoForm from './CreateTodoForm';
import TodoList from './TodoList';

type Todo = {
    todo: string,
    id: number
}

export default async function TodosPage() {

    const cookieStore = await cookies();
    const token = cookieStore.get("auth-token")?.value;
    const res: any = verifyToken(token!);
    if(!res) return redirect("/logout");
    const uid = res.userId;
    const todos = await getTodos(uid);



  return (<>
    <TodoList todos={todos} />

    <br />

    <CreateTodoForm />
  </>)
}

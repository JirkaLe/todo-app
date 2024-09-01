import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useTodoStore } from '../store/todoStore';

const schema = yup
  .object({
    todo: yup.string().required('Todo is required'),
  })
  .required();

function TodoForm() {
  const addTodo = useTodoStore((state) => state.addTodo);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: { todo: string }) => {
    addTodo(data.todo);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('todo')} />
      {errors.todo && <p>{errors.todo.message}</p>}
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;

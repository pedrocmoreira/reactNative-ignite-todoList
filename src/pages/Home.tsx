import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask() {
    //TODO - add new task if it's not empty
    if(!newTaskTitle) return;

    const newTask= {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    }

    setTasks(oldState => [...oldState, newTask]);
    setNewTaskTitle('');
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists
    const taskToggle = tasks.map(task => task.id == id ? {
      ...task,
      done: !task.done
    }: task)

    setTasks(taskToggle)
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    setTasks(oldState => oldState.filter(
      tasks => tasks.id !== id
    ))
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  )
}
import { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import ProgressBar from "../ProgressBar/ProgressBar";
import confetti from "https://esm.run/canvas-confetti@1";
import "./Todo.scss"

const Todo = () => {
  const [todos, setTodos] = useState([
    { title: "Finish homework", isChecked: false },
    { title: "Go grocery shopping", isChecked: false },
    { title: "Call mom", isChecked: false },
    { title: "Workout for 30 minutes", isChecked: false },
    { title: "Read a chapter of a book", isChecked: false },
    { title: "Call mom", isChecked: false },
  ]);
  const [progress, setProgress] = useState(0);

  const handleCheckboxChange = (index: number) => {
    setTodos(todos => {
      todos[index] = {
        ...todos[index],
        isChecked: !todos[index].isChecked
      };
      return [...todos];
    });

    const checkedCount = todos.filter((todo) => todo.isChecked).length;
    const newProgress = Math.floor((checkedCount / todos.length) * 100);
    setProgress(newProgress);

    if (todos[index].isChecked) {
        // Trigger confetti
        confetti({
          particleCount: 1500,
          spread: 360,
        });
      }
  };

  return (
    <>
      <article className="Todo">
        <h2>My Todos:</h2>
        {todos.map((todo, index) => (
            <Checkbox
            key={index}
            title={todo.title}
            isChecked={todo.isChecked}
            big={true}
            onChange={() => handleCheckboxChange(index)}
            />
        ))}
        <ProgressBar title="Task Accomplishment Bar" percentage={progress} />
      </article>
    </>
  );
};

export default Todo;

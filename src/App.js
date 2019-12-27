import React, { useState } from 'react';
import shortid from 'shortid';

import TextInput from './components/TextInput';
import EmptyNote from './components/EmptyNote';
import RemoveButton from './components/RemoveButton';
import Checkbox from './components/Checkbox';

const App = () => {
  const [todoList, setTodoList] = useState({});
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const handleEnterPress = (value) => {
    setTodoList(prev => ({
      ...prev,
      [shortid.generate()]: {
        name: value,
        done: false,
      }
    }));
    setText('');
  };
  const toggleTodo = (e) => {
    const { name, checked } = e.target;
    const id = name.split('__')[1];
    setTodoList(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        done: checked,
      },
    }));
  };
  const removeTodo = (id) => {
    const { [id]: remove, ...rest } = todoList;
    setTodoList(rest);
  };

  return (
    <div className="p-3 bg-white border rounded-lg shadow-lg w-1/2">
      <h1 className="text-xl font-bold mb-3">Todo List</h1>
      <TextInput
        value={text}
        onChange={handleTextChange}
        onEnterPress={handleEnterPress}
        placeholder="What are you going to do?"
      />
      {Object.keys(todoList).length === 0 ? (
        <EmptyNote />
      ) : (
        <ul className="mt-4 border rounded-lg w-full shadow">
          {Object.entries(todoList).map(([id, todo]) => (
            <li key={`todo-${id}`} className="font-bold border-b pl-4 pr-4 py-2">
              <Checkbox
                label={todo.name}
                name={`check__${id}`}
                id={`check__${id}`}
                checked={todo.done}
                onChange={toggleTodo}
              />
              <RemoveButton onClick={() => { removeTodo(id) }} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;

import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import PokemonInfo from "./poke.js";
import { v4 as uuidv4 } from "uuid";

import Todolist from "./Todolist.js";
import Main from "./Main.js";
import CodeContext from "./index.js";

function App() {
  //文字入力App
  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  //ポケモン図鑑
  const [pokemonName, setPokemonName] = useState("");
  const pokemonInputChange = (event) => {
    setPokemonName(event.target.value);
  };
  useEffect(() => {
    console.log(text);
  }, [text]);

  /////Todo App
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();
  const handleAddTodo = () => {
    const name = todoNameRef.current.value;
    //空白なら実行しない処理
    if (name === "") {
      return;
    }
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }];
    });
    todoNameRef.current.value = null; //todoNameRefのOBJに入っている
  };
  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };
  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  //カウンター

  //Context
  const codeInfo = useContext(CodeContext);

  return (
    <div className="App">
      <h1>文字入力</h1>
      <p style={{ fontSize: "50px" }}> {text}</p>
      <input type="text" value={text} onChange={handleInputChange} />
      <hr></hr>
      <p></p>
      <h1>Pokemon API</h1>
      <input type="text" value={pokemonName} onChange={pokemonInputChange} />
      {pokemonName && <PokemonInfo pokemonName={pokemonName} />}
      <p></p>

      <hr></hr>
      <h1>*TodoList* </h1>
      <h2>useRef() prev v4 as uuidv4</h2>
      <Todolist todos={todos} toggleTodo={toggleTodo} />
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button onClick={handleClear}>タスク削除</button>
      <div>残りタスク：{todos.filter((todo) => !todo.completed).length}</div>
      <p></p>

      <hr></hr>
      <h1>*カウント*</h1>
      <h2> useState useEffect</h2>
      <Main />
      <p></p>

      <hr></hr>
      <h1>*useContext*</h1>
      <p>{codeInfo.name}</p>
      <p>{codeInfo.age}</p>
    </div>
  );
}

export default App;

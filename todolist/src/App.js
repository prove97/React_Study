import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import AppContainer from './components/AppContainer'
import TodoInsert from './components/TodoInsert';
import TodoListView from './components/TodoListView';

function App() {
  const [todos, setTodos] = useState([]);
  // const[todos, setTodos] = useState(() => {
  //   const localData = localStorage.getItem("todos");
  //   return localData ? JSON.parse(localData) : [];
  // });
  // todos => 데이터를 추가 해주자 -> 
  // setTodos -> TodoInsert내부에 input요소의 value가 필요하다.
  
    const onInsert =(title) => {
      const todo ={
        id: new Date().getTime(), //key대체
        title: title,
        isDone: false
      }
        setTodos(todos => todos.concat(todo))
        //concat() : 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환
    }

    const onRemove = (id)=>{
      //데이터를 지우려면 id가 필요

      setTodos(todos.filter(todo => todo.id !== id))
      //filter() : 조건에 만족하는 값만 모든 배열에 반환
    }

    const onToggle = (id) => {
      const tmpTodo = todos.map(t => t.id === id ? 
                        {...t, isDone : !t.isDone} : t)
        
      setTodos(tmpTodo)
    }

    //최초 1회 실행
    useEffect(() => {
      const localData = localStorage.getItem("todos");
      if(localData) {
        setTodos(JSON.parse(localData))
      }
    },[])

    //최초에 한번 실행
    //todos바뀔때마다 실행
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    },[todos])

    return (
      <AppContainer title={"TodoList"}>
        <TodoInsert onInsert={onInsert}/>
        <TodoListView 
          todos={todos} 
          onRemove={onRemove}
          onToggle={onToggle}/>

      </AppContainer>
    );
}

export default App;

import React from 'react';
import Post from './components/Post';
import Comments from './components/Comments';
// import TodoForm from './components/TodoForm';
// import TodoList from './components/TodoList';
// import { TodosContextProvider } from './contexts/TodosContext';

const App = () => {
  return (
    <>
      <Post />
      <Comments />
    </>
    // <TodosContextProvider>
    //   <TodoForm />
    //   <TodoList />
    // </TodosContextProvider>
  );
};

export default App;

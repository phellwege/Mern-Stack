import './App.css';
import { useState } from 'react';
import Task from './components/Task';
import Input from './components/Input';

function App() {
  const [list,setList] = useState([]);
  return (
    <div className="App container" style={{width:'800px'}}>
      {list.map((task, i) => (
        <Task task={task} list={list} setList={setList} index={i} />
      ))}
      <Input list = {list} setList = {setList} />
    </div>
  )}
export default App;

import {useState} from 'react'
import { MdDeleteOutline } from "react-icons/md";

function App() {
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState([])

  const handleChange = (e) => {
    setNewTask(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks(prev => [...prev, newTask])
    console.log(tasks);
    
  }
  
  const handleDelete = (task) => {
    
    setTasks(prev => prev.filter(item => item!==task))
  }
  return (
      <section className=''>
        <div>
          <form>
            <input type="search" name='task' placeholder='Add task' onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>
          </form>
        </div>
{tasks.map((task, index) => (
  <div key={index}>{task} <MdDeleteOutline onClick={() => handleDelete(task)} /></div>
))}
      </section>
  );
}

export default App;

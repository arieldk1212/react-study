import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'


const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Create React Project',
      day: 'Thursday',
      reminder: true  
    },
    {
      id: 2,
      text: 'finish React Project',
      day: 'Today',
      reminder: true  
    },
    {
      id: 3,
      text: 'Learn Redux',
      day: 'Soon',
      reminder: false
    }
  ])

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;

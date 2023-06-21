import './App.css';
import Login from "./Usuario/Login";
import Header from "./Header";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

function App() {
  return (
    <div className="App">
      <Header/>
      <Login/>
    </div>
  );
}

export default App;

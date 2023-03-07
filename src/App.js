import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Adress from './Component/Profile/Adress';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProfilePhoto />
        <FullName />
        <Adress />
      </header>
    </div>
  );
}

export default App;

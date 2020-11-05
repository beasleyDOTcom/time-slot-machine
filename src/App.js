import logo from './logo.svg';
import './App.css';
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Hat from "./components/Hat.js";
import TimeSlots from "./components/TimeSlots.js";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hat/>
      <TimeSlots/>
      <Footer/>
    </div>
  );
}

export default App;

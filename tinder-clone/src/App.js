import react from "react";
import './App.css';
import Header from "./Components/Header";
import TinderCards from "./Components/TinderCards";
import SwipeButtons from "./Components/SwipeButtons";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* Tinder Cards */}
      <TinderCards />

      {/* Swipe Buttons */}
      <SwipeButtons />
    </div>
  );
}

export default App;

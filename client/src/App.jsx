import { useState } from 'react'
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState('about')
  return (
    <>
      <div className="min-h-screen p-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
          <Sidebar />
          <main className="flex-1 glass rounded-3xl p-6 lg:p-8 shadow-2xl">
          <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        </main>
        </div>
      </div>
    </>
  );
}

export default App;

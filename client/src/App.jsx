import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  return (
    <>
      <div className="min-h-screen p-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default App;

import './App.css'

// import TempComponent from './concepts/23. CustomHooks/TempComponent';
// import RandomComponent from './concepts/23. CustomHooks/RandomComponent';
// import WindowSizeComponent from './concepts/23. CustomHooks/WindowSizeComponent';
import useLocalStorage from './concepts/23. CustomHooks/hooks/useLocalStorage';

export default function App() {

  const [name, setName] = useLocalStorage("username", "")

  return (
    <>
      {/* <TempComponent />
      <RandomComponent /> */}
      {/* <WindowSizeComponent /> */}
      
      <h1>{name}</h1>

      <button onClick={() => setName("Yathe")}>
        Set Name
      </button>

    </>
  );
}
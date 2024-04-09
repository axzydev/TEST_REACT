import "./App.css";
import { Button } from "./components/atoms/Button/Button";

const App = () => {
  const handleClick = () => {
    console.log("Click");
  };

  return (
    <>
      {/* Aqui estamos llamando al componente Button y le estamos pasando el label y el evento onClick */}
      <Button label="Dame un click" buttonClick={handleClick} />
    </>
  );
};

export default App;

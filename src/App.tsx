import "./App.css";
import { Button } from "./components/atoms/Button/Button";

const App = () => {
  const handleClick = () => {
    console.log("Click");
  };

  return (
    <>
      <Button label="Dame un click" onClick={handleClick}  />
    </>
  );
};

export default App;

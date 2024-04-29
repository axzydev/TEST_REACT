import "./App.css";
import { Button } from "./components/atoms/Button/Button";

import { Card } from "./components/atoms/Card/Card";

const App = () => {


  return (
    <>
      {/* Aqui estamos llamando al componente Button y le estamos pasando el label y el evento onClick */}
      <Card title="Cola" > <p className="text-stone-500"> asdfghjm</p></Card>
      <Card title="Awada"> 
      <Button label="lick me" buttonClick={() => {console.log("webos de toro")}}/>
      </Card>
    </>
  );
};

export default App;

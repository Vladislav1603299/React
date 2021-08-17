import { useState } from "react";
import Form from "./components/form/Form";

const App = () => {
  const [messagelist, setMessagelist] = useState([]);

  const addMessageList = (newMessagelist) => {
    setMessagelist(...messagelist, newMessagelist);
  };

  return (
    <div>
      {messagelist.map((au, tx) => {
        return (
          <div>
            <h3>{au.autor}</h3>
            <p>{tx.text}</p>
            <Form addMessageList={addMessageList} />;
          </div>
        );
      })}
    </div>
  );
};

export default App;

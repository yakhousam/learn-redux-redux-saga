import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const handleClick = () => {
    // the ids goes from 1 to 10. if you use an id greater than 10
    // the api will return an error though we are handling the error
    const id = Math.floor(Math.random() * 10) + 1;
    dispatch({ type: "GET_USER", id });
  };
  if (state.status === "fetching") {
    return (
      <div className='App'>
        <p>Loading........</p>
      </div>
    );
  }
  return (
    <div className='App'>
      <button onClick={handleClick}>Get random user</button>
      <div>
        {state.status !== "error" ? (
          <pre>{JSON.stringify(state.user, null, 2)}</pre>
        ) : (
          <pre>{JSON.stringify(state.error, null, 2)}</pre>
        )}
      </div>
    </div>
  );
}

export default App;

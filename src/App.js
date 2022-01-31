import "./App.css";

const mapStateToProps = (state) => ({
  objectId: state.data.objectId,
});

function App() {
  // your logic goes here!
  useEffect(() => {
    dispatch(fetchData());
  }, [props.objectId, dispatch]);
  return (
    <div className="App">
      <div>
        <button onClick={() => {}}>Trigger Thunk</button>
        <button onClick={() => {}}>Clear</button>
        <button onClick={() => {}}>Next</button>
        <button onClick={() => {}}>Back</button>
      </div>
      <input onChange={(e) => {}} />
      <div>
        {/* Once you have plugged everything in, render the image here! */}
      </div>
    </div>
  );
}

export default App;

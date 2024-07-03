import "./App.css";

function App() {
  return (
    <>
      <h1>Streaming With NodeJS & React</h1>

      <h2>Streaming Audio</h2>
      <div>
        <audio src="http://localhost:3000/audio" controls={true}></audio>
      </div>

      <h2>Streaming Videos</h2>
      <div>
        <video width={400} controls={true}>
          <source src="http://localhost:3000/video" type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default App;

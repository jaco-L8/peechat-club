import './App.css';
import Header from './header.js';
import Bento from './bentoBox.js';
import Divider from './Divider.js';
import Mcinfo from './mcServer.js';

function App() {
  return (
    <div className="App">
      <Header />

      <Bento />

      <Divider marginTop="10rem" marginBottom="5rem" width='50%' align='center' />

      <Mcinfo />
    </div>
  );
}

export default App;

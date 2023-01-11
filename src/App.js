import './App.css';
import Collapse from './components/Collapse/Collapse';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const text = "collapse me";
    const text2 = "collapse me 123";

    return (
        <div className="App container">
            <Collapse text={text} opened={false}/>
            <Collapse text={text2} opened={true}/>
        </div>
    );
}

export default App;

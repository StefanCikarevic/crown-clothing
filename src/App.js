import './App.css';
import Directory from "./componets/directory/directory.component";
import categories from './data/categories.json'

function App() {
    return <Directory categories={categories}></Directory>;
}

export default App;

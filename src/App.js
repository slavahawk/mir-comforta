import {BrowserRouter, Route, Link} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./views/home/Home";
import Catalog from "./views/Catalog";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <main>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/catalog" component={Catalog}/>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;

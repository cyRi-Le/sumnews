import React from 'react';
import './App.css';
import "./style.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import DocumentViewer from "./document/DocumentViewer";
import Content from "./Content";
import { BrowserRouter as Router, Route , Switch} from "react-router-dom";
function App() {
  return (
    <div className="App">
       <Router> <Header/>
        <Content>
                <Switch>
                    <Route exact path={"/"} component={Home}/>
                    <Route exact path={"/home"} component={Home}/>
                    <Route exact path={"/example"} component={DocumentViewer}/>
                    <Route>
                        <h1>Not found</h1>
                    </Route>
                </Switch>

        </Content>
               </Router>
         <Footer/>
    </div>
  );
}

export default App;

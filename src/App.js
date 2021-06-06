import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import styled from 'styled-components';
import Sidebar from './components/Home/Sidebar/Sidebar/Sidebar';
import Header from './components/Home/Header/Header';
import Chat from './components/Home/Chat/Chat';


function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Switch>
              <Route path="/" exact>
                <Chat />
              </Route>
            </Switch>
          </AppBody>
        </>
      </Router>
    </div>
  );
}

export default App;

const  AppBody = styled.div`
 display: flex;
 height: 100vh;
`;

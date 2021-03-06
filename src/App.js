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
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Spinner from 'react-spinkit';


function App() {

  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt="" />

          <Spinner
            name='ball-spin-fade-loader'
            color='purple'
            fadeIn='none'
          />
        </AppLoadingContents>
      </AppLoading>
    )
  }

  return (
    <div className="app">
      <Router>
        {!user ? (
          <PrivateRoute />
        ) : (
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
        )}

      </Router>
    </div>
  );
}

export default App;

const AppLoading = styled.div`
 display: grid;
 place-items: center;
 height: 100vh;
 width: 100%;
`;

const AppLoadingContents = styled.div`
 text-align: center;
 padding-bottom: 100px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;

 > img {
   height: 100px;
   padding: 20px;
   margin-bottom: 40px;
 }
`;

const AppBody = styled.div`
 display: flex;
 height: 100vh;
`;

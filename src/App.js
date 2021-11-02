import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Chat from './components/Chat'
import Login from './components/Login'
import styled from 'styled-components'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import db from './firebase'
import { useEffect, useState } from 'react'
import { onSnapshot, collection } from "firebase/firestore";

function App() {

  const [rooms, setRooms] = useState([]);
  const getChannels = () => {
    onSnapshot(collection(db, "rooms"), (snapShot) => {
      const rooms = snapShot.docs.map(doc => ( { id: doc.id, name: doc.data().name }));
      setRooms(rooms);
    })
  };

  useEffect(() => {
    getChannels();
  }, [])

  return (
    <div className="App">
      <Router>
        <Container>
          <Header />
          <Main>
            <Sidebar rooms={rooms} />
            <Switch>
              <Route path="/room">
                <Chat />
              </Route>
              <Route path="/">
                <Login />
              </Route>
            </Switch>
          </Main>
        </Container>
      </Router>
    </div>
  );
}

export default App

const Container = styled.div `
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 40px auto;
`

const Main = styled.div `
  display: grid;
  grid-template-columns: 260px auto;
`

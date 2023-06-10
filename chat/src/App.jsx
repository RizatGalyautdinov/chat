import { Routes, Route } from 'react-router-dom';
import socketIO from 'socket.io-client';

import HomePage from "./components/home";
import ChatPage from "./components/chatPage";

const socket = socketIO.connect('http://localhost:2000');

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage socket={socket} />} />
      <Route path='/chat' element={<ChatPage socket={socket} />} />
    </Routes>
  )
}

export default App;

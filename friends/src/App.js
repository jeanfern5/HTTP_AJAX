import React from 'react';
import './App.css';
import FriendsList from './components/FriendsList';


const App = props => {
  return (
    <div className="App">
      <FriendsList friends={props.friendsData} />
    </div>
  )
}

export default App;


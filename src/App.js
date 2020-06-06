import React, { useState } from 'react';
import './App.css';
import { UserList, Input } from './component';

function App(props) {
  const [user, setUser] = useState([
    { id: 1, userName: '이호섭', userEmail: 'llss2ssll' }
  ]);

  const _handleInsert = people => {
    setUser([
      ...user,
      {
        id: user.length + 1,
        userName: people.userName,
        userEmail: people.userEmail
      }
    ]);
  };

  const _handleDelete = id => {
    setUser(
      user.filter(element => {
        return element.id !== id;
      })
    );
  };

  const _handleEdit = async people => {
    console.log('확인용', people);
    setUser(user.map(element => (element.id === people.id ? people : element)));
  };

  return (
    <div className="App">
      <Input handleInsert={_handleInsert} />
      <UserList
        user={user}
        handleDelete={_handleDelete}
        handleEdit={_handleEdit}
      />
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';

import './App.css';
interface User {
  username: string;
  age: number;
}

function App() {
  const [user, setUser] = useState<User>({ username: '', age: 0 });

  useEffect(() => {
    fetch('/api/user')
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User: {user.username}</h1>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default App;

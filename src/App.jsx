import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  return (
    <div>
      <h1>ユーザー情報</h1>
      {user ? (
        <div>
          <p>名前: {user.name}</p>
          <p>メール: {user.email}</p>
        </div>
      ) : (
        <p>読み込み中...</p>
      )}
    </div>
  );
}

export default App;
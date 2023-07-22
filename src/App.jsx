
import UsersForm from "./Components/UsersForm";
import UsersList from "./Components/UsersList";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css" 

function App() {
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const getAllUsers = () => {
    axios
      .get("https://users-crud.academlo.tech/users/")
      .then((resp) => setUserList(resp.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getAllUsers();
    
    
  }, []);

  const addUser = (newUser) => {
    //axios para enviar informacion a la api
    /*
      axios.post("url", body={})
    */

    axios
      .post("https://users-crud.academlo.tech/users/", newUser)
      .then(() => {
        getAllUsers()
        setSelectedUser(undefined);
      })
      .catch((error) => console.error(error));
  };

  const deleteUser = (id) => {
    /*
    axios.delete(`url/${parametro}`)
    */

    axios
      .delete(`https://users-crud.academlo.tech/users/${id}/`)
      .then(() => getAllUsers())
      .catch((error) => console.error(error));
  };

  const selectUser = (user) => {
    setSelectedUser(user);
  };

  const editUser = user => {
    /* axios.put('url/${id}', body) 
    el body es la info de carga, lo que mandamos hacia la API*/

    axios
    .put(`https://users-crud.academlo.tech/users/${user.id}/`, user)
    .then(() => getAllUsers(),
    setSelectedUser(null))
    .catch(error => console.error(error))
  }

  return (
    <main>
     <UsersForm addUser={addUser} 
      selectedUser={selectedUser}
  editUser={editUser} />

      <UsersList
        userList={userList}
        deleteUser={deleteUser}
        selectUser={selectUser}
      />
    </main>
  );
}

export default App;

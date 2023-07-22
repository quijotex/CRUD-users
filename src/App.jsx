
import UsersForm from "./Components/UsersForm";
import UsersList from "./Components/UsersList";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css" 

function App() {
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [ isVisible, setIsVisible ] = useState(false)

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
    axios
      .post("https://users-crud.academlo.tech/users/", newUser)
      .then(() => {
        getAllUsers()
        setSelectedUser(undefined);
      })
      .catch((error) => console.error(error));
  };

  const deleteUser = (id) => {

    axios
      .delete(`https://users-crud.academlo.tech/users/${id}/`)
      .then(() => getAllUsers())
      .catch((error) => console.error(error));
  };

  const selectUser = (user) => {
    setSelectedUser(user);
  };

  const editUser = user => {
    
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
  editUser={editUser}
  setIsVisible={setIsVisible}
  isVisible={isVisible}
   />

      <UsersList
        userList={userList}
        deleteUser={deleteUser}
        selectUser={selectUser}
        setIsVisible={setIsVisible}
      />
    </main>
  );
}

export default App;

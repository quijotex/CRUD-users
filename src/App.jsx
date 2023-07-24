
import "./App.css" 
import UsersForm from "./Components/UsersForm";
import UsersList from "./Components/UsersList";
import ExtraModal from "./Components/ExtraModal";
import { useState, useEffect } from "react";
import axios from "axios";


function App() {
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [ isVisible, setIsVisible ] = useState(false);
  const [ isOpen, setIsOpen ] = useState(false);
  const [ deleted, setIsDeleted ] = useState([]);
  const [ firstName, setFirstName ] = useState([]);
  const [ lastName, setLastName ] = useState([]);
  const [ isSuccesful, setIsSuccesful ] = useState(false)
 

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
      .then(() => getAllUsers())
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
    .then(() => getAllUsers())
    .catch(error => console.error(error))
  }
 

  return (
    <main>
     <UsersForm addUser={addUser} 
      selectedUser={selectedUser}
  editUser={editUser}
  setIsVisible={setIsVisible}
  isVisible={isVisible}
  setIsSuccesful={setIsSuccesful}
  setSelectedUser={setSelectedUser}
  
   />

      <UsersList
        userList={userList}
        selectUser={selectUser}
        setIsVisible={setIsVisible}
        setIsOpen={setIsOpen}
        setIsDeleted={setIsDeleted}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setSelectedUser={setSelectedUser}
      />
   
     <ExtraModal
     isOpen={isOpen}
     setIsOpen={setIsOpen}
      setIsDeleted={setIsDeleted}
      deleted={deleted}
      deleteUser={deleteUser}
      firstName={firstName}
      lastName={lastName}
      isSuccesful={isSuccesful}
      setIsSuccesful={setIsSuccesful}
    />
    </main>

    
  );
}

export default App;

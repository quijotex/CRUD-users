import "./App.css" 
import UsersForm from "./Components/UsersForm";
import UsersList from "./Components/UsersList";
import ExtraModal from "./Components/ExtraModal";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Components/Loader";

function App() {
  const [ userList, setUserList ] = useState([]);
  const [ selectedUser, setSelectedUser ] = useState(null);
  const [ isVisible, setIsVisible ] = useState(false);
  const [ isOpen, setIsOpen ] = useState(false);
  const [ deleted, setIsDeleted ] = useState([]);
  const [ firstName, setFirstName ] = useState([]);
  const [ lastName, setLastName ] = useState([]);
  const [ isSuccesful, setIsSuccesful ] = useState(false);
  const [ isCreated, setIsCreated ] = useState(false);
  const [ isDelete, setIsDelete ] = useState(false)
  const [ isError, setIsError ] = useState(false)
  const [ isLoading, setIsLoading ] = useState(false)

  const getAllUsers = () => {
      setIsLoading(true)
    axios
      .get("https://backend-users-o60o.onrender.com/users/")
      .then((resp) => setUserList(resp.data))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false)) 
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const addUser = (newUser) => {
    axios
      .post("https://backend-users-o60o.onrender.com/users/", newUser)
      .then(() => {getAllUsers(),
      setSelectedUser(undefined)})
      .catch(() => {setIsError(true), setIsCreated(false)});
  };

  const deleteUser = (id) => {
    axios
      .delete(`https://backend-users-o60o.onrender.com/users/${id}/`)
      .then(() => getAllUsers())
      .catch(() => {setIsError(true), setIsDelete(false)} );
  };

  const selectUser = (user) => {
    setSelectedUser(user);
  };

  const editUser = user => {
    axios
    .put(`https://backend-users-o60o.onrender.com/users/${user.id}/`, user)
    .then(() => getAllUsers())
    .catch(() => {setIsSuccesful(false), setIsError(true), setIsVisible(true),  setSelectedUser(user)})
  }
 
  return (
    <main>
     <UsersForm 
        addUser={addUser} 
        selectedUser={selectedUser}
        editUser={editUser}
        setIsVisible={setIsVisible}
        isVisible={isVisible}
        setIsSuccesful={setIsSuccesful}
        setSelectedUser={setSelectedUser}
        setIsCreated={setIsCreated}
        setFirstName={setFirstName}
        setLastName={setLastName}
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
        isCreated={isCreated}
        setIsCreated={setIsCreated}
        isDelete={isDelete}
        setIsDelete={setIsDelete}
        setIsError={setIsError}
        isError={isError}
    />

    {isLoading && <Loader/>}
    </main>
  );
}

export default App;

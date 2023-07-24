import { useForm } from "react-hook-form";
import { useEffect } from "react";

const UsersForm = ({ addUser, selectedUser, editUser, setIsVisible, isVisible, setIsSuccesful, setSelectedUser, setIsCreated, setFirstName, setLastName }) => {

  const { register, handleSubmit, reset } = useForm();
 

  useEffect(() => {
    if (selectedUser) {
      reset(selectedUser);
    } else {
      reset({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        birthday: ""
      })
    }
  }, [selectedUser]);

  const submit = (data) => {
    if (selectedUser){
    editUser(data)
    editedUser(data)
  } else {
    addUser(data)
    addNewUser(data)
  }
  }  

const editedUser = (change) => {
  for(let user in change) {
  if(change[user] !== selectedUser[user]) {
    setSelectedUser(null)
    setIsVisible(false)  
    setIsSuccesful(true)
  }}
}

const addNewUser = (newUser) => {
  for(let i in newUser){
    if(newUser[i] !== null) {
      setIsVisible(false)
      setFirstName(newUser.first_name)
      setLastName(newUser.last_name)
      setIsCreated(true)
    }
  }
}

  return (
    <div className={`div-usersForm ${isVisible? "is-visible" : ""}`}>
      <button className="button-close" onClick={() => setIsVisible(false)}>x</button>
    <form className="form-users" onSubmit={handleSubmit(submit)}>
      <h2>{selectedUser === null? "New user" : "User"}</h2>
      <div className="input-container">
        <label htmlFor="p-first_name">First Name</label>
        <input
          type="text"
          id="p-first_name"
          placeholder="Your name"
          {...register("first_name", { required: true })}
        />
      </div>
      <div className="input-container">
        <label htmlFor="p-last_name">Last Names</label>
        <input
          type="text"
          id="p-last_name"
          placeholder="Your last names"
          {...register("last_name", { required: true })}
        />
      </div>
      <div className="input-container">
        <label htmlFor="p-email">Email</label>
        <input
          type="text"
          id="p-email"
          placeholder="Your email"
          {...register("email", { required: true })}
        />
      </div>
      <div className="input-container">
        <label htmlFor="p-password">Password</label>
        <input
          type="password"
          id="p-password"
          placeholder="Enter your password"
          {...register("password", { required: true })}
        />
      </div>
      <div className="input-container">
        <label htmlFor="p-date">Birthday</label>
        <input
          type="date"
          id="p-date"
          {...register("birthday", { required: true })}
        />
      </div>
      <div className="input-container">
      <button>{selectedUser === null? "Add new user" : "Update user"}</button>
      </div>
    </form>
    </div>
  );
};

export default UsersForm;
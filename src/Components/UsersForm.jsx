import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const UsersForm = ({ addUser, selectedUser, editUser, setIsVisible, isVisible}) => {
  const { register, handleSubmit, reset } = useForm();
 

  useEffect(() => {
    if (selectedUser) {
      //prellenar el formulario
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
  } else {
    addUser(data)  
  }
  }
  const modal = () => {
    setIsVisible()
  }

  return (
    <div className={`div-usersForm ${isVisible? "is-visible" : ""}`}>
    <form className="form-users" onSubmit={handleSubmit(submit)}>
      <div className="title-button">
      <h2>New user</h2>
      <button className="button-close" onClick={() => setIsVisible(false)}>x</button>
      </div>
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
      <button >Add new user</button>
      </div>
    </form>
    </div>
  );
};

export default UsersForm;
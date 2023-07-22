import { useForm } from "react-hook-form";
import { useEffect } from "react";

const UsersForm = ({ addUser, selectedUser, editUser }) => {
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

  return (
    <div className="div-usersForm">
    <form className="form-users" onSubmit={handleSubmit(submit)}>
      <h2>New user</h2>

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
      
     

      <button>Add new user</button>
    </form>
    </div>
  );
};

export default UsersForm;
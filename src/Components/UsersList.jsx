const UsersList = ({ userList, deleteUser, selectUser, setIsVisible }) => {
    return (
      <section className="section-list">
        <h2>Registered users</h2>
        <button onClick={() => setIsVisible(true)}>Create new user</button>
        <ul className="users">
          {userList?.map((user) => (
            <li key={user.id}>
              <h4>{user.first_name} {user.last_name}</h4>
              <p>
                <span>Email</span> {user.email}
              </p>
              <p>
                <span>Birthday</span> {user.birthday}
              </p>
              <button onClick={() => deleteUser(user.id)}>Eliminar</button>
  
              <button onClick={() => {selectUser(user);
                 setIsVisible(true)}}>Editar</button>
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default UsersList;
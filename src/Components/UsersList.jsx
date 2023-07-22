import line from "/Line.svg"
import birth from "/Birth.svg"
import edit from "/Edit.svg"
import delet from "/Delete.svg"
import iconDelete from "/IconDelete.svg"

const UsersList = ({ userList, deleteUser, selectUser, setIsVisible }) => {
    return (
      <section className="section-list">
        <div className="registered-button">
        <h2>Users</h2>
        <button onClick={() => setIsVisible(true)}><span>+</span> Create new user</button>
        </div>
        <ul className="users">
          {userList?.map((user) => (
            <li className="list-user" key={user.id}>
              <h4>{user.first_name} {user.last_name}</h4>
              <img src={line} alt=""/>
                <div className="email-birth">
                  <span>Email</span>
                  <p>{user.email}</p>
                  <span> Birthday</span> 
                  <p> 
                  <img className="birth-svg" src={birth} alt=""/>
                    {user.birthday}</p>
                </div>
              <img src={line} alt=""/>
              <div className="button-delete-edit">
              <button className="delete" onClick={() => deleteUser(user.id)}><img  src={delet} alt=""/></button>
  
              <button onClick={() => {selectUser(user);
                 setIsVisible(true)}}><img className="edit" src={edit} alt=""/></button>
                 </div>
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default UsersList;
import line from "/Line.svg"
import birth from "/Birth.svg"
import edit from "/Edit.svg"
import delet from "/Delete.svg"


const UsersList = ({ userList, selectUser, setIsVisible, setIsOpen, setIsDeleted, setFirstName, setLastName, setSelectedUser }) => {

    return (
      <section className="section-list">
        <div className="registered-button">
        <h2>Users</h2>
        <button onClick={() => {setSelectedUser(null), setIsVisible(true)}}><span>+</span><p> Create new user</p></button>
        </div>
        <ul className="users">
          {userList?.map((user) => (
            <li className="list-user" key={user.id}>
              <div className="full-name">
              <h4>{user.first_name} {user.last_name}</h4>
              </div>
              <img className="lines" src={line} alt=""/>
                <div className="email-birth">
                  <span>Email</span>
                  <p>{user.email}</p>
                  <span> Birthday</span> 
                  <p> 
                  <img className="birth-svg" src={birth} alt=""/>
                    {user.birthday}</p>
                </div>
              <img className="lines" src={line} alt=""/>
              <div className="button-delete-edit">
              <button className="delete" onClick={() => {setIsOpen(true);setIsDeleted(user.id); setFirstName(user.first_name); setLastName(user.last_name)}}><img  src={delet} alt=""/></button>
  
              <button onClick={() => {selectUser(user); setFirstName(user.first_name); setLastName(user.last_name);
                 setIsVisible(true)}}><img className="edit" src={edit} alt=""/></button>
                 </div>
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default UsersList;
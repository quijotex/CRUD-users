import error from '/Error.svg'

const ExtraModal = ({ isOpen, setIsOpen, deleted, deleteUser, firstName, lastName, isSuccesful, setIsSuccesful, isCreated, setIsCreated, isDelete, setIsDelete, isError, setIsError }) => {

    return (
        <>
        <div className={`extra-modal ${isOpen? "is-Open" : ""}`}>
            <div className="modal-content">
              <div>
                <h2>Are you sure?</h2>
                </div>
                <div className="paragraph">
                <p>The user <strong>{`${firstName} ${lastName}`}</strong> will be deleted</p>
              </div>
              <div className="modal-button">
                <button onClick={() => {deleteUser(deleted); setIsOpen(false); setIsDelete(true)}}>Accept</button>
                <button onClick={() => setIsOpen(false)}>Cancel</button>
              </div>
            </div>
        </div>
        <div className={`delete-modal ${isDelete? "is-Delete" : ""}`}>
            <div className="delete-content">
            <p>The user <strong>{`${firstName} ${lastName}`}</strong> has been deleted succesfully</p>
            <button onClick={() => setIsDelete(false)}>Close</button>
            </div>
       </div>
        <div className={`update-modal ${isSuccesful? "is-Succesful" : ""}`}>
            <div className="update-content">
            <p>The user <strong>{`${firstName} ${lastName}`}</strong> has been updated succesfully</p>
            <button onClick={() => setIsSuccesful(false)}>Close</button>
            </div>
       </div>
       <div className={`create-modal ${isCreated? "is-Created" : ""}`}>
            <div className="create-content">
            <p>The user <strong>{`${firstName} ${lastName}`}</strong> has been created succesfully</p>
            <button onClick={() => setIsCreated(false)}>Close</button>
            </div>
       </div>
       <div className={`error-modal ${isError? "is-Error" : ""}`}>
            <div className="error-content">
                <div>
                <img src={error} alt=''/>
                 <span>Oops!</span>
                 </div>
            <p>Sorry, we have an error. Try again, please</p>
            <button onClick={() => setIsError(false)}>Close</button>
            </div>
       </div>
        </>
    )
}

export default ExtraModal
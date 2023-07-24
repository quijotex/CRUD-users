const ExtraModal = ({ isOpen, setIsOpen, deleted, deleteUser, firstName, lastName, isSuccesful, setIsSuccesful }) => {

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
                <button onClick={() => {deleteUser(deleted); setIsOpen(false)}}>Accept</button>
                <button onClick={() => setIsOpen(false)}>Cancel</button>
              </div>
            </div>
        </div>
        <div className={`update-modal ${isSuccesful? "is-Succesful" : ""}`}>
            <div className="update-content">
            <p>The user <strong>{`${firstName} ${lastName}`}</strong> has been updated succesfully</p>
            <button onClick={() => setIsSuccesful(false)}>Close</button>
            </div>
       </div>
        </>
    )
}

export default ExtraModal
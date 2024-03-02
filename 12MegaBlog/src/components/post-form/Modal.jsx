import React from 'react'

const Modal = ({message, closeModal}) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default Modal

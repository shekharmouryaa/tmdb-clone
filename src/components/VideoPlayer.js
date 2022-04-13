import React from "react";
import Modal from "react-modal";
import useStore from "../Store/store";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function VideoPlayer() {

  const trailerKey = useStore((state) => state.trailerKey);
  const modalIsOpen = useStore((state) => state.modalIsOpen);
  const closeModal = useStore((state) => state.closeModal);

  return (
    <div>
    <h1>Video</h1>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="container-fluid">
        <p className="close-btn" onClick={closeModal}>x</p>
        <div className="watchScreen__player">
          <iframe
            title={"Video"}
            src={`https://www.youtube.com/embed/${trailerKey}`}
            frameBorder={0}
            allowFullScreen
            width={"100%"}
            height={"100%"}
          ></iframe>
        
        </div>
      </div>
      </Modal>
    </div>
  );
}

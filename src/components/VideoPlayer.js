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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="container-fluid">
        <span style={{position:"absolute",right:"0px",padding:"5px", cursor:"pointer"}} onClick={closeModal}>❌</span>
        <div className="watchScreen__player">
          <iframe
            title={"Video"}
            src={`https://www.youtube.com/embed/${trailerKey}`}
            frameBorder={0}
            allowFullScreen
            width={"700px"}
            height={"500px"}
          ></iframe>
        
        </div>
      </div>
      </Modal>
      
    </div>
  );
}

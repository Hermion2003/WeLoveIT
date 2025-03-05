import React, { useEffect, useState } from "react";
import "./ConsultationModal.scss";
import ConsultationModalContent from "./consultationModalContent/ConsultationModalContent.jsx";

const ConsultationModal = ({ children, onClose, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsExiting(false);
      if (onClose) onClose();
    }, 300);
  };

  return (
    <>
      <div className={"cover"} onClick={() => setIsOpen(true)}>
        {children}
      </div>
      {isOpen && (
        <div
          className={`consultationModalContainer ${isExiting ? "exiting" : ""}`}
          onClick={handleClose}
        >
          <div
            className="modalContent"
            onClick={(event) => event.stopPropagation()}
          >
            <ConsultationModalContent
              setIsOpen={setIsOpen}
            ></ConsultationModalContent>
          </div>
        </div>
      )}
    </>
  );
};

export default ConsultationModal;

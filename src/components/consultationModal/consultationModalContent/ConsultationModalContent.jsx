import "./ConsultationModalContent.scss";
import React from "react";

const ConsultationModalContent = ({setIsOpen, ...props}) => {
    return (
        <div className={"consultationModalContentContainer"}>
            <button className="modalCloseButton" onClick={() => setIsOpen(false)}>
                ×
            </button>
            <h3 className={"titleForm"}>Отримайте безкоштовну консультацію!</h3>
            <h4 className={"describeForm"}>Залиште свій номер, і ми розповімо про курс та можливості
                працевлаштування!</h4>
            <input className={"inputPhone"}/>
            <div className={"blockForBtn"}>
                <button className={"buttonSend"}>Надіслати</button>
            </div>
        </div>
    );
};
export default ConsultationModalContent;

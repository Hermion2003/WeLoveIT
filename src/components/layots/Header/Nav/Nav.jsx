import "./Nav.scss";
import {FaPhoneFlip, FaRegCircleUser, FaX} from "react-icons/fa6";
import logo from "./../../../../assets/jobLogo.svg";
import {TiArrowSortedDown} from "react-icons/ti";
import ConsultationModal from "../../../consultationModal/ConsultationModal.jsx";
import {useEffect, useState} from "react";
import {FiMenu} from "react-icons/fi";

const Nav = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

    const menu = (<div className={"navInCenterOfNav"}>
        <div className={"blockForItemNav"}>
            <a href="#" className={"linkInNav"}>
                Вакансії
            </a>
            <TiArrowSortedDown className={"iconInItemNav"}/>
        </div>
        <div className={"blockForItemNav"}>
            <a href="#" className={"linkInNav"}>
                Про компанію
            </a>
            <TiArrowSortedDown className={"iconInItemNav"}/>
        </div>
        <div className={"blockForItemNav"}>
            <a href="#" className={"linkInNav"}>
                Відгуки
            </a>
            <TiArrowSortedDown className={"iconInItemNav"}/>
        </div>
        <div className={"blockForItemNav"}>
            <a href="#" className={"linkInNav"}>
                Акції
            </a>
            <TiArrowSortedDown className={"iconInItemNav"}/>
        </div>
        <div className={"blockForItemNav"}>
            <a href="#" className={"linkInNav"}>
                Контакти
            </a>
            <TiArrowSortedDown className={"iconInItemNav"}/>
        </div>
    </div>)

    return (
        <nav className={"nav"}>
            <img src={logo} alt="logo" className="logoStyleNav"/>
            <div className={"normalMenu"}>
                {menu}
            </div>


            <div className={"rightPartOfNav"}>
                <FaPhoneFlip className={"styleIconNav"}/>
                <FaRegCircleUser className={"styleIconNav"}/>
                <ConsultationModal>
                    <button className={"consultationBtn"}>Отримати консультацію</button>
                </ConsultationModal>
            </div>
         <FiMenu onClick={()=>setIsMobile(!isMobile)} className={"hamburger"}/>
            <div className={`mobileMenu ${isMobile?" isOpen":""}`}>
                <div className={"topMenuMobile"}>

                <FaX onClick={()=>setIsMobile(false)}/>
                </div>
                <div className={"middle"}>

                {menu}
                </div>
                <div className={"bottom"}>
                    <FaPhoneFlip className={"styleIconNav"}/>
                    <FaRegCircleUser className={"styleIconNav"}/>
                </div>
            </div>
        </nav>
    );
};
export default Nav;

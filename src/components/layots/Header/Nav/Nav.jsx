import "./Nav.scss";
import { FaPhoneFlip, FaRegCircleUser } from "react-icons/fa6";
import logo from "./../../../../assets/jobLogo.svg";
import { TiArrowSortedDown } from "react-icons/ti";
import ConsultationModal from "../../../consultationModal/ConsultationModal.jsx";

const Nav = () => {
  return (
    <nav className={"nav"}>
      <img src={logo} alt="logo" className="logoStyleNav" />
      <div className={"navInCenterOfNav"}>
        <div className={"blockForItemNav"}>
          <a href="#" className={"linkInNav"}>
            Вакансії
          </a>
          <TiArrowSortedDown className={"iconInItemNav"} />
        </div>
        <div className={"blockForItemNav"}>
          <a href="#" className={"linkInNav"}>
            Про компанію
          </a>
          <TiArrowSortedDown className={"iconInItemNav"} />
        </div>
        <div className={"blockForItemNav"}>
          <a href="#" className={"linkInNav"}>
            Відгуки
          </a>
          <TiArrowSortedDown className={"iconInItemNav"} />
        </div>
        <div className={"blockForItemNav"}>
          <a href="#" className={"linkInNav"}>
            Акції
          </a>
          <TiArrowSortedDown className={"iconInItemNav"} />
        </div>
        <div className={"blockForItemNav"}>
          <a href="#" className={"linkInNav"}>
            Контакти
          </a>
          <TiArrowSortedDown className={"iconInItemNav"} />
        </div>
      </div>
      <div className={"rightPartOfNav"}>
        <FaPhoneFlip className={"styleIconNav"} />
        <FaRegCircleUser className={"styleIconNav"} />
        <ConsultationModal>
          <button className={"consultationBtn"}>Отримати консультацію</button>
        </ConsultationModal>
      </div>
    </nav>
  );
};
export default Nav;

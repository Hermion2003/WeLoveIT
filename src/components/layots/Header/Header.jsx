import "./Header.scss";
import Nav from "./Nav/Nav.jsx";
import headerImg from "./../../../assets/headerImg.jpg";
import TwoBlocks from "./twoBlocks/TwoBlocks.jsx";
import ConsultationModal from "../../consultationModal/ConsultationModal.jsx";

const Header = () => {
  return (
    <header className={"header"}>
      <Nav />
      <div className={"wrapperHeader"}>
        <div className={"leftBlockHeader"}>
          <h2 className={"titleHeader"}>
            <span className={"redStart"}>IT Працевлаштування:</span> для
            студентів!
          </h2>
          <div className={"containerForVacations"}>
            <span className={"vacationsHeader"}>Фронтенд-розробник</span>
            <span className={"vacationsHeader"}>Бекенд-розробник</span>
            <span className={"vacationsHeader"}>Мобільний-розробник</span>
            <span className={"vacationsHeader"}>Фулстек-розробник</span>
            <span className={"vacationsHeader"}>+4</span>
          </div>
          <ConsultationModal>
            <button className={"btnHeaderConsultation"}>
              Отримати консультацію
            </button>
          </ConsultationModal>
        </div>
        <img src={headerImg} alt="headerImg" className={"imgHeader"} />
      </div>
      <TwoBlocks />
    </header>
  );
};
export default Header;

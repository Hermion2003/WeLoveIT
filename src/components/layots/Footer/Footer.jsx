import "./Footer.scss";
import InternalWrapper from "../../wrapper/internalWrapper/InternalWrapper.jsx";
import Wrapper from "../../wrapper/Wrapper.jsx";
import {FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaYoutube,} from "react-icons/fa";

const Footer = () => {
    return (
        <Wrapper style={{paddingBlock: 15}}>
            <InternalWrapper backgroundColor={"#22262f"}>
                <footer className={"footer"}>
                    <div className="top">
                        <div className="biggerColumn">
                            <div className="logoContainer">
                                <h3>
                                    WE LOVE IT
                                    <br/>
                                    Працевлаштування
                                </h3>
                            </div>
                        </div>
                        <div className="containerForColumns">
                            <div className="column">
                                <h4>Курси</h4>
                                <ul>
                                    <li>Тестувальник програмного забезпечення (QA)</li>
                                    <li>Python розробник</li>
                                    <li>Front-end розробник</li>
                                    <li>Full-stack розробник</li>
                                    <li>Java розробник</li>
                                </ul>
                            </div>

                            <div className="column">
                                <h4>Відкрийте більше</h4>
                                <ul>
                                    <li>Формати навчання</li>
                                    <li>Про нас</li>
                                    <li>Оголошення</li>
                                    <li>Кар'єра</li>
                                    <li>Ми наймаємо</li>
                                </ul>
                            </div>

                            <div className="column">
                                <h4>Файли для завантаження</h4>
                                <ul>
                                    <li>iOS</li>
                                    <li>Android</li>
                                </ul>
                            </div>
                        </div>

                        <div className="biggerColumn">
                            <button className={"lightBtn"}>Реєстрація</button>
                            <button className={"darkBtn"}>Увійти</button>
                        </div>
                    </div>

                    <div className="bottom">
            <span className="author">
              Права захищені © {new Date().getFullYear()} We Love IT
            </span>
                        <div className="icons">
                            <FaFacebook/>
                            <FaInstagram/>
                            <FaYoutube/>
                            <FaTiktok/>
                            <FaLinkedin/>
                        </div>
                    </div>
                </footer>
            </InternalWrapper>
        </Wrapper>
    );
};
export default Footer;

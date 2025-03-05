import "./JobGuarantee.scss";
import Wrapper from "../../wrapper/Wrapper.jsx";
import InternalWrapper from "../../wrapper/internalWrapper/InternalWrapper.jsx";
import money from "./../../../assets/money.png";

const JobGuarantee = () => {
    return (
        <Wrapper>
            <InternalWrapper>
                <section className={"containerJobGuarantee"}>
                    <div className={"topJobGuarantee"}>
                        <div className={"leftJobGuarantee"}>
                            <h4 className={"titleJobGuarantee"}><span
                                className={"pink"}>Гарантія працевлаштування:</span> якщо не знайдеш роботу, не
                                платиш за курс</h4>
                            <p className={"contentJobGuarantee"}>Якщо протягом визначеного часу після навчання ти не
                                знайдеш роботу, ми повернемо кошти за курс. Ми віримо в ефективність нашого навчання і
                                готові надати тобі підтримку для досягнення кар'єрних цілей.</p>
                            <button className={"btnJobGuarantee"}>Переглянути договір</button>
                        </div>
                        <div className={"rightJobGuarantee"}>
                            <img src={money} alt="money" className={"money"}/>
                        </div>
                    </div>
                    <div className={"bottomJobGuarantee"}>
                        <div className={"first"}><span className={"percentJobGuarantee"}>5000+</span>
                            <p className={'contentJobGuarantee'}>айтівців найняли у 2024</p></div>
                        <div className={"second"}><span className={"percentJobGuarantee"}>5000+</span>
                            <p className={'contentJobGuarantee'}>історій успіху</p>
                        </div>
                        <div className={"third"}><span className={"percentJobGuarantee"}>7000+</span>
                            <p className={'contentJobGuarantee'}>працевлаштованих випускників</p>
                        </div>
                    </div>
                </section>
            </InternalWrapper>
        </Wrapper>
    );
};
export default JobGuarantee;

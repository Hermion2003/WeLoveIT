import "./VacanciesBlock.scss";

const VacanciesBlock = ({black, month, bottomTitle, bottomDescribe, imageForVacance, top}) => {
    return (
        <section className={"vacanciesBlockContainer"}>
            <div className="top">
                <div className={`miniBlock ${black ? "black" : ""}`}>
                    {black ? "Новинка" : "Програмування"}
                </div>
                <img src={imageForVacance} alt="image" className={"imageVacance"}/>
            </div>
            <div className="bottom">
                <div className="bottomTop">старт від {month}</div>
                <h4>{bottomTitle}</h4>
                <p>{bottomDescribe}</p>

            </div>
        </section>
    );
};
export default VacanciesBlock;

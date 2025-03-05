import "./Vacancies.scss";
import Wrapper from "../../wrapper/Wrapper.jsx";
import InternalWrapper from "../../wrapper/internalWrapper/InternalWrapper.jsx";
import VacanciesBlock from "./vacanciesBlock/VacanciesBlock.jsx";
import java from "./../../../assets/java.svg";
import dotnet from "./../../../assets/dotnet.svg";
import react from "./../../../assets/react.svg";
import python from "./../../../assets/python.svg";
import ConsultationModal from "../../consultationModal/ConsultationModal.jsx";

const Vacancies = () => {
  const vacanciesData = [
    {
      black: true,
      month: "березня",
      bottomTitle: "Python",
      bottomDescribe:
        "Мова програмування для автоматизації, аналізу даних та розробки веб-додатків.",
      imageForVacance: python,
    },
    {
      black: false,
      month: "квітня",
      bottomTitle: "Java",
      bottomDescribe:
        "Популярна мова для корпоративних застосунків та Android-розробки.",
      imageForVacance: java,
    },
    {
      black: false,
      month: "травня",
      bottomTitle: "React",
      bottomDescribe:
        "Бібліотека для створення інтерактивних інтерфейсів користувача.",
      imageForVacance: react,
    },
    {
      black: false,
      month: "червня",
      bottomTitle: "C++",
      bottomDescribe: "Потужні технології для розробки продуктивних додатків.",
      imageForVacance: dotnet,
    },
  ];

  return (
    <Wrapper>
      <InternalWrapper>
        <section className={"vacanciesContainer"}>
          <h2 className={"titleVacancies"}>чому ти навчишся</h2>
          <h3 className={"describeVacancies"}>Найпопулярніші курси</h3>
          <div className={"containerVacancies"}>
            {vacanciesData.map((item, index) => (
              <ConsultationModal key={index}>
                <VacanciesBlock
                  black={item.black}
                  month={item.month}
                  bottomTitle={item.bottomTitle}
                  bottomDescribe={item.bottomDescribe}
                  imageForVacance={item.imageForVacance}
                />
              </ConsultationModal>
            ))}
          </div>
        </section>
      </InternalWrapper>
    </Wrapper>
  );
};
export default Vacancies;

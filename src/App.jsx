import './App.scss'
import Header from "./components/layots/Header/Header.jsx";
import "./App.scss";
import Footer from "./components/layots/Footer/Footer.jsx";
import Vacancies from "./components/layots/Vacancies/Vacancies.jsx";
import JobGuarantee from "./components/layots/JobGuarantee/JobGuarantee.jsx";

function App() {
    return (
        <div className={"mainWrapper"}>
            <Header/>
            <Vacancies/>
            <JobGuarantee/>
            <Footer/>

        </div>
    )
}

export default App

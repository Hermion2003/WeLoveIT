import "./TwoBlocks.scss";
import avatar from "./../../../../assets/avatar.png";
import {BsSunFill} from "react-icons/bs";
import {FaHeart} from "react-icons/fa";
import avatarBoy from "./../../../../assets/avatarBoy.png";
import stars from "./../../../../assets/stars.png";

const TwoBlocks = () => {
    return (
        <section className={'twoBlocksContainer'}>
            <div className={"firstBlock"}>
                <div className={"blockForAvatar"}>
                    <img src={avatar} alt="avatar" className={"avatarStyleHeader"}/>
                    <span className={"helloSpanHeader"}>Стартуй в IT легко – я тут, щоб допомогти!</span>
                </div>
                <div className={"contentBlock"}>
                    <h4 className={"titleInBlock"}>
                        <BsSunFill className={"iconInBlockSun"}/> Ідеально для новачків</h4>
                    <span className={"percent"}>95%</span>
                    <p className={"describeInBlock"}> наших студентів почали курс без досвіду та отримали першу
                        IT-роботу вже
                        за кілька місяців!!</p>
                </div>
                <div className={"contentBlock"}>
                    <h4 className={"titleInBlock"}>
                        <FaHeart className={"iconInBlockHeart"}/>Закохані в IT разом</h4>
                    <span className={"percent"}>85%</span>
                    <p className={"describeInBlock"}>студентів закохалися в IT разом із нами!</p>
                </div>
            </div>
            <div className={"secondBlock"}>
                <img src={stars} alt="stars" className={"starsImage1"}/>
                <img src={stars} alt="stars" className={"starsImage2"}/>
                <img src={stars} alt="stars" className={"starsImage3"}/>
                <img src={stars} alt="stars" className={"starsImage4"}/>
                <img src={stars} alt="stars" className={"starsImage5"}/>
                <img src={avatarBoy} alt="avatarBoy" className={"avatarBoy"}/>
                <span className={"spanNearBoyAvatar"}>Разом ми подолаємо бар'єри та досягнемо нових вершин!</span>
            </div>
        </section>
    )
}
export default TwoBlocks;

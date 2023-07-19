import s from "./Main.module.scss"
import Intro from "../Intro/Intro"
import Composition from "../Composition/Composition";
import Gifts from "../Gifts/Gifts"

const Main = () => {
  return (
    <main className={s.main}>
        <Composition/>
        <Intro/>
        <Gifts/>
    </main>
  )
}

export default Main;
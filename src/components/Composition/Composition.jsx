import s from "./Composition.module.scss"
import purpleBall from "../../assets/purple ball.png"
import redBall from "../../assets/red ball.png"
import redBallBlured from "../../assets/red ball2.png"
import noise from "../../assets/noise.png"

const Composition = () => {
  return (
    <div className={s.wrapper}>
            <div className={s.main__composition}>
                <img className={s.purple} src={purpleBall} alt="" />
                <img className={s.red} src={redBall} alt="" />
                <img className={s.redblur} src={redBallBlured} alt="" />
            </div>
            <img className={s.noise} src={noise} alt="" />
        </div>
  )
}

export default Composition;
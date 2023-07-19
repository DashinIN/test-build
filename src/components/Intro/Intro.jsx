import s from "./Intro.module.scss"

const Intro = () => {
  return (
    <div className={s.content__intro}>
    <p className={s.title}>Зарабатывайте больше</p>
    <p className={s.gradient}>с WELBEX</p>
    <p className={s.undertitle}>Развиваем и контролируем продажи за вас</p>
</div>
  )
}

export default Intro;
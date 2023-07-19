
import s from "./Footer.module.scss"
import iconTg from "../../assets/telegram.svg"
import iconVb from "../../assets/viber.svg"
import iconWu from "../../assets/whatsapp.svg"

const Footer = () => {
  return (
    <footer className={s.footer}>
        <div className={s.part}>
          <div className={s.title}>О компании</div>
          <div className={s.items}>
            <a href="/" className={s.item}>Партнёрская программа</a>
            <a href="/" className={s.item}>Вакансии</a>
          </div>
        </div>
        <div className={s.part}>
          <div className={s.title}>Меню</div>
          <div className={s.items__grid}>
            <a href="/" className={s.item}>Расчёт стоимости</a>
            <a href="/"  className={s.item}>Благодарность клиентов</a>
            <a href="/" className={s.item}>Услуги</a>
            <a href="/" className={s.item}>Кейсы</a>
            <a href="/" className={s.item}>Виджеты</a>
            <a href="/" className={s.item}>Сертификаты</a>
            <a href="/" className={s.item}>Интеграции</a>
            <a href="/" className={s.item}>Блог на Youtube</a>
            <a href="/" className={s.item}>Наши клиенты</a>
            <a href="/" className={s.item}>Вопрос / Ответ</a>
          </div>
        </div>
        <div className={s.part}>
          <div className={s.title}>Контакты</div>
          <div className={s.item}><span>+7 555 555-55-55</span></div>
            <div className={s.item}>
                <a href="/" className={s.icon}><img src={iconTg} alt="" /></a>
                <a href="/" className={s.icon}><img src={iconVb} alt="" /></a>
                <a href="/" className={s.icon}><img src={iconWu} alt="" /></a>
            </div>
            <div className={s.item}>Москва, Путевой проезд 3с1, к 902</div>
            <div className={s.brand}>
                <div className={s.brand__info}>©WELBEX 2022. Все права защищены.</div>
                <div className={s.brand__info}><a href="/">Политика конфиденциальности</a></div>
             </div>
        </div>
    </footer>
  )
}

export default Footer;
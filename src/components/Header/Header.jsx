import s from "./Header.module.scss"
import logo from "../../assets/logo_welbex.svg"
import iconTg from "../../assets/telegram.svg"
import iconVb from "../../assets/viber.svg"
import iconWu from "../../assets/whatsapp.svg"

const links = ['Услуги', "Виджеты", "Интеграции", "Кейсы", 'Сертификаты']

const Header = () => {
  return (
    <header className={s.header}>
        <div className={s.menu}>
            <div className={s.logo}>
                <img src={logo} alt="" />
                <div className={s.logo__title}>
                    крупный интегратор CRM <br/>в Росcии и ещё 8 странах
                    </div>
            </div>
            {
                links.map(link => (
                <a  href="/" className={s.menu__item}>
                    {link}
                </a>
                )
                )
            }
             <div className={s.item}><span>+7 555 555-55-55</span></div>
             <a href="/" className={s.icon}><img src={iconTg} alt="" /></a>
                <a href="/" className={s.icon}><img src={iconVb} alt="" /></a>
                <a href="/" className={s.icon}><img src={iconWu} alt="" /></a>
        </div>

    </header>
  )
}

export default Header;
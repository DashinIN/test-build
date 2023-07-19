import s from "./Gifts.module.scss"

const Gifts = () => {
  return (
    <div className={s.gifts}>
        <p className={s.title}> 
        Вместе с <span>бесплатной</span><span> консультацией</span> мы дарим:
        </p>
       

        <div className={s.items}>
             <p className={s.item__short}><span>— </span> Skype аудит</p>
             <p className={s.item__short}><span>— </span> 30 виджетов</p>
             <p className={s.item__short}><span>— </span> Dashboard</p>
             <p className={s.item__short}><span>— </span> Месяц аmoCRM</p>

            <div className={s.item}>
                <p className={s.item__title}>Виджеты</p>
                <p className={s.item__info}>30 готовых решений</p>
            </div>
            <div className={s.item}>
                <p className={s.item__title}>Dashboard</p>
                <p className={s.item__info}>с показателями вашего бизнеса</p>
            </div>
            <div className={s.item}>
                <p className={s.item__title}>Skype Аудит</p>
                <p className={s.item__info}>отдела продажи CRM системы</p>
            </div>
            <div className={s.item}>
                <p className={s.item__title}>35 дней</p>
                <p className={s.item__info}>использования CRM</p>
            </div>
        </div>
        <button className={s.button}>
            Получить консультацию
        </button>
    </div>
  )
}

export default Gifts;
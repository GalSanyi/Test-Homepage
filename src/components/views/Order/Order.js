import s from './Order.module.css'

function Order() {
  return (
    <div className={s.container}>
    <div className={s.wrapper}>
        <p className={s.header__text}>Free Shipping on order over $75</p>
    </div>
    </div>
  )
}

export default Order;
import css from './Statistic.module.css';

const Statistic = ({stats, title}) => {
  return (
    <section className={css.statistics}>
    <h2 className={css.title}>{title}</h2>
      <ul className={css.list}>


        {stats.map(stat => {
          <li className={css.item}>
            <span className={css.label} key={stats.id}>{stats.label}</span>
            <span className={css.percentage}>{stats.percentage}</span>
          </li>
        })}


      </ul>
    </section>
  )
}

export default Statistic;
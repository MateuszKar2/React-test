import css from './Statistic.module.css';
import PropTypes from 'prop-types';

const Statistic = ({stats, title}) => {
  return (
    <section className={css.statistics}>
    <h2 className={css.title}>{title}</h2>
      <ul className={css.list}>


        {
        stats.map(el => {
          return(
          <li className={css.item} key={el.id}>
            <span className={css.label}>{el.label}</span>
            <span className={css.percentage}>{el.percentage}%</span>
          </li>
          )
        })
        }


      </ul>
    </section>
  )
}

export default Statistic;

PropTypes.Statistic = {
  id: PropTypes.number,
  label: PropTypes.string,
  percentage: PropTypes.number, 
};
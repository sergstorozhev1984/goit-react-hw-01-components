import PropTypes from 'prop-types';
import css from './Statistics.module.css';
function random(){
    
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    return randomColor;
}
export const Statistics = ({ title, stats }) => {
//   console.log(stats);
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(({id, label, percentage}) => {
          return (
            <li key={id} className={css.item} style={{
                backgroundColor: `${random()}`,
            }}>
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired   
    ).isRequired,   
}

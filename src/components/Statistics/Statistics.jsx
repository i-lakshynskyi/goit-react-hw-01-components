import s from './statistics.module.scss';
import PropTypes from 'prop-types';

const defaultProps = {
  title: 'Upload stats',
  stats: [{
    id: 'id',
    label: 'label',
    percentage: 0,
  }],
};

function Statistics({ title, stats = defaultProps.stats }) {

  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(item =>
          <li className={s.item} key={item.id}>
            <span className={s.label}>{item.label}</span>
            <span className={s.percentage}>{item.percentage}%</span>
          </li>,
        )}
      </ul>
    </section>
  );
}

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })),
};

export default Statistics;

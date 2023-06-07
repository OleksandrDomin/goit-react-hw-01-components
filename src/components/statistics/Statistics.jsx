import PropTypes from "prop-types";
import css from "./statistics.module.css"


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}; 
   
function Statistics({stats, title}) {
  return (
    <section className={css.statistics}>
 {title && <h2 className={css.title} >{title}</h2>} 
      
    <ul className={css.stat_list}>
              
        {stats.map(stats => (<li key={stats.id} className={css.item} style={{backgroundColor: getRandomHexColor() }}>
      <span className={css.label}>{stats.label}</span>
      <span className={css.percentage}>{stats.percentage}</span>
    </li>))}
</ul>
</section>
  )
};

Statistics.protoType = {
    id:PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
   percentage: PropTypes.number.isRequired
};


export default Statistics;
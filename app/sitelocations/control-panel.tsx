import * as React from 'react';

function ControlPanel(props) {
  const {year} = props;

  return (
    <div className="control-panel">
      <h3>Interactive GeoJSON</h3>
      <p>
        Map showing median household income by state in year <b>{year}</b>. Hover over a state to
        see details.
      </p>
      <p>
        Data source: <a href="www.census.gov">US Census Bureau</a>
      </p>
      <div className="source-link">
        <a
          href="https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_RMI/sitelocation_odds_2.geojson"
          target="_new"
        >
          View Code ↗
        </a>
      </div>
      <hr />

      <div key={'year'} className="input">
        <label>Year</label>
        <input
          type="range"
          value={year}
          min={1995}
          max={2015}
          step={1}
          onChange={evt => props.onChange(evt.target.value)}
        />
      </div>
    </div>
  );
}

export default React.memo(ControlPanel);
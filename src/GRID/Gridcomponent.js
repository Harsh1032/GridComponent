import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';

class Gridcomponent extends Component {
  render() {
    const { rowColumns, children, spacing } = this.props;

    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      gap: `${spacing}px`,
    };

    const itemStyle = (flexBasis) => ({
      flexBasis,
      margin: `${spacing}px 0`, // Adjusting spacing for each item
      boxSizing: 'border-box',
    });

    let childIndex = 0;

    return (
      <Grid container style={containerStyle}>
        {rowColumns.map((row, rowIndex) => (
          <div className="row" key={rowIndex} style={{ display: 'flex', width: '100%' }}>
            {Array.from({ length: row.columnCount }).map((_, colIndex) => {
              const child = children[childIndex % children.length];
              const flexBasis = `${(row.sizes[colIndex] / 12) * 100}%`;
              childIndex += 1;

              return (
                <Grid item key={`${rowIndex}-${colIndex}`} style={itemStyle(flexBasis)}>
                  {child || null} {/* Display child if exists, else null */}
                </Grid>
              );
            })}
          </div>
        ))}
      </Grid>
    );
  }
}

Gridcomponent.propTypes = {
  rowColumns: PropTypes.arrayOf(
    PropTypes.shape({
      columnCount: PropTypes.number.isRequired,
      sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
    })
  ).isRequired,
  children: PropTypes.node.isRequired,
  spacing: PropTypes.number,
};

Gridcomponent.defaultProps = {
  spacing: 8, // Default spacing value
};

export default Gridcomponent;

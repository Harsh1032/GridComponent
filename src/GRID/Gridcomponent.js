// src/Grid/Gridcomponent.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import { styled } from '@mui/system';

class Gridcomponent extends Component {
  render() {
    const { rowColumns, children, spacing } = this.props;

    const GridContainerStyled = styled(Grid)({
      display: 'flex',
      flexDirection: 'column',
      gap: `${spacing}px`,
    });

    const GridItemStyled = styled(Grid)(({ flexBasis }) => ({
      flexBasis,
      margin: `${spacing}px 0`, // Adjusting spacing for each item
      boxSizing: 'border-box',
    }));

    let childIndex = 0;

    return (
      <GridContainerStyled container>
        {rowColumns.map((row, rowIndex) => (
          <div className="row" key={rowIndex} style={{ display: 'flex', width: '100%' }}>
            {Array.from({ length: row.columnCount }).map((_, colIndex) => {
              const child = children[childIndex % children.length];
              const flexBasis = `${(row.sizes[colIndex] / 12) * 100}%`;
              childIndex += 1;

              return (
                <GridItemStyled
                  key={`${rowIndex}-${colIndex}`}
                  flexBasis={flexBasis}
                  item
                >
                  {child || null} {/* Display child if exists, else null */}
                </GridItemStyled>
              );
            })}
          </div>
        ))}
      </GridContainerStyled>
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

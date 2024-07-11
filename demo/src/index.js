import React, {Component} from 'react'
import { createRoot } from 'react-dom/client';
import Gridcomponent from '../../src/GRID/Gridcomponent'

export default class Demo extends Component {
  render() {
    const rowColumns = [
      { columnCount: 2, sizes: [4, 8] },
      { columnCount: 1, sizes: [12] },
      { columnCount: 3, sizes: [4, 4, 4] },
    ];

    return (
      <div>
        <h1>Custom Grid Example</h1>
        <Gridcomponent rowColumns={rowColumns}>
          <div style={{ backgroundColor: 'blue' }}>Item 1</div>
          <div style={{ backgroundColor: 'red' }}>Item 2</div>
        </Gridcomponent>
      </div>
    )
    
  }
}

const container = document.getElementById('demo');
const root = createRoot(container);

root.render(<Demo />);

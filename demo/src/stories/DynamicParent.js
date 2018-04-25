import React from 'react'

//

import ChartConfig from './components/ChartConfig'

import { Chart, Axis, Series, Tooltip, Line, Cursor } from '../../../src'

export default () => (
  <ChartConfig resizable={false}>
    {({ data }) => (
      <div
        style={{
          width: '500px',
          display: 'flex',
          flexDirection: 'column',
          padding: '12px',
          border: '2px solid black',
          height: '400px',
          overflow: 'auto',
        }}
      >
        <div
          style={{
            flex: '0 0 auto',
            padding: '10px',
            border: '1px solid red',
          }}
        >
          Header
        </div>
        <div
          style={{
            flex: 2,
            border: '5px solid blue',
            padding: '20px',
            maxHeight: '400px',
            margin: '10px',
            boxSizing: 'border-box',
          }}
        >
          <Chart data={data}>
            <Axis primary type="time" position="bottom" />
            <Axis type="linear" position="left" />
            <Series type={Line} />
            <Cursor primary />
            <Cursor />
            <Tooltip />
          </Chart>
        </div>
      </div>
    )}
  </ChartConfig>
)
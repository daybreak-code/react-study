import { useRef, useEffect } from 'react'
import * as echarts from 'echarts'

const BarChart = ({ xData, sData, style = { width: '400px', height: '300px' } }) => {
    const chartRef = useRef(null)
    useEffect(() => {
      const myChart = echarts.init(chartRef.current)
      const option = {
        xAxis: {
          type: 'category',
          data: xData
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: sData,
            type: 'bar'
          }
        ]
      }
      myChart.setOption(option)
    }, [sData, xData])
    return <div ref={chartRef} style={style}></div>
  }

export { BarChart }
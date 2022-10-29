// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from 'chart.js/auto'
import { Line } from 'react-chartjs-2'
import PropTypes, { number } from 'prop-types'

import Headline from '../Headline/Headline'

function LineChart({ width, height, playerA, playerB, title }) {
  const data = {
    labels: playerA.data.map((_, i) => `Game ${i + 1}`),
    datasets: [
      {
        ...playerA,
        fill: false,
        borderColor: '#7dfaa4',
        tension: 0.4,
      },
      {
        ...playerB,
        fill: false,
        borderColor: '#53bcf9',
        tension: 0.4,
      },
    ],
  }

  return (
    <div
      style={{
        height,
        width,
      }}
    >
      <Headline text={title} textAlign="center" />
      <Line
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
            },
            legend: {
              display: true,
              position: 'top',
            },
          },
        }}
      />
    </div>
  )
}

export default LineChart

LineChart.defaultProps = {
  width: '100%',
  height: '100%',
  title: 'KDA',
}

LineChart.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  playerA: PropTypes.objectOf({ title: PropTypes.string, data: PropTypes.arrayOf(number) }).isRequired,
  playerB: PropTypes.objectOf({ title: PropTypes.string, data: PropTypes.arrayOf(number) }).isRequired,
  title: PropTypes.string,
}

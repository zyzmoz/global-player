import { Doughnut } from 'react-chartjs-2'
import PropTypes, { number } from 'prop-types'

import Headline from '../Headline/Headline'

function DoughnutChart({ width, height, winRate, title }) {
  const data = {
    labels: ['Win', 'Loss'],
    datasets: [
      {
        ...winRate,
        backgroundColor: ['#53bcf9', '#402cac'],
        borderWidth: 0,
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
      <Doughnut data={data} />
    </div>
  )
}

export default DoughnutChart

DoughnutChart.defaultProps = {
  width: '100%',
  height: '100%',
  title: 'Win Rate',
}

DoughnutChart.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  winRate: PropTypes.objectOf({ title: PropTypes.string, data: PropTypes.arrayOf(number) }).isRequired,
  title: PropTypes.string,
}

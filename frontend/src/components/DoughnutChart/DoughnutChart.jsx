import { Doughnut } from 'react-chartjs-2'
import PropTypes, { number } from 'prop-types'
import Colors from '../../sass/variables/_colors.scss'

import BodyText from '../BodyText/BodyText'

function DoughnutChart({ width, height, playerData, title, winRate }) {
  const data = {
    labels: [],
    datasets: [
      {
        ...playerData,
        backgroundColor: [`${Colors.secondaryColorSkyBlue}`, `${Colors.primaryColorDeepPurple}`],
        borderWidth: 0,
      },
    ],
  }

  return (
    <div
      className="doughnut-chart"
      style={{
        height,
        width,
      }}
    >
      <BodyText text={title} textAlign="center" color={Colors.primaryColorBrightGreen} />
      <Doughnut data={data} options={{ cutout: '63%' }} />
      <div id="winrate">
        <BodyText text={`${winRate}%`} textAlign="center" />
      </div>
    </div>
  )
}

export default DoughnutChart

DoughnutChart.defaultProps = {
  width: '100%',
  height: '100%',
  title: '',
  winRate: '0',
}

DoughnutChart.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  playerData: PropTypes.objectOf({ title: PropTypes.string, data: PropTypes.arrayOf(number) }).isRequired,
  title: PropTypes.string,
  winRate: PropTypes.string,
}

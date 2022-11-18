// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from 'chart.js/auto'
import { Line } from 'react-chartjs-2'
import PropTypes, { number } from 'prop-types'
import Colors from '../../sass/variables/_colors.scss'
import Headline from '../Headline/Headline'
import Avatar from '../Avatar/Avatar'
import BodyText from '../BodyText/BodyText'

function LineChart({ width, height, playerA, playerB, title, player1SummonerIcon, player2SummonerIcon }) {
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
      className="line-chart"
    >
      <div className="linechart-headline-labels-wrapper">
        <Headline text={title} textAlign="center" color={Colors.primaryColorBrightGreen} />
        <div className="labels-wrapper">
          <div className="label">
            <Avatar summonerIcon={player1SummonerIcon} avatarHeight="48px" avatarWidth="48px" />
            <BodyText text={playerA?.label} />
            <span className="player1-label-span" />
          </div>
          <div className="label">
            <Avatar summonerIcon={player2SummonerIcon} avatarHeight="48px" avatarWidth="48px" />
            <BodyText text={playerB?.label} />
            <span className="player2-label-span" />
          </div>
        </div>
      </div>
      <div className="linechart-container">
        <div className="linechart-wrapper">
          <Line
            data={data}
            options={{
              plugins: {
                legend: {
                  display: false,
                },
              },
              layout: {
                padding: {
                  bottom: 130,
                  right: 20,
                  left: 20,
                },
              },
              responsive: true,
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default LineChart

LineChart.defaultProps = {
  width: '100%',
  height: '100%',
  title: 'KDA',
  player1SummonerIcon: '',
  player2SummonerIcon: '',
}

LineChart.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  playerA: PropTypes.objectOf({ title: PropTypes.string, data: PropTypes.arrayOf(number) }).isRequired,
  playerB: PropTypes.objectOf({ title: PropTypes.string, data: PropTypes.arrayOf(number) }).isRequired,
  title: PropTypes.string,
  player1SummonerIcon: PropTypes.string,
  player2SummonerIcon: PropTypes.string,
}

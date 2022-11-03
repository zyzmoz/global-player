import PropTypes, { number } from 'prop-types'
import { Radar } from 'react-chartjs-2'
import Colors from '../../sass/variables/_colors.scss'

function RadarChart({ width, height, playerSkills }) {
  const data = {
    labels: [`Farming`, `Dueling`, `Timing`, `Picking`, `Deffensive`, `Roaming`],
    datasets: [
      {
        ...playerSkills,
        fill: true,
        backgroundColor: Colors.secondaryColorSkyBlue,
        borderColor: Colors.primaryColorBrightGreen,
        pointBackgroundColor: Colors.secondaryColorSkyBlue,
        pointBorderColor: Colors.primaryColorBrightGreen,
        pointHoverBackgroundColor: Colors.primaryColorBrightGreen,
        pointHoverBorderColor: Colors.secondaryColorSkyBlue,
        radius: 4,
        pointBorderWidth: 2,
      },
    ],
  }

  return (
    <div
      className="radarchart"
      style={{
        height,
        width,
      }}
    >
      <Radar
        data={data}
        options={{
          layout: {},
          plugins: {
            legend: {
              position: 'top',
              align: 'center',
              fontSize: 8,
              labels: {
                boxWidth: 0,
                color: 'white',
                font: {
                  size: 0,
                },
              },
            },
          },
          scales: {
            r: {
              beginAtZero: true,
              max: 10,
              pointLabels: {
                padding: 15,
                color: 'white',
                font: {
                  size: 14,
                },
              },
              angleLines: {
                color: Colors.primaryColorBrightGreen,
                lineWidth: 2,
              },
              grid: {
                display: true,
                lineWidth: 2,
                color: Colors.primaryColorBrightGreen,
              },
              ticks: {
                display: false,
                stepSize: 10,
              },
            },
          },
        }}
      />
    </div>
  )
}

export default RadarChart

RadarChart.defaultProps = {
  width: '100%',
  height: '100%',
}

RadarChart.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  playerSkills: PropTypes.objectOf({ title: PropTypes.string, data: PropTypes.arrayOf(number) }).isRequired,
}

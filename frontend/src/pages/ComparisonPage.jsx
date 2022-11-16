import { useNavigate } from 'react-router-dom'
import Headline from '../components/Headline/Headline'
import Sidebar from '../components/Sidebar/Sidebar'
import RecruitersPagesNavMenu from '../components/Header/RecruitersPagesNavMenu'
import Header from '../components/Header/Header'
import Card from '../components/Card/Card'
import Avatar from '../components/Avatar/Avatar'
import BodyText from '../components/BodyText/BodyText'
import Colors from '../sass/variables/_colors.scss'
import Footer from '../components/Footer/Footer'
import { UserIcon, CrossIcon, CompareIcon, AddIcon } from '../components/Icon/icons'

function ComparisonPage() {
  const navigate = useNavigate()

  const navigateToComparisonSelect = () => {
    navigate('/player-comparison-select-page')
  }

  return (
    <div className="comparison-page">
      <RecruitersPagesNavMenu className="nav-side-menu" />
      <Header />
      <Sidebar />
      <div className="main-contents">
        <div className="userIcon-wrapper">
          <UserIcon className="userIcon" fill={Colors.primaryColorBrightGreen} />
        </div>
        <Headline text="Player Comparison" color={Colors.primaryColorBrightGreen} textAlign="center" fontSize="2rem" />
        <div className="comparison-cards-container">
          <Card>
            <div className="cross-icon-container">
              <CrossIcon className="crossIcon" fill={Colors.primaryColorBrightGreen} />
            </div>
            <div className="card-content-container">
              <Headline text="Draven" color={Colors.primaryColorBrightGreen} />
              <Avatar />
              <Headline text="Grandmaster" />
              <div className="kda-wrapper">
                <BodyText text="KDA" color={Colors.primaryColorBrightGreen} />
                <BodyText text="7.1 / 7.4 / 9/7" />
              </div>
              <div className="pkill-wrapper">
                <BodyText text="2.27:1" />
                <BodyText text="P/Kill 55%" />
              </div>
              <BodyText text="Matches: 20" color={Colors.primaryColorBrightGreen} />
            </div>
          </Card>
          <div className="comparisonIcon-wrapper">
            <span className="border1-around-compareIcon" />
            <CompareIcon className="compareIcon" fill={Colors.primaryColorBrightGreen} />
            <span className="border2-around-compareIcon" />
          </div>
          <Card>
            <div className="add-card-container">
              <span className="span1" />
              <span className="span2" />
              <div className="addicon-container">
                <AddIcon onClick={navigateToComparisonSelect} className="addIcon" fill="white" />
              </div>
              <BodyText text="Add Player" textAlign="center" />
              <span className="span3" />
              <span className="span4" />
            </div>
          </Card>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default ComparisonPage

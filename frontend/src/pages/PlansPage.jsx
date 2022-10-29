import Header from '../components/Header/Header'
import LandingPageNavMenu from '../components/Header/LandingPageNavMenu'
import Headline from '../components/Headline/Headline'
import BodyText from '../components/BodyText/BodyText'
import Card from '../components/Card/Card'
import Button from '../components/Button/Button'
import Footer from '../components/Footer/Footer'
import { CompareIcon, ReviewIcon, Stats1Icon, UserIcon } from '../components/Icon/icons'

import Colors from '../sass/variables/_colors.scss'

function PlansPage() {
  return (
    <div className="plans-page">
      <LandingPageNavMenu className="nav-side-menu" />
      <div className="plans-page-container">
        <Header />

        <Headline text="Enterprise Plans" color="" fontSize="" textAlign="" />
        <BodyText textAlign="center" text="Get access to customized data for recruiters, team owners and coaches" />

        <div className="plan-card-container">
          <Card>
            <Headline text="Scouting Essentials" textAlign="center" color="" fontSize="medium" />
            <Headline text="$29.99 /mo" color="" fontSize="" textAlign="" />
            <Button text="Get Started" />

            <ul>
              <li>Contact 5 players per month</li>
              <li>Add 10 Favorite Players</li>
              <li>Add 10 Skills and Reviews</li>
              <li>Compare Players</li>
            </ul>
          </Card>
          <Card>
            <Headline text="Scouting Premium" textAlign="center" color="" fontSize="medium" />
            <Headline text="$59.99 /mo" color="" fontSize="" textAlign="" />
            <Button text="Get Started" />

            <ul>
              <li>
                Contact <b>unlimited</b> players per month
              </li>
              <li>
                Add <b>unlimited</b> Favorite Players
              </li>
              <li>
                Add <b>unlimited</b> Skills and Reviews
              </li>
              <li>Compare Players</li>
            </ul>
          </Card>
        </div>

        <div className="plan-info">
          <BodyText text="7-day refund policy across our paid plans." textAlign="center" />

          <Button text="Start 15 days trial here" />

          <Headline text="Why Choose Global Player?" color="" textAlign="center" />

          <div className="plan-info-icons">
            <div className="plan-info-wrapper">
              <div className="plan-icon-container">
                <div className="plan-icon-wrapper">
                  <Stats1Icon
                    height={75}
                    width={75}
                    style={{
                      fill: Colors.primaryColorBrightGreen,
                    }}
                  />
                </div>
              </div>
              <BodyText text="Relevant Data" textAlign="center" />
            </div>
            <div className="plan-info-wrapper">
              <div className="plan-icon-container">
                <div className="plan-icon-wrapper">
                  <CompareIcon
                    height={75}
                    width={75}
                    style={{
                      fill: Colors.primaryColorBrightGreen,
                    }}
                  />
                </div>
              </div>
              <BodyText text="Compare players' performance" textAlign="center" />
            </div>
            <div className="plan-info-wrapper">
              <div className="plan-icon-container">
                <div className="plan-icon-wrapper">
                  <ReviewIcon
                    height={75}
                    width={75}
                    style={{
                      fill: Colors.primaryColorBrightGreen,
                    }}
                  />
                </div>
              </div>
              <BodyText text="Review Gaming skills" textAlign="center" />
            </div>
            <div className="plan-info-wrapper">
              <div className="plan-icon-container">
                <div className="plan-icon-wrapper">
                  <UserIcon
                    height={75}
                    width={75}
                    style={{
                      fill: Colors.primaryColorBrightGreen,
                    }}
                  />
                </div>
              </div>
              <BodyText text="Contact Pro Players" textAlign="center" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PlansPage

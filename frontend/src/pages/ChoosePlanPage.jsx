import { NavLink } from 'react-router-dom'
import HeaderCreateAccount from '../components/Header/HeaderCreateAccount'
import LandingPageNavMenu from '../components/Header/LandingPageNavMenu'
import Headline from '../components/Headline/Headline'
import BodyText from '../components/BodyText/BodyText'
import Card from '../components/Card/Card'
import Footer from '../components/Footer/Footer'
import { CompareIcon, ReviewIcon, Stats1Icon, UserIcon } from '../components/Icon/icons'

import Colors from '../sass/variables/_colors.scss'

function PlansPage() {
  return (
    <div className="plans-page">
      <LandingPageNavMenu className="nav-side-menu" />
      <div className="plans-page-container">
        <div className="header-choose-plan">
          <HeaderCreateAccount />
        </div>
        <Headline text="Enterprise Plans" color="" fontSize="" textAlign="" />
        <BodyText textAlign="center" text="Get access to customized data for recruiters, team owners and coaches" />

        <div className="plan-card-container">
          <Card>
            <Headline text="Essentials" textAlign="center" color="#53BCF9" fontSize="36px" />
            <Headline text="$299 /mo" color="" fontSize="" textAlign="" />
            <div className="get-started-link">
              <NavLink to="/create-account">Get Started</NavLink>
            </div>

            <ul>
              <li>Contact 5 players per month</li>
              <li>Add 10 Favorite Players</li>
              <li>Add 10 Skills and Reviews</li>
              <li>Compare Players</li>
            </ul>
          </Card>
          <Card>
            <Headline text="Premium" textAlign="center" color="#53BCF9" fontSize="36px" />
            <Headline text="$599 /mo" color="" fontSize="" textAlign="" />
            <div className="get-started-link">
              <NavLink to="/create-account">Get Started</NavLink>
            </div>

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
          <Card>
            <Headline text="Basic" textAlign="left" color="#53BCF9" fontSize="36px" />
            <ul>
              <li>Check top 3 players</li>
              <li>Check players ranking</li>
            </ul>
            <NavLink to="/create-account" className="create-free-account">
              Continue for free
            </NavLink>
          </Card>
        </div>

        <div className="plan-info">
          <Headline text="Why Choose Global Player?" color="white" textAlign="center" fontSize="40px" />

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

import Header from '../components/Header/Header'
import LandingPageNavMenu from '../components/Header/LandingPageNavMenu'
import { CrossIcon, DeleteIcon, DownIcon } from '../components/Icon/icons'
import Headline from '../components/Headline/Headline'
import Input from '../components/Input/Input'
import Button from '../components/Button/Button'
import BodyText from '../components/BodyText/BodyText'
import Avatar from '../components/Avatar/Avatar'
import Footer from '../components/Footer/Footer'
import Colors from '../sass/variables/_colors.scss'

function PlayerComparisonSelectPage() {
  return (
    <div className="player-comparison-select-page-wrapper">
      <LandingPageNavMenu className="nav-side-menu" />
      <div className="player-comparison-select-page-container-1">
        <div className="player-comparison-select-page-container-2">
          <Header />

          <div className="title-cross-icon-container">
            <button type="button" className="close-btn no-background-btn">
              <CrossIcon fill={Colors.primaryColorBrightGreen} />
            </button>
            <Headline text="Compare" textAlign="center" color={Colors.primaryColorBrightGreen} fontSize="32px" />
          </div>

          <main>
            <section className="search-players-wrapper">
              <div className="versus-divider">
                <div className="vr-divider" />
                <Headline text="VS" color={Colors.primaryColorBrightGreen} fontSize="vs-size" />
                <div className="vr-divider" />
              </div>
              <div className="input-player-container-1">
                <Input
                  color={Colors.primaryColorBrightGreen}
                  placeholder="Type or select a player"
                  className="input-add-player"
                />
                <button type="button" className="add-input-btn no-background-btn">
                  <DeleteIcon fill={Colors.primaryColorBrightGreen} />
                </button>
              </div>

              <div className="input-player-container-2">
                <Input placeholder="Type or select a player" />
                <button type="button" className="add-input-btn no-background-btn">
                  <DeleteIcon fill={Colors.primaryColorBrightGreen} />
                </button>
              </div>
            </section>

            <section className="add-player-wrapper">
              <BodyText text="Often compared with..." color={Colors.secondaryColorSkyBlue} textAlign="left" />
              <div className="avatar-name-container-btn">
                <div className="avatar-name-container">
                  <Avatar rolePlay="" />
                  <BodyText text="Summoner Name" color={Colors.secondaryColorSkyBlue} />
                </div>
                <button
                  type="button"
                  className="add-vs-btn no-background-btn"
                  style={{ color: Colors.primaryColorBrightGreen }}
                >
                  + VS
                </button>
              </div>
              <div className="avatar-name-container-btn">
                <div className="avatar-name-container">
                  <Avatar rolePlay="" />
                  <BodyText text="Summoner Name" color={Colors.secondaryColorSkyBlue} />
                </div>
                <button
                  type="button"
                  className="add-vs-btn no-background-btn"
                  style={{ color: Colors.primaryColorBrightGreen }}
                >
                  + VS
                </button>
              </div>
              <div className="avatar-name-container-btn">
                <div className="avatar-name-container">
                  <Avatar rolePlay="" />
                  <BodyText text="Summoner Name" color={Colors.secondaryColorSkyBlue} />
                </div>
                <button
                  type="button"
                  className="add-vs-btn no-background-btn"
                  style={{ color: Colors.primaryColorBrightGreen }}
                >
                  + VS
                </button>
              </div>
              <div className="avatar-name-container-btn">
                <div className="avatar-name-container">
                  <Avatar rolePlay="" />
                  <BodyText text="Summoner Name" color={Colors.secondaryColorSkyBlue} />
                </div>
                <button
                  type="button"
                  className="add-vs-btn no-background-btn"
                  style={{ color: Colors.primaryColorBrightGreen }}
                >
                  + VS
                </button>
              </div>

              <div className="avatar-name-container-btn hide-til-activate">
                <div className="avatar-name-container">
                  <Avatar rolePlay="" />
                  <BodyText text="Summoner Name" color={Colors.secondaryColorSkyBlue} />
                </div>
                <button
                  type="button"
                  className="add-vs-btn no-background-btn"
                  style={{ color: Colors.primaryColorBrightGreen }}
                >
                  + VS
                </button>
              </div>
              <div className="avatar-name-container-btn hide-til-activate">
                <div className="avatar-name-container">
                  <Avatar rolePlay="" />
                  <BodyText text="Summoner Name" color={Colors.secondaryColorSkyBlue} />
                </div>
                <button
                  type="button"
                  className="add-vs-btn no-background-btn"
                  style={{ color: Colors.primaryColorBrightGreen }}
                >
                  + VS
                </button>
              </div>
              <div className="avatar-name-container-btn hide-til-activate">
                <div className="avatar-name-container">
                  <Avatar rolePlay="" />
                  <BodyText text="Summoner Name" color={Colors.secondaryColorSkyBlue} />
                </div>
                <button
                  type="button"
                  className="add-vs-btn no-background-btn"
                  style={{ color: Colors.primaryColorBrightGreen }}
                >
                  + VS
                </button>
              </div>
              <div className="avatar-name-container-btn hide-til-activate">
                <div className="avatar-name-container">
                  <Avatar rolePlay="" />
                  <BodyText text="Summoner Name" color={Colors.secondaryColorSkyBlue} />
                </div>
                <button
                  type="button"
                  className="add-vs-btn no-background-btn"
                  style={{ color: Colors.primaryColorBrightGreen }}
                >
                  + VS
                </button>
              </div>

              <button type="button" className="down-btn no-background-btn">
                <DownIcon fill={Colors.primaryColorBrightGreen} />
              </button>
              <Button text="Compare" />
            </section>
          </main>

          <Footer />
        </div>
      </div>
    </div>
  )
}

export default PlayerComparisonSelectPage

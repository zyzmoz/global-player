import LandingPageNavMenu from '../components/Header/LandingPageNavMenu'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Headline from '../components/Headline/Headline'
import Accordion from '../components/Accordion/Accordion'

function FaqPage() {
  return (
    <div className="faqpage">
      <LandingPageNavMenu className="nav-side-menu" />
      <div className="faqpage-container">
        <Header />
        <main className="faqpage-main">
          <Headline text="FAQ" textAlign="center" color="#7DFAA4" className="faqh1" />
          <div className="accordion-containers">
            <Accordion
              className="accordion-wrapper"
              fullText="Go inside your settings account on the account icon and select to change your plan, select the plan you’d like to be a part of and pay the difference if needed. The plan can also be updated by clicking on the button “Upgrade plan” on the main menu on the left of the screen."
              headerText="How can I change my plan?"
            />
            <Accordion
              className="accordion-wrapper"
              fullText="Unfortunelly now Global Player is not accepting password changes. Keep updated in this page when we release this feature."
              headerText="How can I update my password?"
            />
            <Accordion
              className="accordion-wrapper"
              fullText="Log in your account and on left side you will find the sidebar, in there you can choose compare players options. Inside the page you add a player, and then a second one and click on the button compare players to compare then."
              headerText="How can I compare players?"
            />
            <Accordion
              className="accordion-wrapper"
              fullText="Inside the dashboard choose a player and then you can click on the skills part the button called show more, inside show more you can scroll down and see add new review button. Fill the form and submit it for a new review."
              headerText="How can I write a review?"
            />
            <Accordion
              className="accordion-wrapper"
              fullText="If you open a player profile, you can click on the contact player button and it will take you to the form to send an email to the player."
              headerText="Is it possible to contact players?"
            />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default FaqPage

import BodyText from '../components/BodyText/BodyText'
import Input from '../components/Input/Input'
import Header from '../components/Header/Header'
import LandingPageNavMenu from '../components/Header/LandingPageNavMenu'
import Footer from '../components/Footer/Footer'
import { AddIcon } from '../components/Icon/icons'
import Avatar from '../components/Avatar/Avatar'
import Table from '../components/Table/Table'
import TableHeader from '../components/Table/TableHeader'
import TableItem from '../components/Table/TableItem'
import Card from '../components/Card/Card'
import Tag from '../components/Tag/Tag'
import LineChart from '../components/LineChart/LineChart'
import DoughnutChart from '../components/DoughnutChart/DoughnutChart'
import Accordion from '../components/Accordion/Accordion'
import Toast from '../components/Toast/Toast'
import RadarChart from '../components/RadarChart/RadarChart'

function Storybook() {
  return (
    <div className="App">
      <LandingPageNavMenu className="nav-side-menu" />
      <div className="main-wrapper">
        <Header />
        <div className="body-text">
          <h1>BodyText Component</h1>
          <h2>Props:</h2>
          <ul>
            <li>color: a color as HEX(#ffffff) or text(hotpink)</li>
            <li>fontSize: large | medium | small | x-small</li>
            <li>textAlign: left | center | right</li>
            <li>text: Text to be rendered</li>
          </ul>
          <BodyText text="Hotpink" textAlign="left" color="hotpink" fontSize="large" />
        </div>
        <hr />
      </div>
      <hr />
      <div className="input-component">
        <h1>Input Component</h1>
        <h2>Props:</h2>
        <ul>
          <li>placeholder: Placeholder text</li>
          <li>defaultValue: Default Value</li>
          <li>onChange: OnChange Function</li>
          <li>label: Label</li>
          <li>type: password | text | number</li>
          <li>text: Value</li>
        </ul>
        <Input label="This is a label" placeholder="Type your text" onChange={(e) => e} />
      </div>
      <hr />

      <div className="icon-component">
        <h1>Icon Component</h1>
        <h2>Props:</h2>

        <ul>
          <li>fill: color</li>
          <li>stroke: color</li>
        </ul>
        <AddIcon fill="black" stroke="black" />
        <hr />
      </div>

      <div className="avatar-component">
        <h1>Avatar Component</h1>
        <h2>Props:</h2>

        <ul>
          <li>summonerIcon: Image Url</li>
          <li>role: Player position</li>
          <li>alt: Image Alt Text </li>
        </ul>
        <Avatar />
      </div>
      <hr />

      <div className="table-component">
        <h1>Table Component</h1>

        <Table>
          <TableHeader
            headers={[
              { property: 'email', title: 'Email' },
              { property: 'name', title: 'Name' },
            ]}
          />
          {[
            {
              name: 'Daniel',
              email: 'daniel@email.com',
            },
          ].map((item) => (
            <TableItem
              item={item}
              headers={[
                { property: 'email', title: 'Email' },
                { property: 'name', title: 'Name' },
              ]}
            />
          ))}
        </Table>
      </div>
      <hr />
      <div className="card-component">
        <h1>Card Component</h1>
        <h2>Props:</h2>
        <Card>
          <Avatar />
        </Card>
      </div>
      <hr />
      <div className="linechart-component">
        <h1>LineChart Component</h1>
        <h2>Props:</h2>
        <LineChart
          width="400px"
          height="400px"
          playerA={{
            label: 'Player A',
            data: [8, 3, 2, 2.17, 1, 0.5, 4.75],
          }}
          playerB={{
            label: 'Player B',
            data: [1.9, 4.57, 1.46, 4, 3, 1, 1.57],
          }}
        />
      </div>
      <hr />
      <div className="doughnutchart-component">
        <h1>DoughnutChart Component</h1>
        <h2>Props:</h2>
        <DoughnutChart
          width="300px"
          height="300px"
          winRate={{
            data: [5, 4],
          }}
        />
        <div className="radarchart-component">
          <h1>RadarChart Component</h1>
          <h2>Props:</h2>
          <RadarChart width="350px" height="auto" playerSkills={{ data: [8, 6, 7, 6, 6, 8] }} />
        </div>
      </div>
      <hr />
      <Accordion
        headerText="How can I change my plan?"
        fullText="Go inside your settings account on the account icon and select to change your plan, select the plan you’d like to be a part of and pay the difference if needed. The plan can also be updated by clicking on the button “Upgrade plan” on the main menu on the left of the screen."
      />
      <Accordion
        headerText="How can I update my password?"
        fullText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non porta felis. Aliquam augue leo, scelerisque sit amet rutrum a, gravida sed augue. Donec congue venenatis lacus, nec consectetur dolor commodo non. Donec sed aliquet lorem. Phasellus eu mi ligula."
      />

      <Toast
        className="toast-wrapper"
        pageRoute="landingpage"
        headlineToast="Welcome to Global Player !"
        bodyToast="Your account has been created"
        buttonTextToast="Let's go to Landinpage!"
      />
      <Footer />
      <Tag text="Deffensive" reviews="25" />
    </div>
  )
}

export default Storybook

import BodyText from '../components/BodyText/BodyText'
import Input from '../components/Input/Input'
import Header from '../components/Header/Header'
import LandingPageNavMenu from '../components/Header/LandingPageNavMenu'
import { AddIcon } from '../components/Icon/icons'

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
        <Input
          label="This is a label"
          placeholder="Type your text"
          onChange={(e) => console.log(e.target.value)}
          defaultValue="test"
        />
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
      </div>
      <hr />
    </div>
  )
}

export default Storybook

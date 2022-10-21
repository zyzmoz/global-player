import BodyText from '../components/BodyText/BodyText'
import Input from '../components/Input/Input'

function Storybook() {
  return (
    <div className="App">
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
    </div>
  )
}

export default Storybook

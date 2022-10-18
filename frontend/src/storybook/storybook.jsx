import BodyText from '../components/BodyText/BodyText'

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
    </div>
  )
}

export default Storybook

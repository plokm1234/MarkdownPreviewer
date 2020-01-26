import React, { Component } from "react";
import "./App.css";
import marked from "marked";
const initialMarkdown = `
### Headers

# Header 1
## Header 2

### List

- list item one
- list item two

### Links
[FreeCodeCamp](https://learn.freecodeCamp.com)

### Text Decorations

**bold**


### Blockquote

> To be, or not to be. That is a stupid question.

### Inline Code

\`\`\`
function addTwoNumbers(a,b){
  return a+b;
}
\`\`\`

### Code Block
\`npm install create-react-app\`

### Images

![React Logo](https://goo.gl/Umyytc)
`;

marked.setOptions({
  breaks: true
});
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: initialMarkdown
    };
  }

  handleChange = e => {
    this.setState({
      markdown: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <div className="left">
          <h1>Markdown Input</h1>
          <textarea
            id="editor"
            value={this.state.markdown}
            onChange={this.handleChange}
          ></textarea>
        </div>

        <div className="right">
          <h1>Markdown Output</h1>
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}
          />
        </div>
      </div>
    );
  }
}

export default App;

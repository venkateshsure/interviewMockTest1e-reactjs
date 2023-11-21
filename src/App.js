import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {Component} from 'react'
import './App.css'

import {
  Con,
  InnerCon,
  SecCon,
  SecInnerCon,
  Head,
  Button,
  InnerSecCon,
  Input,
  List,
} from './components/styledComponents'

class App extends Component {
  state = {isBoldActive: false, isItalicActive: false, isUnderlineActive: false}

  onTextChange = e => {
    console.log(e.target.value)
  }

  onBoldChange = e => {
    this.setState(pre => ({
      isBoldActive: !pre.isBoldActive,
    }))
  }

  onItalicChange = e => {
    this.setState(pre => ({
      isItalicActive: !pre.isItalicActive,
    }))
  }

  onUnderlineChange = e => {
    this.setState(pre => ({
      isUnderlineActive: !pre.isUnderlineActive,
    }))
  }

  render() {
    const {isBoldActive, isItalicActive, isUnderlineActive} = this.state
    return (
      <Con>
        <InnerCon>
          <SecInnerCon>
            <Head>Text Editor</Head>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
              className="image-editor"
            />
          </SecInnerCon>
          <InnerSecCon>
            <SecCon>
              <List>
                <Button
                  isActive={isBoldActive}
                  onClick={this.onBoldChange}
                  data-testid="bold"
                >
                  <VscBold size={25} />
                </Button>
              </List>
              <List>
                <Button
                  isActive={isItalicActive}
                  onClick={this.onItalicChange}
                  data-testid="italic"
                >
                  <GoItalic size={25} />
                </Button>
              </List>
              <List>
                <Button
                  isActive={isUnderlineActive}
                  onClick={this.onUnderlineChange}
                  data-testid="underline"
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </List>
            </SecCon>
            <Input
              isBoldActive={isBoldActive}
              isItalicActive={isItalicActive}
              isUnderlineActive={isUnderlineActive}
              rows={20}
              cols={10}
              onChange={this.onTextChange}
            >
              hi
            </Input>
          </InnerSecCon>
        </InnerCon>
      </Con>
    )
  }
}

export default App

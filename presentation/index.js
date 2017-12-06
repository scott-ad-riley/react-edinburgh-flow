// Import React
import React from 'react'

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  S
} from 'spectacle'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

const flow_docs_img = require('../assets/flow_docs.png')
const babelrc_img = require('../assets/babelrc.png')
const coverage = require('../assets/coverage.png')
const import_syntax = require('../assets/new_import.png')
const import_type = require('../assets/import_type.png')
const props_state_generics = require('../assets/props_state_generics.png')
const alias_img = require('../assets/alias.png')

// Require CSS
require('normalize.css')

const theme = createTheme({
  primary: '#1d2223',
  secondary: '#eee',
  tertiary: '#e14164',
}, {
  primary: { name: 'Lato', googleFont: true, styles: ['400', '700'] },
  code: 'monospace'
})

const T = ({ children }) => <Text margin='0 0 50px' bold textColor="secondary">{children}</Text>
const C = ({ children }) => <Text margin='0 0 50px' textColor="secondary" textFont="code">{children}</Text>
const H3 = ({ children }) => <Heading margin='0 0 50px' size={3} textColor="secondary">{children}</Heading>
const H4 = ({ children }) => <Heading margin='0 0 50px' size={4} textColor="secondary">{children}</Heading>

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme}>
        <Slide>
          <Heading textColor="secondary" size={2}>Integrating Flow with React</Heading>
          <Text margin='50px 0 0' textColor='tertiary' size={1} fit bold>
            React Edinburgh December 2017
          </Text>
        </Slide>
        <Slide>
          <H3>Hi!</H3>
          <T>Cultivate</T>
          <T>Deliveroo (Payments Team)</T>
          <T>JavaScript, Elixir, Ruby</T>
        </Slide>
        <Slide>
          <H3>What's Flow?</H3>
        </Slide>
        <Slide>
          <T>
            Static Type Checker for JavaScript
          </T>
          <T>
            Great Type System
          </T>
          <T>
            Very similar to TypeScript
          </T>
          <T>
            One has it's own compiler, the other is uses a babel plugin
          </T>
          <T>
            Written in OCaml
          </T>
        </Slide>
        <Slide>
          <T>
            Great Docs
          </T>
          <Image src={flow_docs_img} />
        </Slide>
        <Slide>
          <H3>Tooling</H3>
        </Slide>
        <Slide>
          <T>Add "flow" preset to your .babelrc</T>
          <Image src={babelrc_img} />
        </Slide>
        <Slide>
          <T>Type `flow init` (generates a .flowconfig for you)</T>
        </Slide>
        <Slide>
          <T>Editor support is great too</T>
          <Image src={coverage} />
        </Slide>
        <Slide>
          <H3>General Type System Stuff</H3>
        </Slide>
        <Slide>
          <H4>You can start aliasing things</H4>
          <Image src={alias_img} />
        </Slide>
        <Slide>
          <H4>External libraries work great too</H4>
          <C>flow/flow-typed</C>
        </Slide>
        <Slide>
          <C>DefinitelyTyped/DefinitelyTyped</C> <T>with</T> <C>joarwilk/flowgen</C>
        </Slide>
        <Slide>
          <H3>React Stuff</H3>
        </Slide>
        <Slide>
          <H4><S type="strikethrough">PropTypes</S></H4>
        </Slide>
        <Slide>
          <T>You get (pre)compile time type checking</T>
        </Slide>
        <Slide>
          <T>swap your imports</T>
          <Image src={import_syntax} />
        </Slide>
        <Slide>
          <T>Put your types in a directory and make them global</T>
          <T>(Just tell flow where that is, in the .flowconfig file)</T>
        </Slide>
        <Slide>
          <T>Or you can import/export them using ES6 import/export syntax</T>
          <Image src={import_type} />
        </Slide>
        <Slide>
          <T>Pass your Props and State in as generics to React.Component</T>
          <T>You get really nice composable `Props` and `State` Objects</T>
        </Slide>
        <Slide>
          <Image src={props_state_generics} />
        </Slide>
      </Deck>
    )
  }
}

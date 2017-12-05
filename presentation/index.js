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
  Text
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme({
  primary: 'white',
  secondary: '#1F2022',
  tertiary: '#03A9FC',
  quarternary: '#CECECE'
}, {
  primary: 'Montserrat',
  secondary: 'Helvetica'
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme}>
        <Slide bgColor='primary'>
          <Heading size={1} fit lineHeight={1} textColor='secondary'>
            Integrating Flow with React
          </Heading>
          <Text margin='50px 0 0' textColor='tertiary' size={1} fit bold>
            React Edinburgh December 2017
          </Text>
        </Slide>
      </Deck>
    );
  }
}

import React from 'react'
import { Header, Container, Menu, Image, Segment } from 'semantic-ui-react'

function App() {
  return (
    <Segment vertical>
      <Container text textAlign='center' style={{marginTop: '2em'}}>
        <Menu text size='large' widths={3}>
            <Menu.Item name='WEDDING'/>
            <Menu.Item name='RSVP'/>
            <Menu.Item name='PHOTOS'/>
        </Menu>
        <Header size='huge' style={{marginTop: '2em'}}>Pei Wen & Zhen Kai</Header>
        <Image src='https://zk-wedding-website-images.s3-ap-southeast-1.amazonaws.com/IMG_3058.jpg' size='huge' style={{marginTop: '3em'}}/>
        <Container text style={{marginTop: '3em'}}>
          <Header size='large' style={{margin: '2em 0em 2em'}}>10 - 10 - 2020</Header>
          <p>Stay tuned!</p>
        </Container>
      </Container>
    </Segment>
  )
}

export default App
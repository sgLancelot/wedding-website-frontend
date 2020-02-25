import React from 'react'
import { Header, Container, Icon, Menu, Image, Button } from 'semantic-ui-react'

function App() {
  return (
    <Container textAlign='center'>
      <br/>
      <Header as='h1' color='black'>Zhen Kai & Pei Wen</Header>
      <br/>
      <Menu text size='large' widths={4}>
        <Menu.Item name='WELCOME'/>
        <Menu.Item name='STORY'/>
        <Menu.Item name='SCHEDULE'/>
        <Menu.Item name='LOCATION'/>
      </Menu>
      <Image src='https://zk-wedding-website-images.s3-ap-southeast-1.amazonaws.com/IMG_3058.jpg' size='huge' centered/>
      <br/>
      <Header color='pink' as='h2'>
        10.10.2020
      </Header>
      <br/>
      <Button basic color='black'>
        RSVP Here!
      </Button>
    </Container>
  )
}

export default App
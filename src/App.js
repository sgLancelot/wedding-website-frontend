import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Header, Container, Menu, Image, Segment } from 'semantic-ui-react'

const MainPage = () => {return(
  <>
    <Image src='https://zk-wedding-website-images.s3-ap-southeast-1.amazonaws.com/IMG_3058.jpg' size='huge' style={{marginTop: '3em'}}/>
    <Container text style={{marginTop: '3em'}}>
      <Header size='large' style={{margin: '2em 0em 1em'}}>10 - 10 - 2020</Header>
      <p>Stay tuned!</p>
    </Container>
  </>
)}

const Wedding = () => <p>WEDDDINGGGGGGGG</p>
const RSVP = () => <p>RSVPPPPPP</p>
const Photos = () => <p>PICSSSSSSSSSSS</p>

function App() {
  return (
    <>
    <Router>
      <Segment vertical>
        <Container text textAlign='center' style={{margin: '1em'}}>
          <Menu text size='large' widths='3'>
            <Menu.Item as={Link} to="/wedding">WEDDING</Menu.Item>
            <Menu.Item as={Link} to="/rsvp">RSVP</Menu.Item>
            <Menu.Item as={Link} to="/photos">PHOTOS</Menu.Item>
          </Menu>
          <Header as={Link} exact="true" to="/" size='huge'>Pei Wen & Zhen Kai</Header>
          <Route exact path="/" render={() => <MainPage />} />
          <Route path="/wedding" render={() => <Wedding />} />
          <Route path="/rsvp" render={() => <RSVP />} />
          <Route path="/photos" render={() => <Photos />} />
        </Container>
      </Segment>
    </Router>
    </>
  )
}

export default App
//<Menu text size='large' widths={3}>
//<Menu.Item name='WEDDING'/>
//<Menu.Item name='RSVP'/>
//<Menu.Item name='PHOTOS'/>
//</Menu>

//size='huge' 

//<Route exact path="/" render={() => "WEDDDINGGGGG"} />
//<Route path="/rsvp" render={() => "RSVPPPPPPPPP"} />
//<Route path="/photos" render={() => "PICSSSSSSSS"} />
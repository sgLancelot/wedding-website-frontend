import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Header, Container, Menu, Image, Segment, Icon, Form, Button, Grid } from 'semantic-ui-react'

const MainPage = () => {return(
  <>
    <Image src='https://zk-wedding-website-images.s3-ap-southeast-1.amazonaws.com/IMG_3058.jpg' size='huge'/>
    <Container text style={{marginTop: '3em'}}>
      <Header size='large' style={{margin: '2em 0em 1em'}}>10 - 10 - 2020</Header>
      <p>Stay tuned!</p>
    </Container>
  </>
)}

const Wedding = () => {
  return (
    <Segment placeholder>
      <Header icon>
        <Icon name='attention' />
        Work in progress
      </Header>
    </Segment>
  )
}

const RSVP = ({
  name,
  contact,
  additional,
  handleNameChange,
  handleContactChange,
  handleAdditionalChange,
  handleAddGuest
}) => (
  <Form onSubmit={handleAddGuest}>
    <Form.Field>
      <label>Name</label>
      <input placeholder='Name' type='text' value={name} onChange={handleNameChange} />
    </Form.Field>
    <Form.Field>
      <label>Contact Number</label>
      <input placeholder='Contact Number' value={contact} onChange={handleContactChange} />
    </Form.Field>
    <Form.Field>
      <label>Additional guests</label>
      <input placeholder='Additional guests' value={additional} onChange={handleAdditionalChange} />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
)

const Photos = () => {
  return (
    <Segment placeholder>
      <Header icon>
        <Icon name='attention' />
        Work in progress
      </Header>
    </Segment>
  )
}

function App() {
  return (
    <>
    <Router>
      <Segment vertical>
        <Container celled text textAlign='center' style={{margin: '1em'}}>
          <Menu text size='large' widths='3'>
            <Menu.Item as={Link} to="/wedding">WEDDING</Menu.Item>
            <Menu.Item as={Link} to="/rsvp">RSVP</Menu.Item>
            <Menu.Item as={Link} to="/photos">PHOTOS</Menu.Item>
          </Menu>
          <Grid centered columns={1} padded='vertically'>
            <Grid.Column textAlign='center' style={{margin: '1em 0em 3em'}}>
             <Header as={Link} exact="true" to="/" size='huge' margins={4}>Pei Wen & Zhen Kai</Header>
            </Grid.Column>
          </Grid>
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
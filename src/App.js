import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Header, Container, Menu, Image, Segment, Icon, Form, Button, Grid } from 'semantic-ui-react'

const MainPage = () => {return(
  <>
    <Image src='https://zk-wedding-website-images.s3-ap-southeast-1.amazonaws.com/IMG_3058.jpg' size='huge'/>
    <Container text textAlign='center' style={{marginTop: '3em'}}>
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

const RSVP = ({handleAddGuest}) => {
  // ON SUBMIT AND STATE CHECK SEMANTIC UI FORM LAST 2 PARTS
  const diet = [
    { key: 'n', text: 'No', value: 'no' },
    { key: 'v', text: 'Vegetarian', value: 'vege' },
    { key: 'h', text: 'Halal', value: 'halal' },
    { key: 'o', text: 'Others', value: 'others' },
  ]

  return (
    <Form onSubmit={handleAddGuest}>
      <Form.Group>
        <Form.Input fluid label='Name' placeholder='Tan Ah Gow' width={8} required />
        <Form.Input label='Contact' placeholder='91234567' width={4} required />
        <Form.Select label='Dietary Requirements' placeholder='No' options={diet} width={4} />
      </Form.Group>
      <Form.Group inline>
        <label>Additional Guests?</label>
        <Form.Radio label='No' />
        <Form.Radio label='Yes' />
      </Form.Group>
      <Form.Group>
        <Form.Input fluid placeholder='Adult' width={2} />
        <Form.Input fluid placeholder='Child' width={2} />
        <Form.Input fluid placeholder='Baby' width={2} />
      </Form.Group>
      <Form.Group inline>
        <label>Driving?</label>
        <Form.Radio label='No' />
        <Form.Radio label='Yes' />
      </Form.Group>
      <Button type='submit'>Submit</Button>
    </Form>
)}

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
        <Container celled text style={{margin: '1em'}}>
          <Menu text size='large' widths='3'>
            <Menu.Item as={Link} to="/wedding">WEDDING</Menu.Item>
            <Menu.Item as={Link} to="/rsvp">RSVP</Menu.Item>
            <Menu.Item as={Link} to="/photos">PHOTOS</Menu.Item>
          </Menu>
          <Grid centered columns={1} padded='vertically'>
            <Grid.Column textAlign='center' style={{margin: '1em 0em 3em'}}>
             <Header as={Link} exact="true" to="/" size='huge' margins={4}>Pei Wen & Zhen Kai</Header>
            </Grid.Column>
            <Grid.Column>
              <Route exact path="/" render={() => <MainPage />} />
              <Route path="/wedding" render={() => <Wedding />} />
              <Route path="/rsvp" render={() => <RSVP />} />
              <Route path="/photos" render={() => <Photos />} />
            </Grid.Column>
          </Grid>
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
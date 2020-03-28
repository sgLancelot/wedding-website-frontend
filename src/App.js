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

const RSVP = () => {
  const diet = [
    { key: 'n', text: 'No Preference', value: 'no' },
    { key: 'v', text: 'Vegetarian', value: 'vege' },
    { key: 'h', text: 'Halal', value: 'halal' },
    { key: 'o', text: 'Others', value: 'others' },
  ]

  const drive = [
    { key: 'nd', text: 'Not Driving', value: 'no'},
    { key: 'd', text: 'Driving', value: 'drv'},
  ]

  const addiGuests = [
    { key: 'n', text: 'No additional guests', value: 'no'},
    { key: 'y', text: 'Yes, I have additional guests', value: 'yes'},
  ]

  // ON SUBMIT AND STATE CHECK SEMANTIC UI FORM LAST 2 PARTS
  // TAKE NOTE UNDER FORMS SEMANTIC UI, THERES INDIVIDUAL LINKS OUT TO INPUT/CHECKBOX ETC

  return (
    <Grid>
      <Grid.Column>
        <Form size='large'>
          <Segment>
            <Form.Group unstackable>
              <Form.Input icon='user' iconPosition='left' placeholder='Name' width={11} />  
              <Form.Input icon='phone' iconPosition='left' placeholder='Contact' width={5} />
            </Form.Group>
            <Form.Group>
              <Form.Checkbox label='Yes, I will be attending the wedding. (leave unchecked if not attending)' />
            </Form.Group>            
            <Form.Group unstackable>
              <Form.Select clearable placeholder='Additional Guests?' options={addiGuests} width={6} />
              <Form.Select clearable placeholder='Driving?' options={drive} width={5} />
              <Form.Select clearable placeholder='Diet?' options={diet} width={5} />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input fluid icon='user plus' iconPosition='left' placeholder='No. of Adult/Child' />
              <Form.Input fluid icon='child' iconPosition='left' placeholder='No. of Baby' />
              <Form.Select fluid clearable placeholder='Guest Diet?' options={diet} />
            </Form.Group>
            <Button color='pink' fluid size='large'>
              Submit
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>

  )
}

// use Grid stackable for 2 columns, so that in mobile can stack onto each other.

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
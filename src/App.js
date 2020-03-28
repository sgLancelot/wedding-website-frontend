import React, { useState } from 'react'
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

const RSVP = ({
  name,
  contact,
  rsvp,
  diet,
  drive,
  addiGuest,
  handleNameChange,
  handleContactChange,
  handleRsvpChange,
  handleDietChange,
  handleDriveChange,
  handleGuestChange,
  handleAddGuest,
}) => {
 //const [rsvpVisi, setRsvpVisi] = useState(false)

  const dietOpt = [
    { key: 'n', text: 'No Preference', value: 'no' },
    { key: 'v', text: 'Vegetarian', value: 'vege' },
    { key: 'h', text: 'Halal', value: 'halal' },
    { key: 'o', text: 'Others', value: 'other' },
  ]

  const driveOpt = [
    { key: 'nd', text: 'Not Driving', value: false},
    { key: 'd', text: 'Driving', value: true},
  ]

  const guestOpt = [
    { key: 'n', text: 'No additional guests', value: false},
    { key: 'y', text: 'Have additional guests', value: true},
  ]

  const addiGuestVisi = addiGuest ?
  <Form.Group widths='equal'>
    <Form.Input fluid icon='user plus' iconPosition='left' placeholder='No. of Adult/Child' />
    <Form.Input fluid icon='child' iconPosition='left' placeholder='No. of Baby' />
    <Form.Select fluid clearable placeholder='Dietary Requirements' options={dietOpt} />
  </Form.Group> : ''

  const rsvpVisi = rsvp ?
      <>
        <Form.Group widths='equal'>
          <Form.Dropdown fluid selection clearable placeholder='Additional Guests' options={guestOpt} value={addiGuest} onChange={handleGuestChange} />
          <Form.Select fluid clearable placeholder='Driving?' options={driveOpt} value={drive} onChange={handleDriveChange} />
          <Form.Select fluid clearable placeholder='Dietary Requirements' options={dietOpt} value={diet} onChange={handleDietChange} />
        </Form.Group>
        {addiGuestVisi}
      </> : ''

  // ON SUBMIT AND STATE CHECK SEMANTIC UI FORM LAST 2 PARTS
  // TAKE NOTE UNDER FORMS SEMANTIC UI, THERES INDIVIDUAL LINKS OUT TO INPUT/CHECKBOX ETC
  return (
    <Grid centered>
      <Grid.Column width={14}>
        <Form size='large' onSubmit={handleAddGuest}>
          <Segment>
            <Form.Group widths='equal'>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='Name' value={name} onChange={handleNameChange} />  
              <Form.Input fluid icon='phone' iconPosition='left' placeholder='Contact' value={contact} onChange={handleContactChange} />
            </Form.Group>
            <Form.Checkbox label='Yes, I will be attending the wedding.' checked={rsvp} onChange={handleRsvpChange} />
            {rsvpVisi}
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
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [rsvp, setRsvp] = useState(false)
  const [diet, setDiet] = useState('')
  const [drive, setDrive] = useState('')
  const [addiGuest, setAddiGuest] = useState('')

  const handleAddGuest = async (event) => {
    event.preventDefault()
    try{
      console.log('NAME IS:::', name, 'CTC IS:::', contact)
      console.log('successfully added guest!')
      setName('')
      setContact('')
      setRsvp(false)
      setDiet('')
      setDrive('')
      setAddiGuest('')
    } catch(exception) {
      console.log('error adding guest')
    }
  }

  return (
    <>
    <Router>
      <Segment vertical>
        <Container text style={{margin: '1em'}}>
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
              <Route path="/rsvp" render={() => <RSVP
                name={name}
                contact={contact}
                rsvp={rsvp}
                diet={diet}
                drive={drive}
                addiGuest={addiGuest}
                handleNameChange={(e, {value}) => setName(value)}
                handleContactChange={(e, {value}) => setContact(value)}
                handleRsvpChange={() => setRsvp(!rsvp)}
                handleDietChange={(e, {value}) => setDiet(value)}
                handleDriveChange={(e, {value}) => setDrive(value)}
                handleGuestChange={(e, {value}) => setAddiGuest(value)}
                handleAddGuest={handleAddGuest} />} />
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
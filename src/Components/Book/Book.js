import React, { useState } from 'react';
import './Book.css'
import { Button, Col, Container, Form, FormControl, Row } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import DateRangePicker from '@mui/lab/DateRangePicker';
import Header from '../Header/Header';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';



const Book = () => {
  const history = useHistory()
  const [value, setValue] = useState([null, null]);
  const [book, setBook] = useState({
    from: '',
    to:''
  })

  const handleSubmitBooking = () => {
    history.push('/info')
    const bookinfo = { ...value, ...book}
    fetch('http://localhost:5000/book', {
      method: 'POST',
      body: JSON.stringify(bookinfo),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  const handleChange = (e) => {
    const newBook = { ...book }
    newBook[e.target.name] = e.target.value
    setBook(newBook)
  }


  return (
    <>
      <Container fluid className='background'>
        <Header></Header>

        <Row>
          <Col sm={6} md={4}>
            <div className="booking">
              <h1>COX'S BAZAR</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex id minima reiciendis dolorem hic</p>
            </div>
          </Col>

          <Col className='form' sm={6} md={8}>
            <Form onSubmit={handleSubmitBooking}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateRangePicker
                  startText="Start"
                  endText="End"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(startProps, endProps) => (
                    <React.Fragment>
                      <TextField {...startProps} required />
                      <Box sx={{ mx: 2 }}> to </Box>
                      <TextField {...endProps} required />
                    </React.Fragment>
                  )}
                />
              </LocalizationProvider>
              <br></br>
              <Form.Group className="mb-3" controlId="formBasicSelect">
                <Form.Control
                  as="select"
                  value={book.from}
                  onChange={handleChange}
                  name="from"
                  placeholder='Select Destination' required
                >
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chittagong">Chittagong</option>
                  <option value="Kulna">Kulna</option>
                </Form.Control>
              </Form.Group>
              {/* <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Control type="text" onBlur={handleBlur} name="from" placeholder="From" required />
              </Form.Group> */}
              <Form.Group className="mb-3" controlId="formBasicSelect">
                <Form.Control
                  as="select"
                  value={book.to}
                  onChange={handleChange}
                  name="to"
                  placeholder='Select Destination' required
                >
                  <option value="Cox's Bazar">Cox's Bazar</option>
                  <option value="Sundorbon">Sundorbon</option>
                  <option value="Sreemongol">Sreemongol</option>
                </Form.Control>
              </Form.Group>
              {/* <Form.Group className="mb-3" controlId="formBasicPassword">

                <Form.Control type="text" onBlur={handleBlur} name="to" placeholder="To" required />
              </Form.Group> */}
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" required />
              </Form.Group>
              <Button style={{ textAlign: 'center', width: '100%' }} variant="warning" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Book;




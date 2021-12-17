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



const Book = () => {
  const [value, setValue] =useState([null, null]);
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
            <Form>
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
                      <TextField {...startProps} />
                      <Box sx={{ mx: 2 }}> to </Box>
                      <TextField {...endProps} />
                    </React.Fragment>
                  )}
                />
              </LocalizationProvider>
              <br></br>
              <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Control type="text" placeholder="From" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">

                <Form.Control type="text" placeholder="To" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
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




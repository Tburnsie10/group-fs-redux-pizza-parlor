import { useState } from 'react';
import {
  Form,
  ButtonGroup,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Button,
} from 'reactstrap';
import { useDispatch } from 'react-redux';

export default function CustomerInformation() {
  const dispatch = useDispatch();
  const [customerInfo, setCustomerInfo] = useState({
    customer_name: '',
    street_address: '',
    city: '',
    zip: '',
    type: 'pickup',
  });

  const onChange = (e) => {
    setCustomerInfo({ ...customerInfo, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_CUSTOMER_INFO', payload: customerInfo });
  };

  return (
    <div className="container">
      <h1 className="mb-5">Customer Information</h1>
      <Form onSubmit={onSubmit}>
        <FormGroup className="d-flex justify-content-between">
          <ButtonGroup className="my-2" size="lg">
            <Button
              color="primary"
              outline
              onClick={() =>
                setCustomerInfo({ ...customerInfo, type: 'delivery' })
              }
              active={customerInfo.type === 'delivery'}
            >
              Delivery
            </Button>
            <Button
              color="primary"
              outline
              onClick={() =>
                setCustomerInfo({ ...customerInfo, type: 'pickup ' })
              }
              active={customerInfo.type === 'pickup'}
            >
              Pickup
            </Button>
          </ButtonGroup>

          <div>
            <Button type="submit" color="success" size="lg">
              Next
            </Button>
          </div>
        </FormGroup>
        <Row className="my-5">
          <Col md={6}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                value={customerInfo.name}
                onChange={onChange}
                id="customer_name"
                name="customer_name"
                placeholder="John Doe"
                type="name"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="address">Street Address</Label>
              <Input
                value={customerInfo.address}
                onChange={onChange}
                id="street_address"
                name="street_address"
                placeholder="1234 Main St"
                type="text"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row className="my-5">
          <Col md={6}>
            <FormGroup>
              <Label for="city">City</Label>
              <Input
                value={customerInfo.city}
                onChange={onChange}
                id="city"
                name="city"
                placeholder="New York City"
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="zip">Zip Code</Label>
              <Input
                value={customerInfo.zip}
                onChange={onChange}
                id="zip"
                type="text"
                name="zip"
                placeholder="55105"
              />
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

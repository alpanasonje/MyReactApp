import { Button, Form } from "react-bootstrap";

function FormDemo()
{
    return(
<>
<Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
<Button size="lg">Ok</Button>
<Button variant="success" size="lg">Success</Button>
</>
    )
}

export default FormDemo;
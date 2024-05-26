import { Container, Form, Button } from "react-bootstrap";

const Contacto = () => {
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3 text-center" controlId="exampleForm.ControlInput1">
          <Form.Label>Correo:</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3 text-center" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descripción</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Escribe aquí"/>
        </Form.Group>
        <div className="text-center"> {/* Aplica text-center a este div */}
          <Button variant="danger" type="submit" style={{ width: '80px', margin: '20px' }}>
            Enviar
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Contacto;
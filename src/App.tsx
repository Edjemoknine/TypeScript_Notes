import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Note } from "./models";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import NoteList from "./components/NoteList";
import CreateNote from "./components/CreateNote";

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "First Note",
      text: "This is the first note",
      color: "#007bff",
      date: new Date().toString(),
    },
  ]);
  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <CreateNote setNotes={setNotes} notes={notes} />
            <NoteList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;

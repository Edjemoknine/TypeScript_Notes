import { Note } from "../models";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

type Props = { note: Note; deleteNote: (id: string) => void };

const NoteCard = ({ note, deleteNote }: Props) => {
  return (
    <Card style={{ background: note.color, marginBottom: "10px" }}>
      <Card.Body>
        <Card.Title>{note.title}</Card.Title>
        <Card.Text>{note.text}</Card.Text>
        <Card.Subtitle className="text-muted">{note.date}</Card.Subtitle>
        <Button
          onClick={() => deleteNote(note.id)}
          variant="danger"
          className="mt-3"
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default NoteCard;

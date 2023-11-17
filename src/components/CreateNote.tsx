import { useRef, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import { Note } from "../models";

type Props = {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
};

const CreateNote = ({ notes, setNotes }: Props) => {
  //   const initial = {
  //     title: "",
  //     text: "",
  //     color: "",
  //   };
  //   const [forms, setForms] = useState({ ...initial });
  //   const hanldeChange = (e: any) => {
  //     const { name, value } = e.target;
  //     setForms({ ...forms, [name]: value });
  //   };

  const [error, setError] = useState<string>("");
  const titleRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const colorRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: any): void => {
    e.preventDefault();
    if (titleRef.current?.value === "" || textRef.current?.value === "") {
      return setError("Please fill all fields");
    }
    setError("");
    setNotes([
      ...notes,
      {
        id: new Date().toString(),
        title: titleRef.current?.value,
        text: textRef.current?.value,
        color: colorRef.current?.value,
        date: new Date().toString(),
      },
    ]);

    (titleRef.current as HTMLInputElement).value = "";
    (textRef.current as HTMLTextAreaElement).value = "";
  };
  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 3000);
  }, [error]);
  return (
    <>
      <h1 className="my-4">Create New Note</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            ref={titleRef}
            //   onChange={hanldeChange}
            name="title"
            type="text"
            placeholder="Enter title"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Text</Form.Label>
          <Form.Control
            ref={textRef}
            //   onChange={hanldeChange}
            name="text"
            type="text"
            placeholder="Enter your notes"
            as={"textarea"}
            rows={3}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label htmlFor="ColorInput">Notes Color</Form.Label>
          <Form.Control
            ref={colorRef}
            //   onChange={hanldeChange}
            name="color"
            type="color"
            id="ColorInput"
            defaultValue="#563d7c"
            title="Choose your color"
            className="my-2"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default CreateNote;

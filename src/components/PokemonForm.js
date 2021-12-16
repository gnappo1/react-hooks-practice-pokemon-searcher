import {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({handleNewPoke}) {
  const [name, setName] = useState("");
  const [hp, setHp] = useState("");
  const [imageFront, setImageFront] = useState("");
  const [imageBack, setImageBack] = useState("");

  const fetchData = async (pokemon) => {
    try {
      const response = await fetch("http://localhost:3001/pokemon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(pokemon)
      })
      const data = await response.json()
      handleNewPoke(data)
    } catch(error) {
      alert(error)
    }
    
  }

  const handleSubmit = e => {
    e.preventDefault()
    const newPokemon = {name, hp, sprites: {front: imageFront, back: imageBack}}
    fetchData(newPokemon)
    setName("")
    setHp("")
    setImageBack("")
    setImageFront("")
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid value={name} label="Name" placeholder="Name" name="name" onChange={e => setName(e.target.value)} />
          <Form.Input fluid value={hp} label="hp" placeholder="hp" name="hp" onChange={e => setHp(e.target.value)}/>
          <Form.Input
            fluid
            value={imageFront}
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={e => setImageFront(e.target.value)}
          />
          <Form.Input
            fluid
            value={imageBack}
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={e => setImageBack(e.target.value)}

          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;

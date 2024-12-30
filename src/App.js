import "./App.css";
import { useState } from "react";
import ReactHookForm from "./components/ReactHookForm";

function App() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    age: "",
    motDePasse: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  {
    /*
  const handlSubmit = (e) => {
    e.preventDefault();
    for (let key in formData) {
      if (formData[key] === "") {
        alert(`le champ ${key} est obligatoire.`);
        return;
      }
    }

    console.log(formData);
  };*/
  }

  return (
    <div>
      {/*
      <form onSubmit={handlSubmit}>
        <label>Nom: </label>
        <input
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
        <label>Email: </label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <br />
      <form onSubmit={handlSubmit}>
        <label>Nom: </label>
        <input
          type="text"
          value={formData.nom}
          onChange={handleChange}
          name="nom"
        />
        <label>Email: </label>
        <input
          type="email"
          value={formData.email}
          onChange={handleChange}
          name="email"
        />
        <label>Age: </label>
        <input
          type="number"
          value={formData.age}
          onChange={handleChange}
          name="age"
        />
        <label>Mot de passe: </label>
        <input
          type="password"
          value={formData.motDePasse}
          onChange={handleChange}
          name="motDePasse"
        />
        <button type="submit">Submit</button>
      </form>*/}
      <ReactHookForm />
    </div>
  );
}

export default App;

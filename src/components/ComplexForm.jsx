import { useState } from "react";

function ComplexForm() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    dateDeNaissonce: "",
    anneUniversitaire: "",
    etablissemendDAppartenance: "",
    mail: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handlSubmit = (e) => {
    e.preventDefault();
    for (let key in formData) {
      if (formData[key] === "") {
        alert(`le champ ${key} est obligatoire.`);
        return;
      }
    }

    console.log(formData);
  };
  return (
    <div>
      <form onSubmit={handlSubmit}>
        <label>Nom: </label>
        <input
          type="text"
          value={formData.nom}
          onChange={handleChange}
          name="nom"
        />
        <label>Prenom: </label>
        <input
          type="text"
          value={formData.prenom}
          onChange={handleChange}
          name="prenom"
        />
        <label>Date de naissance: </label>
        <input
          type="date"
          value={formData.dateDeNaissonce}
          onChange={handleChange}
          name="dateDeNaissonce"
        />
        <label>Anne universitaire: </label>
        <input
          type="date"
          value={formData.anneUniversitaire}
          onChange={handleChange}
          name="anneUniversitaire"
        />
        <label>Etablissement d'appartenance: </label>
        <input
          type="text"
          value={formData.etablissemendDAppartenance}
          onChange={handleChange}
          name="etablissemendDAppartenance"
        />
        <label>Mail: </label>
        <input
          type="email"
          value={formData.mail}
          onChange={handleChange}
          name="mail"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default ComplexForm;

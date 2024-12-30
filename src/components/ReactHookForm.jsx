import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const validationSchema = yup.object({
  nom: yup.string().required("Le nom est requis"),
  Prenom: yup.string().required("le prenom est requis"),
  dateDeNaissonce: yup.date().required("la date de naissance est requis"),
  etablissemendDAppartenance: yup
    .string()
    .required("l'etablissement d'appartenance: est requis"),
  Mail: yup.string().required("l'email est requis"),
});
function ReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("nom")} placeholder="Nom" />
        {errors.nom && <span>{errors.nom.message}</span>}
        <br />
        <input
          {...register("Prenom", { required: "le prenom est requis" })}
          placeholder="Prenom"
        />
        {errors.Prenom && <span>{errors.Prenom.message}</span>}

        <br />
        <input
          {...register("dateDeNaissonce", {
            required: "la date de naissance est requis",
          })}
          placeholder="Date de naissance"
        />
        {errors.dateDeNaissonce && (
          <span>{errors.dateDeNaissonce.message}</span>
        )}

        <br />
        <input
          {...register("etablissemendDAppartenance")}
          placeholder="Etablissement d'appartenance:"
        />
        {errors.etablissemendDAppartenance && (
          <span>{errors.etablissemendDAppartenance.message}</span>
        )}

        <br />
        <input {...register("Mail")} placeholder="Mail" />
        {errors.Mail && <span>{errors.Mail.message}</span>}

        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default ReactHookForm;

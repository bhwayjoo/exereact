import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Validation schema
const validationSchema = yup.object({
  nom: yup.string().required("Le nom est requis"),
  age: yup
    .number()
    .typeError("L'âge doit être un nombre")
    .required("L'âge est requis"),
});

export default function YupForm() {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register("nom")} placeholder="Nom" />
        {errors.nom && <p>{errors.nom.message}</p>}
      </div>
      <div>
        <input {...register("age")} placeholder="Âge" />
        {errors.age && <p>{errors.age.message}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

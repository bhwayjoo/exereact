import { useForm } from "react-hook-form";
function FomrCour() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("nom", { required: "Le nom est requis" })}
          placeholder="Nom"
        />
        <br />
        <input
          {...register("age", { required: "L'age est requis" })}
          placeholder="Age"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default FomrCour;

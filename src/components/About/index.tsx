import "./style.css";

interface AboutProps {
  name: string;
  age: number;
  description: string;
}

export function About({ name, age, description }: AboutProps) {
  return (
    <>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{age} anos</p>
    </>
  );
}

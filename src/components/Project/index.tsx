import "./style.css";

interface ProjectProps {
  title: string;
  description: string;
  tecnologies: string[];
  link?: string;
}

export function Project({
  title,
  description,
  tecnologies,
  link,
}: ProjectProps) {
  return (
    <article className="project">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {tecnologies.map((tecnology, index) => (
          <li key={index}>{tecnology}</li>
        ))}
      </ul>
      {link && (
        <a href={link} target="_blank" rel="noreferrer">
          Acessar
        </a>
      )}
    </article>
  );
}

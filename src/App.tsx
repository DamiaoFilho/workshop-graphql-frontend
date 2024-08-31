import "./App.css";
import { About } from "./components/About";
import { Project } from "./components/Project";
import { useEffect, useState } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";

const PLACEHOLDER_DATA = {
  about: {
    name: "Damião Teodósio e Davy Dantas",
    age: 21,
    description: "Teste de consumo de API GraphQL",
  }
}

const getProjects = gql`
  query Query{
    getProjects{
      id
      name
      description
      technologies
      link
    }
  }
`;

const createProject = gql`
  mutation Mutation($name: String!, $description: String!, $technologies: [String!]!, $link: String!, $participants: [String!]!){
    createProject(name: $name, description: $description, technologies: $technologies, link: $link, participants: $participants) {
      name
      description
      technologies
      technologies
      link
      participants
    }
  }
`;


function App() {
  const [projects, setProjects] = useState([]);
  const { data } = useQuery(getProjects)
  const [createProjectMutation] = useMutation(createProject);


  useEffect(() => {
    if (data) {
      setProjects(data.getProjects);
    }
  }, [data]);

  function addNewProject() {
    const project_number = projects.length + 1;

    createProjectMutation({
      variables: {
        name: `Projeto ${project_number}`,
        description: "Projeto de teste",
        technologies: ["React", "Node"],
        link: "https://github.com",
        participants: ["Damião Teodósio", "Davy Dantas"],
      }
    }).then(response => {
      console.log(projects);
      const newProject = response.data.createProject;
      setProjects([...projects, newProject]);
    });
  }

  return (
    <main>
      <section>
        <h2>Sobre mim</h2>
        <About {...PLACEHOLDER_DATA.about} />
      </section>

      { data &&
        <section>
          {projects.map(({id, name, description, technologies, link}) => (
            <Project key={id} title={name} description={description} tecnologies={technologies} link={link} />
          ))}
        </section>
      }

      <button onClick={addNewProject}>Novo projeto</button>
    </main>
  );
}

export default App;

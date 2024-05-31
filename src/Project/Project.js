import React from "react";
import "./Project.css";
import ProjectContents from "./ProjectContents";

export default function Project() {
    const projects = [
        {
            title: 'Open D - Modern Web 3.0 E-Commerce Market',
            imageUrl: 'https://i.pinimg.com/736x/e6/48/95/e6489590882d7a05701eb2a8c3f1c94f.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            toolStack: ['Motoko', 'Node.js', 'JavaScript', 'Blockchain', 'Docker', 'React']
        },
        {
            title: 'Decentralized Google Keeper App',
            imageUrl: 'https://i.pinimg.com/736x/e6/48/95/e6489590882d7a05701eb2a8c3f1c94f.jpg',
            description: 'A decentralized Google Keep app securely manages your notes using cutting-edge Web 3.0 blockchain technology, such as the Internet Computer Protocol.  By merging decentralized Internet Computer Protocol principles with seamless user experiences, it efficiently handles various Kanban tasks.',
            toolStack: ['JavaScript', 'React', 'Motoko', 'HTML5/CSS3', 'Blockchain']
        },
        {
            title: 'CryptoToken - OAT',
            imageUrl: 'https://i.pinimg.com/736x/e6/48/95/e6489590882d7a05701eb2a8c3f1c94f.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            toolStack: ['JavaScript', 'React', 'Motoko', 'HTML5/CSS3', 'Blockchain']
        },
        {
            title: 'Chat Me Up',
            imageUrl: 'https://i.pinimg.com/736x/e6/48/95/e6489590882d7a05701eb2a8c3f1c94f.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            toolStack: ['OpenAPI', 'Java', 'Codegen', 'Insomnia', 'Dialogflow']
        }
    ];

    return (
        <div>
            <section id="Project">
                <h1>0.3 Projects I Have Made</h1>
                {projects.map((project, index) => (
                    <ProjectContents
                        key={index}
                        title={project.title}
                        imageUrl={project.imageUrl}
                        description={project.description}
                        toolStack={project.toolStack}
                        floatDirection={index % 2 === 0 ? 'right' : 'left'}
                    />
                ))}
            </section>
        </div>
    );
}

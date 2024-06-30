import React from "react";
import "../../styles/Project.css";
import ProjectContents from "./ProjectContents";
import OpenD from "../Images/OpenD.png"

export default function Project() {
    const projects = [
        {
            title: 'OpenD - Modern Web 3.0 E-Commerce Market',
            imageUrl: OpenD,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            toolStack: ['Motoko', 'Node.js', 'JavaScript', 'Blockchain', 'Docker', 'React']
        },
        {
            title: 'Decentralized Google Keeper App',
            imageUrl: 'https://github.com/Jay-tech456/Decentralized-Google-Keeper-App/blob/main/dkeeper.png?raw=true',
            description: ['A decentralized Google Keep app securely manages your notes using cutting-edge Web 3.0 blockchain technology, such as the Internet Computer Protocol.', 
                            'By merging decentralized Internet Computer Protocol principles with seamless user experiences, it efficiently handles various Kanban tasks.'],
            toolStack: ['TypeScript', 'ICP', 'React', 'Motoko', 'HTML5/CSS3', 'Blockchain']
        },
        {
            title: 'CryptoToken - OAT',
            imageUrl: 'https://github.com/Jay-tech456/Blockchain-Token-OAT/blob/main/demoImage.png?raw=true',
            description: ['Developed a decentralized blockchain token for a DeFi app, enabling users to transfer, claim, and trade digital assets. Achieved 99.9% uptime with an average transaction confirmation time of 2 seconds, capable of serving over 10,000 active users.'], 
            toolStack: ['JavaScript', 'React', 'Motoko', 'HTML5/CSS3', 'Blockchain']
        },
        {
            title: 'Foodie Review Web App',
            imageUrl: 'https://github.com/Jay-tech456/Stealth-Project/blob/main/Foodie.jpeg?raw=true',
            description: 'Deployed cloud infrastructure (MongoDB Atlas) to streamline database operations, ensuring high performance and availability while reducing operational complexities associated with local databases; leading to a uniform collaboration .', 
            toolStack: ['MongoDB Atlas', 'Express', 'React.js', 'Node.js', 'Postman', 'Figma', 'Docker']
        }
    ];

    return (
        <div>
            <section id="Project">
                <h1 className="Project">0.3 Projects I Have Made</h1>
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

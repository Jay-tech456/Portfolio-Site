import OpenD from "../Components/Images/OpenD.png";

const ProjectsInfo = [
    {
        title: 'OpenD - Modern Web 3.0 E-Commerce Market',
        imageUrl: OpenD,
        description: 'Engineered the creation of a decentralized NFT Marketplace e-commerce replica, empowering users to seamlessly mint, list, and trade Non-Fungible Tokens (NFTs) on the ICP network, revolutionizing the digital asset landscape. Achieved remarkable results, including a consistent transaction processing time and a staggering 75% increase in UI/UX, highlighting the transformative on the digital marketplace ecosystem.', 
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
    }
];

const projectData = async () =>{ 

    try{ 
        const response = await fetch(`http://localhost:5001/api/project`, 
            {
            method:"GET", 
            headers:{ 
                "Content-Type":"application/json", 

            }
        }) 

        if(response.ok){ 
            const data = await response.json(); 
            return data;
        } else { 
            console.log("Failed to fetch project Information")
            return ProjectsInfo ; 
        }
    }catch(e){ 
        console.log("Error: ", e)
        return ProjectsInfo;
    }


}


export default projectData ;
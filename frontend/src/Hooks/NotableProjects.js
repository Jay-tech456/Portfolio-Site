const NotableProjectsData = [
    {
        image: "https://149367133.v2.pressablecdn.com/wp-content/uploads/2018/12/GadgetMatch-20181219-5G-Explainer-03.gif",
        alt: "Spotify Profile",
        title: "5G Research",
        description: "Explore the groundbreaking world of 5G 'New Radio', a transformative force in mobile accessibility. Dive into the history of this cutting-edge technology, discover the use cases that set it apart from its predecessors, understand its operations and the surrounding technologies, uncover the ongoing challenges and innovative solutions shaping its future, and introducing a Behavioral Analysis technqiue to help improve its cybernetics.",
        githubLink: "https://github.com/Jay-tech456/5G-Research-Paper/blob/main/ENG%20297D_%205G%20Research%20paper%20(2).pdf",
        projectLink: "https://your-project-link",
        authors: "Minh Chau Ngo && Manjesh Prasad"
    },
    {
        image: "https://ibagroupit.com/wp-content/uploads/2020/06/computer-vision.gif",
        alt: "Spotify Profile",
        title: "Computer Vision Research",
        description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
        githubLink: "https://github.com/jp-yuan/eng202",
        projectLink: "https://your-project-link",
        authors: "Manjesh Prasad, Shuzhu Chen, Duy-Anh Dang, and Nicolas Yang",
    }
];

const notableProjects = async () => {
    try {
        const response = await fetch(".....", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (response.ok) {
            let data = await response.json();
            console.log("Data successfully received");
            return data;
        } else {
            console.log("Failed to fetch the data");
            return NotableProjectsData;
        }
    } catch (err) {
        console.log("Error", err);
        return NotableProjectsData;
    }
}

export default notableProjects;

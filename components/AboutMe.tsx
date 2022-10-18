import ProjectComponent from "./../components/ProjectComponent";

interface projectObject {
    projectTitle: string;
    projectDescription: string;
    projectLink: string;
    projectType: string;
}

const projects: projectObject[] = [
    {
        projectTitle: "Anime Recommendations",
        projectDescription:
            "Recommend new Animes based on your anime using Cosine Similarity",
        projectLink: "https://github.com/KaiKaizxc/DS_ML_Projects",
        projectType: "Machine_Learning",
    },
    {
        projectTitle: "Linear Algebra",
        projectDescription:
            "My Study based on the book : No Bullshit to Linear Algebra",
        projectLink: "https://github.com/KaiKaizxc/Linear-Algebra-",
        projectType: "Maths",
    },
    {
        projectTitle: "Statistics",
        projectDescription:
            "My analysis of statistics based on Elements of Statiscal learning, including R",
        projectLink: "https://github.com/KaiKaizxc/Statistical_learning-",
        projectType: "Maths",
    },
    {
        projectTitle: "Spam Detection",
        projectDescription:
            "Tokenized, stemmed words to classify messages as spam or not from scratch using Maths",
        projectLink:
            "https://github.com/KaiKaizxc/Spam_detection_multinomial_model",
        projectType: "Machine_Learning",
    },

    {
        projectTitle: "Login Authentication with database",
        projectDescription:
            "Login Authentication (Name, email , password + profile picture) with NoSQL Firebase and Next js. Currently unavailable, maybe interview me to see it 8)",
        projectLink: "https://github.com/KaiKaizxc",
        projectType: "Frontend",
    },
    {
        projectTitle: "Stock Market Trading Simulator",
        projectDescription:
            "Simulation of the stock market using basic Data Structures and Algorithms. Supports Limit / Market Buy and Sell, current orders",
        projectLink:
            "https://github.com/KaiKaizxc/Trading-simulator/blob/main/stock_exchange%20(1).ipynb",
        projectType: "Maths",
    },
    {
        projectTitle: "EDA of NFTS using MySQL",
        projectDescription: "Querying from a local database to do EDA",
        projectLink: "https://github.com/KaiKaizxc/DS_ML_Projects",
        projectType: "Machine_Learning",
    },
    {
        projectTitle: "Advice Generator",
        projectDescription:
            "Fetch quotes from an API quote generator and generate randomly on click",
        projectLink: "https://lkquotegenerator.netlify.app/",
        projectType: "Frontend",
    },
    {
        projectTitle: "Conway's Game Of Life Visualizer",
        projectDescription:
            "A minigame to visualize conway's algorithm. Hover over it to make the cell alive, and click start and watch",
        projectLink: "https://gameoflifebyconway.netlify.app/",
        projectType: "Frontend",
    },

    {
        projectTitle: "Aavegotchi analytics board",
        projectDescription:
            "An analytics board created using graphing libraries to visualize the Gotchiverse economy",
        projectLink: "https://gotchiverse-analytics.vercel.app/",
        projectType: "Frontend",
    },

    {
        projectTitle: "Social media app",
        projectDescription: "A CSS experiment with Material UI ",
        projectLink: "https://reactmui.000webhostapp.com/",
        projectType: "Frontend",
    },

    {
        projectTitle: "Whack-a-nemesis",
        projectDescription:
            "My first ever project with vanilla javascript, basically whack-a-mole game",
        projectLink: "https://whacknemy.netlify.app/",
        projectType: "Frontend",
    },
];

function AboutMe() {
    return (
        <>
            <div className="wrapper">
                <span className="title">My Projects</span>
                <div className="my_projects">
                    <div className="labels">
                        <div className="icon Frontend">Frontend</div>

                        <div className="icon Machine_Learning">
                            Machine Learning
                        </div>

                        <div className="icon Maths">Math</div>
                    </div>
                </div>

                <div className="body">
                    {projects.map((project, index) => {
                        return (
                            <ProjectComponent
                                key={index}
                                projectTitle={project.projectTitle}
                                projectDescription={project.projectDescription}
                                projectLink={project.projectLink}
                                projectType={project.projectType}
                            />
                        );
                    })}
                </div>
            </div>
            <style jsx>
                {`
                    .wrapper {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        align-items: center;
                        margin: 0;
                        padding: 0;
                        background-color: #161e30;
                        overflow-x: hidden;
                    }

                    .title {
                        font-size: 32px;
                        color: #6af5ee;
                        padding: 20px;
                    }

                    .label {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 10px;
                    }

                    .Frontend {
                        background-color: rgba(53, 173, 109, 0.8);
                    }

                    .Machine_Learning {
                        background-color: rgba(246, 124, 63, 0.83);
                    }

                    .Maths {
                        background-color: rgba(178, 37, 208, 1);
                    }

                    .labels {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 20px;
                    }

                    .icon {
                        font-size: 22px;
                        width: 200px;
                        color: white;

                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 10px;
                        padding: 10px;
                    }

                    .my_projects {
                        font-size: 30px;
                        color: #6af5ee;
                        font-weight: 400;
                    }

                    .body {
                        display: flex;
                        flex-direction: column;
                        gap: 20px;
                        margin: 20px 0px 20px 0px;
                        padding: 10px;
                    }
                `}
            </style>
        </>
    );
}

export default AboutMe;

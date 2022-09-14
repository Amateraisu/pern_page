import ProjectComponent from "./../components/ProjectComponent";

interface projectObject {
    projectTitle: string;
    projectDescription: string;
    projectLink: string;
}

const projects: projectObject[] = [
    {
        projectTitle: "Stock Market Trading Simulator",
        projectDescription:
            "Simulation of the stock market using basic Data Structures and Algorithms. Supports Limit / Market Buy and Sell, current orders",
        projectLink:
            "https://github.com/KaiKaizxc/Trading-simulator/blob/main/stock_exchange%20(1).ipynb",
    },
    {
        projectTitle: "Titanic survival prediction",
        projectDescription:
            "Analysis of passengers of the titanic to predict their survival",
        projectLink: "https://github.com/KaiKaizxc/Titanic_survival_prediction",
    },
    {
        projectTitle: "Writings Classifier",
        projectDescription:
            "Usage of Standard Gradient Descent to classify numbers",
        projectLink: "https://github.com/KaiKaizxc/Classifier",
    },
    {
        projectTitle: "Spam Detection",
        projectDescription:
            "Use of sklearn and Math to allow spam detection on a Bayes model. Accuracy of 72% , Sensitivity of 99% , Specificity of 68%, Precision of 32%. (Not tuned)",
        projectLink:
            "https://github.com/KaiKaizxc/Spam_detection_multinomial_model",
    },
    {
        projectTitle: "Advice Generator",
        projectDescription:
            "Fetch quotes from an API quote generator and generate randomly on click",
        projectLink: "https://lkquotegenerator.netlify.app/",
    },
    {
        projectTitle: "Conway's Game Of Life Visualizer",
        projectDescription:
            "A minigame to visualize conway's algorithm. Hover over it to make the cell alive, and click start and watch",
        projectLink: "https://gameoflifebyconway.netlify.app/",
    },

    {
        projectTitle: "Aavegotchi analytics board",
        projectDescription:
            "An analytics board created using graphing libraries to visualize the Gotchiverse economy",
        projectLink: "https://gotchiverse-analytics.vercel.app/",
    },

    {
        projectTitle: "Social media app",
        projectDescription: "A CSS experiment with Material UI ",
        projectLink: "https://reactmui.000webhostapp.com/",
    },

    {
        projectTitle: "Whack-a-nemesis",
        projectDescription:
            "My first ever project with vanilla javascript, basically whack-a-mole game",
        projectLink: "https://whacknemy.netlify.app/",
    },
];

function AboutMe() {
    return (
        <>
            <div className="wrapper">
                <div className="my_projects">My projects</div>
                <div className="body">
                    {projects.map((project, index) => {
                        return (
                            <ProjectComponent
                                key={index}
                                projectTitle={project.projectTitle}
                                projectDescription={project.projectDescription}
                                projectLink={project.projectLink}
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

                    .my_projects {
                        font-size: 30px;
                        color: #6af5ee;
                        font-weight: 400;
                    }

                    .body {
                        display: flex;
                        flex-direction: column;
                    }
                `}
            </style>
        </>
    );
}

export default AboutMe;

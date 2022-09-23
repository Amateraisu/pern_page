import Link from "next/link";

interface ProjectComponentProps {
    projectTitle: string;
    projectDescription: string;
    projectLink: string;
    projectType: string;
}

function ProjectComponent({
    projectTitle,
    projectDescription,
    projectLink,
    projectType,
}: ProjectComponentProps) {
    return (
        <>
            <Link href={projectLink}>
                <div className={"wrapper ".concat(projectType)}>
                    <div className="body">
                        <div className="project_title">
                            <div className="title">{projectTitle}</div>
                        </div>
                        <div className="project_description">
                            {projectDescription}
                        </div>
                    </div>
                </div>
            </Link>

            <style jsx>
                {`
                    .wrapper {
                        color: white;
                        border-radius: 10px;
                        display: flex;
                        padding: 22px;
                        cursor: pointer;
                    }

                    .wrapper:hover {
                        transform: translate(-2%, -10%);

                        transition: 0.5s ease-in-out;
                    }

                    .body {
                        display: flex;
                        align-items: center;

                        width: 100%;
                        border-radius: 5px;
                    }
                    .project_title {
                        font-size: 22px;
                        align-self: center;
                        color: white;
                    }

                    .project_description {
                        font-size: 18px;
                    }

                    .title {
                        color: white;
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

                    @media (max-width: 600px) {
                        .body {
                            flex-direction: column;
                            gap: 20px;
                        }
                    }

                    @media (min-width: 600px) {
                        .project_title {
                            flex-basis: 30%;
                        }

                        .project_description {
                            flex-basis: 70%;
                        }

                        .wrapper {
                            height: 95px;
                        }
                    }
                `}
            </style>
        </>
    );
}

export default ProjectComponent;

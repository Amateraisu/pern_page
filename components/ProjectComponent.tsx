interface ProjectComponentProps {
    projectTitle: string;
    projectDescription: string;
    projectLink: string;
}

function ProjectComponent({
    projectTitle,
    projectDescription,
    projectLink,
}: ProjectComponentProps) {
    return (
        <>
            <div className="wrapper">
                <div className="project_title">
                    <a href={projectLink}>
                        <div>{projectTitle}</div>
                    </a>
                </div>
                <div className="project_description">{projectDescription}</div>
            </div>
            <style jsx>
                {`
                    .wrapper {
                        color: white;
                        width: 1000px;

                        display: flex;
                        padding: 25px;
                    }
                    .project_title {
                        flex: 1;
                    }

                    a {
                        color: #6acef5;
                    }

                    .project_description {
                        flex: 2;
                    }

                    @media (max-width: 600px) {
                        .wrapper {
                            flex-direction: column;
                            width: 100%;
                        }
                    }
                `}
            </style>
        </>
    );
}

export default ProjectComponent;

import ProjectComponent from "./../components/ProjectComponent";

function AboutMe() {
    return (
        <section>
            <div className="wrapper">
                <div className="body">
                    <ProjectComponent />
                    <ProjectComponent />
                </div>
            </div>
            <style jsx>
                {`
                    .wrapper {
                        display: flex;
                        justify-content: space-around;
                        align-items: center;

                        height: calc(100vh - 700px);
                    }

                    .body {
                        display: flex;
                        height: 100%;
                        width: 50%;

                        justify-content: space-around;
                        align-items: center;
                    }
                `}
            </style>
        </section>
    );
}

export default AboutMe;

/// <reference types="styled-jsx" />
import Image from "next/image";
import NavButtons from "./navbar_buttons/NavButtons";

interface buttonObject {
    imageLink: string;
    imageDirectory: string;
    textContent: string;
}

const buttonObjects: buttonObject[] = [
    {
        imageLink: "https://www.linkedin.com/in/kaikaii/",
        imageDirectory: "/images/linkedin.png",
        textContent: "Linkedln",
    },
    {
        imageLink: "Kai__resume.pdf",
        imageDirectory: "/images/resume.png",
        textContent: "Resume",
    },
    {
        imageLink: "https://github.com/KaiKaizxc",
        imageDirectory: "/images/github.png",
        textContent: "GitHub",
    },
];

function NavBar() {
    return (
        <section>
            <style jsx>
                {`
                    .wrapper {
                        height: 60px;
                        background-color: #12a4d9;
                        display: flex;
                        justify-content: space-between;
                        margin: 0;
                    }

                    .wrapper_left {
                        display: flex;
                        align-items: center;
                        padding-left: 20px;
                        font-size: 20px;
                        font-weight: 500;
                    }

                    .wrapper_right {
                        display: flex;
                        align-items: center;
                        justify-content: space-around;
                        gap: 20px;
                        padding-right: 20px;
                    }

                    .profile_picture {
                        border-radius: 50%;
                        overflow: hidden;
                        height: 40px;
                        width: 40px;
                        background-color: black;
                    }
                `}
            </style>
            <div className="wrapper">
                <div className="wrapper_left">Kai</div>

                <div className="wrapper_right">
                    {buttonObjects.map(
                        (buttonObject: buttonObject, index: number) => {
                            return (
                                <NavButtons
                                    key={index}
                                    imageDirectory={buttonObject.imageDirectory}
                                    imageLink={buttonObject.imageLink}
                                    textContent={buttonObject.textContent}
                                />
                            );
                        }
                    )}
                    <div className="profile_picture">
                        <Image
                            src="/images/my_face_lol.jpg"
                            width={50}
                            height={50}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NavBar;

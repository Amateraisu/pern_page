import Image from "next/image";
/// <reference types="styled-jsx" />

interface NavButtonsProps {
    imageLink: string;
    imageDirectory: string;
    textContent: string;
}

function NavButtons({
    imageLink,
    imageDirectory,
    textContent,
}: NavButtonsProps) {
    return (
        <section>
            <div className="wrapper">
                <a href={imageLink} className="tag">
                    <Image src={imageDirectory} width={30} height={30} />
                    <div>{textContent}</div>
                </a>
            </div>

            <style jsx>{`
                .wrapper {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 120px;
                    height: 60px;

                    cursor: pointer;
                }

                .wrapper:hover {
                    background: white;
                    transition: 0.5s ease-in-out;
                }

                .tag {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 5px;
                    font-size: 18px;
                    font-weight: 500;
                }

                /* Ripple effect */
                .wrapper {
                    background-position: center;
                    transition: background 1s;
                }
                .wrapper:hover {
                    background: rgba(250, 200, 200, 0.3)
                        radial-gradient(circle, transparent 10%, #47a7f5 10%)
                        center/15000%;
                }
                .wrapper:active {
                    background-color: #6eb9f7;
                    background-size: 100%;
                    transition: background 0s;
                }
            `}</style>
        </section>
    );
}

export default NavButtons;

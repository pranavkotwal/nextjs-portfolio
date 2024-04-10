import { FaSquareXTwitter,FaGithub,FaLinkedin } from "react-icons/fa6";


export default function Footer(){
    return (

        <footer className="bg-[#264277] h-[300px] mt-5 flex items-center justify-center">
            <div>

            </div>
            <div className="flex flex-row gap-5">
                <FaSquareXTwitter size={32} />
                <FaGithub size={32} />
                <FaLinkedin size={32} />
            </div>
            


        </footer>

    )
}
import contact from "../../Images/contact.png";
import HeadingContainer from "../heading container/HeadingContainer";
import user from "../../Images/user-icon.png";
import message from "../../Images/message.png";
import ImageTag from "../image tag/ImageTag";
import InputTag from "../input tag/InputTag";
import { useState } from "react";
import { useTheme } from "../theme context/ThemeContext";

const Contact = () => {

    const {darkMode}=useTheme();

    const [name,setName]=useState("");
    const [msg,setMsg]=useState("");

    const [abled,setAbled]=useState(false);

    const nameChange=(e)=>{
        setName(e.target.value);
    };

    const msgChange=(e)=>{
        setMsg(e.target.value);
    };

    const submit = async (e) => {
        e.preventDefault();
        setAbled(true);
        const res=await fetch("https://backend-portfolio-tfup.onrender.com",
            {
                method: "POST",
                headers: { "content-Type": "application/json" },
                body:JSON.stringify({
                    name:name,
                    message:msg
                })
            }
        );
        const data=await res.json();
        if(data.message==="added"){
            alert("Thank You for your response");
            setName("");
            setMsg("");
            setAbled(false);
        }
        else{
            alert("501 Internal Server Error");
        }
    };

    return (
        <div className={`w-full h-screen ${darkMode ? "bg-black" : ""} sm:px-5 md:px-16 lg:px-24 xl:px-36 2xl:px-48 3xl:px-96`}>
            <div className={`w-full`}>
                <HeadingContainer
                    src={contact}
                    text="Contact Me"
                    style="sticky top-0"
                />

                <form className={`w-full flex flex-col items-center justify-center gap-8 py-5 mt-10 rounded-lg ${darkMode ? "shadow-inner shadow-white":"shadow-inner shadow-black"}`} onSubmit={submit}>
                    <section className="w-full flex items-center justify-center gap-4">
                        <ImageTag
                            src={user}
                            alt="User"
                            style="invert"
                        />
                        <InputTag
                            placeholder="Name"
                            value={name}
                            change={nameChange}
                        />
                    </section>

                    <section className="w-full flex justify-center gap-4">
                        <ImageTag
                            src={message}
                            alt="Message"
                            style="invert"
                        />
                        <InputTag
                            placeholder="Message"
                            value={msg}
                            change={msgChange}
                            padding="pb-40"
                        />
                    </section>

                    <button type="submit" className={`w-40 text-xl text-white py-2 rounded-lg mt-2 ${darkMode ? "bg-blue-500 hover:bg-blue-700" : "bg-green-500 hover:bg-green-700"} disabled:opacity-40`} disabled={abled}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
import { Link } from "react-router-dom";
import portfolio from "../../Images/resume.png";
import HeadingContainer from "../heading container/HeadingContainer";
import ProjectContainer from "../projects container/ProjectContainer";
import html from "../../Images/html.png";
import css from "../../Images/css.png";
import tc from "../../Images/tailwind.png";
import js from "../../Images/js.png";
import react from "../../Images/react.png";
import github from "../../Images/github.png";
import ImageSection from "../image section/ImageSection";
import ImageCont from "../image container/ImageCont";
import H2Cont from "../h2 container/H2Cont";
import OrderedListCont from "../ordered list container/OrderedListCont";
import ListTag from "../list tag/ListTag";
import UnorderedListCont from "../unordered list container/UnorderedListCont";
import SocialLinks from "../social links/SocialLinks";
import eduinfo from "../../Images/Eduinfo.png";
import { useTheme } from "../theme context/ThemeContext";

const Project = () => {

    const {darkMode}=useTheme();

    return (
        <div className={`w-full ${darkMode ? "bg-black" : "bg-white"} sm:px-2 md:px-2 lg:px-2 xl:px-2 2xl:px-2 3xl:px-2`}>
            <div className="w-full pb-10">
                <HeadingContainer
                    src={portfolio}
                    text="Portfolio"
                    style="sticky top-0"
                />

                <ProjectContainer backgroundImage="before:bg-[url('/src/Images/weather-logo.png')]">
                    <H2Cont>
                        <OrderedListCont start="1">
                            <ListTag>
                                Weather WebApp
                            </ListTag>
                        </OrderedListCont>
                    </H2Cont>

                    <ImageSection>
                        <ImageCont
                            src={html}
                            alt="HTML"
                        />
                        <ImageCont
                            src={css}
                            alt="CSS"
                        />
                        <ImageCont
                            src={tc}
                            alt="Tailwind CSS"
                        />
                        <ImageCont
                            src={js}
                            alt="JavaScript"
                        />
                        <ImageCont
                            src={react}
                            alt="React JS"
                        />
                    </ImageSection>

                    <UnorderedListCont>
                        <ListTag>
                            App is made using
                            <Link
                                to="https://www.weatherapi.com/"
                                className="text-blue-400 hover:underline decoration-solid pl-1"
                                target="blank"
                            >
                                Weather API
                            </Link>.
                        </ListTag>
                        <ListTag>
                            Allowing
                            <strong> Location Permission </strong>
                            will help to find
                            <strong> Current Location Weather Conditions</strong>.
                        </ListTag>
                        <ListTag>
                            Search using
                            <strong> City name </strong>
                            or
                            <strong> Latitude, Longitude </strong>
                            in search bar for getting
                            <strong> desired location Weather Conditions</strong>.
                        </ListTag>
                        <ListTag>
                            Search bar provides
                            <strong> Suggestion Feature </strong>,
                            which will help in
                            <strong> Faster Search </strong>.
                            Switching
                            <strong> Dark Mode </strong>
                            will provide better
                            <strong> UI experience</strong>.
                        </ListTag>
                    </UnorderedListCont>

                    <SocialLinks
                        to="https://github.com/Nitish2626/weather-app"
                        src={github}
                    />
                </ProjectContainer>

                <ProjectContainer backgroundImage="before:bg-[url('/src/Images/news.jpg')]">
                    <H2Cont>
                        <OrderedListCont start="2">
                            <ListTag>
                                News WebApp
                            </ListTag>
                        </OrderedListCont>
                    </H2Cont>

                    <ImageSection>
                        <ImageCont
                            src={html}
                            alt="HTML"
                        />
                        <ImageCont
                            src={css}
                            alt="CSS"
                        />
                        <ImageCont
                            src={tc}
                            alt="Tailwind CSS"
                        />
                        <ImageCont
                            src={js}
                            alt="JavaScript"
                        />
                        <ImageCont
                            src={react}
                            alt="React JS"
                        />
                    </ImageSection>

                    <UnorderedListCont>
                        <ListTag>
                            App is made using
                            <Link
                                to="https://newsapi.org/"
                                className="text-blue-400 hover:underline decoration-solid pl-1"
                                target="blank"
                            >
                                News API
                            </Link>.
                        </ListTag>
                        <ListTag>
                            App contains
                            <strong> Top-headlines from 53 Countries </strong>
                            in their
                            <strong> Regional Language, country name is also changeable</strong>.
                        </ListTag>
                        <ListTag>
                            Search using
                            <strong> News Description </strong>
                            in search bar for getting
                            <strong> desired News</strong>.
                        </ListTag>
                    </UnorderedListCont>

                    <SocialLinks
                        to="https://github.com/Nitish2626/news-app"
                        src={github}
                    />
                </ProjectContainer>

                <ProjectContainer backgroundImage="before:bg-[url('/src/Images/Eduinfo.png')]">
                    <H2Cont>
                        <OrderedListCont start="3">
                            <ListTag>
                                Calculator WebApp
                            </ListTag>
                        </OrderedListCont>
                    </H2Cont>

                    <ImageSection>
                        <ImageCont
                            src={html}
                            alt="HTML"
                        />
                        <ImageCont
                            src={css}
                            alt="CSS"
                        />
                        <ImageCont
                            src={js}
                            alt="JavaScript"
                        />
                        <ImageCont
                            src={react}
                            alt="React JS"
                        />
                    </ImageSection>

                    <UnorderedListCont>
                        <ListTag>
                            App contains
                            <strong> 4 different types of Calculators </strong>
                            which is used to
                            <strong> Calculate day-to-day Calculations</strong>.
                        </ListTag>
                    </UnorderedListCont>

                    <section className="flex relative">
                        <Link
                            to="https://usecalc.000webhostapp.com/"
                            target="blank"
                            className="w-18 h-18 rounded-full hover:bg-black">
                            <img src={eduinfo} className="w-14 h-14" alt="Website"></img>
                        </Link>

                        <SocialLinks
                            link="https://github.com/Nitish2626/usecalc"
                            src={github}
                        />
                    </section>
                </ProjectContainer>
            </div>
        </div>
    );
}
export default Project;
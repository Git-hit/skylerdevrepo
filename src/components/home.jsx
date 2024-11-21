import { Helmet } from "react-helmet-async";
import Features from "./features";
import Hero from "./hero";
import WhoWeAre from "./whoWeAre";
import TabNavs from "./tabnavs";
import TechStack from "./techStack";

export default function Home(){
    return(
        <>
            <Helmet>
                <title>Skyler Dev | Best Website Development In Delhi</title>
                <meta name="description" content='We create websites that shine' />
                <meta property="og:title" content='Skyler Dev' />
                <meta property="og:description" content='We create websites that shine' />
            </Helmet>
            <Hero />
            <WhoWeAre />
            <Features />
            <TabNavs />
            <TechStack />
        </>
    )
}
import React from "react";
import Layout from "../components/layout";
import Typewriter from "../components/typewriter";
import styled from "styled-components";
import Helmet from "react-helmet";
import Img from "gatsby-image/withIEPolyfill";

const P = styled.p`
    margin-bottom: 0.2rem;
    color: #ffffff;
`;


const StyledImg = styled(Img)`
    grid-row: 1 / -1;
    max-width: 475px;
    margin: 0;
    padding: 0 0.3rem;
    border-radius: 10px;
`;

const ImgWrapper = styled.div`
    margin-top: 30px;
    margin-bottom: 50px;
`;

export default ({ data }) => {

    const [image] = data.Image.edges;
    const {
        childImageSharp: { sizes },
    } = image.node;
    return (
    <>
        <Helmet>
            <meta charSet='utf-8' />
            <title>Home - Tyler Berrett</title>
            <link rel='canonical' href='https://tylerberrett.com' />
        </Helmet>
        <Layout>
            <Typewriter text='Hello :)' />
            <br/>
            <P>
                I'm an android developer with experience building apps in Kotlin and Java 
                using technologies such as Retrofit, Apollo-Android, Room, RxJava, 
                Coroutines, AndroidX, Material Design, and MvvM Architecture.
                
            </P>
            <br/>
            <P>
                I enjoy spending my time playing video games, taking care of plants,
                explaning my code to my non-coding friends to watch their reactions, and all things outdoors.
            </P>
            <ImgWrapper>
                <StyledImg
                    title={"Tyler in Zion"}
                    alt='Mark and his two dogs'
                    sizes={sizes}
                    />
            </ImgWrapper>
            </Layout>
        </>
    );
};

export const query = graphql`
    query image {
        Image: allFile(filter: { relativePath: { regex: "/me.png/" } }) {
            edges {
                node {
                    childImageSharp {
                        sizes(maxWidth: 950) {
                            ...GatsbyImageSharpSizes
                        }
                    }
                }
            }
        }
    }
`;

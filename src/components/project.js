import React, { useRef, useState, useLayoutEffect } from "react";
import styled from "styled-components";
import Img from "gatsby-image/withIEPolyfill";
import { LinkIcon, Github } from "../assets/icons";
import Carousel from "./carousel";

const ProjectContainer = styled.div`
    width: 100%;
    margin: 1rem 0;
`;

const StyledImg = styled(Img)`
    margin: 0;
    min-width: ${({ maxWidth }) => maxWidth}%;
    max-height: 750px;
    padding: 0 0.3rem;
`;

const StyledLinkIcon = styled(LinkIcon)`
    display: inline;
    margin-left: 1rem;
`;

const H4 = styled.h4`
    display: inline;
    margin: 0 !important;
    color: #ffffff;
`;

const P = styled.p`
    margin-bottom: 0.2rem;
    color: #ffffff;
`;

const ProjectLink = styled.a`
    text-decoration: none;
    background-image: none;
    target: _blank;

    h2 {
        display: inline;
        text-shadow: none;
        color: #66fcf1;
    }

    &:hover {
        opacity: 0.5;
    }
`;

const StyledSpan = styled.span`
    color: #ffffff;
`;

const LinkSpan = styled.span`
    color: #ed7d3a;
    text-shadow: none;
`;

const RepoDiv = styled.div`
    display: flex;
    align-items: center;

    a {
        text-decoration: none;
        color: hsla(0, 0%, 0%, 0.8);
        background-image: none;

        &:hover {
            opacity: 0.5;
            cursor: pointer;
        }
    }
`;

export default ({ sizes, project, images }) => {
    const ref = useRef();
    const [dimensions, setDimensions] = useState({});
    useLayoutEffect(() => {
        setDimensions(ref.current && ref.current.getBoundingClientRect());
    }, [ref.current]);
    return (
        <ProjectContainer>
            {project.demo ? (
                <ProjectLink href={project.demo} target="_blank">
                    <h2>{project.name}</h2>
                    <StyledLinkIcon fill='#66fcf1' />
                </ProjectLink>
            ) : (
                <h2>{project.name}</h2>
            )}
            <div ref={ref}>
                <Carousel top={dimensions.height / 2 - 22} left={55} right={55}>
                    {sizes.map((size, i) => (
                        <StyledImg
                            title={project.name}
                            key={i}
                            alt='Screenshot of project'
                            sizes={size}
                            maxWidth={project.maxWidth}
                            objectFit='contain'
                        />
                    ))}
                </Carousel>
            </div>
            <div>
                <StyledSpan>
                    <strong>Tech Stack: </strong>
                </StyledSpan>
                <H4>{project.tech}</H4>
            </div>
            <P>
                <strong>Description: </strong>
                {project.description}
            </P>
            {project.frontend && (
                <RepoDiv>
                    <a href={project.frontend} target="_blank">
                        <LinkSpan>
                            <strong>Front End Code</strong>
                        </LinkSpan>
                        <LinkSpan style={{ marginLeft: "0.5rem" }}>
                            <Github fill='#ed7d3a' />
                        </LinkSpan>
                    </a>
                </RepoDiv>
            )}
            {project.backend && (
                <RepoDiv>
                    <a href={project.backend} target="_blank">
                        <LinkSpan>
                            <strong>Back End Code</strong>
                        </LinkSpan>
                        <LinkSpan style={{ marginLeft: "0.5rem" }}>
                            <Github fill='#ed7d3a' />
                        </LinkSpan>
                    </a>
                </RepoDiv>
            )}
        </ProjectContainer>
    );
};

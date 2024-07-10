import React from 'react'

import { Container, Wrapper, Title, Desc, CardContainer, } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
       
        <CardContainer>
          {projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
         
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects
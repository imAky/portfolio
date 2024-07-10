import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent'
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
             <Span>Amit Kumar</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          
          <NavLink href='#projects'>Projects</NavLink>
        </NavItems>
        <ButtonContainer>
        <GitHubButton href={Bio.linkedin} target="_blank"><IoLogoLinkedin style={{backgroundColor: "white", fontSize: "28",borderRadius: '10%', }}/></GitHubButton>
          <GitHubButton href={Bio.github} target="_blank"><FaGithub style={{backgroundColor: "white", fontSize: "28",borderRadius: '10%', }}/></GitHubButton>
          
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
           
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <div style={{display: "flex" , alignItems : "center", textAlign: "center" , justifyContent: "center", }}>
            <GitHubButton href={Bio.linkedin} target="_blank"><IoLogoLinkedin style={{backgroundColor: "white", fontSize: "28",borderRadius: '10%', }}/></GitHubButton>
            <GitHubButton href={Bio.github} target="_blank"><FaGithub style={{backgroundColor: "white", fontSize: "32", borderRadius: "50%",}}/></GitHubButton>
            </div>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
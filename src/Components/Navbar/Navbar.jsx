import { useState } from 'react';
import { Container, Group, Burger, Image, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './Navbar.module.css';

const links = [
{ link: 'https://drive.google.com/file/d/1HukdR1lTEh8QK28jya1K7XCj84wWMwZg/view', label: 'Resume' },

];

export function Navbar() {
const [opened, { toggle }] = useDisclosure(false);
const [active, setActive] = useState(links[0].link);

const items = links.map((link) => (
    <a
    key={link.label}
    href={link.link}
    className={classes.link}
    data-active={active === link.link || undefined}
    onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
    }}
    >
    {link.label}
    </a>
));

const handleDownload = (props) => {
    
    const link = document.createElement('a');
    link.href = props?.link;
    link.target = '_blank'; // Open in a new tab/window
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};



return (
    <header className={classes.header}>
    <Container size="xl" className={classes.inner}>
        <Image 
        className={classes.logo}
        p={20}
        fit='contain'
        w={170}
        src='https://drive.google.com/uc?export=view&id=1t8_wFw_mQhw49V9S6IDbcAhJ5in_wbXD'/>
        
        <Group gap={4} >
        <Button 
        className={classes.btn}
        onClick={()=>handleDownload(
        {link:"https://drive.google.com/file/d/1HukdR1lTEh8QK28jya1K7XCj84wWMwZg/view"})}>
        Resume</Button>
    
        </Group>

    </Container>
    </header>
);
}
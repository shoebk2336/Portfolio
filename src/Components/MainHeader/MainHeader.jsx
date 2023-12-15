import { Title, Text, Button, Container } from '@mantine/core';
import { Dots } from './dot';
import classes from './MainHeader.module.css';

export function MainHeader() {
return (
    <Container className={classes.wrapper} size={1400}>
    <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
    <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
    <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
    <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

    <div className={classes.inner}>
        <Title className={classes.title}>
        Passionate  {' '}
        <Text  component="span" className={classes.highlight} inherit>
        React Developer
        </Text>{' '}
        Creating
        <Title> Seamless User Experiences</Title>
        </Title>
        

        <Container p={0} size={600}>
        <Text 
        ta='justify'
        size="lg" c="dimmed" className={classes.description}>
        Hello, I'm <Text span inherit c='red'>Shoeb Khan</Text>, an experienced frontend developer specializing in React. I am dedicated to crafting intuitive user interfaces and scalable web solutions, bringing an innovative touch to enhance digital experiences. 
        Let's build something extraordinary together!        </Text>
        </Container>

        <div className={classes.controls}>
    
        </div>
    </div>
    </Container>
);
}
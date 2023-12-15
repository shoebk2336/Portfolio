import { Box, Text, Title } from "@mantine/core"
import { Container } from "postcss"
import classes from './Banner.module.css'


export const Banner=()=>{
    return(<>
        
        <Box 
        className={classes.banner}
        p={10}
        ta='center'
        mb='50px'
        >
    <Title
    order={3}
    c='white'
    style={{border:"0px solid red"}}
    >Solving Complex Challenges with Elegant React Solutions 💡</Title>
    <Text
    c='white'
        fw={400}
        lh='30px'
    >Crafting digital excellence, one challenge at a time. 💡✨
    </Text>
        </Box>
        </>)
}
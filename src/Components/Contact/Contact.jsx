import { ActionIcon, Anchor, Container, Flex, Space, Title } from "@mantine/core"
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconMailUp } from "@tabler/icons-react"
import classes from './Contact.module.css'

export const Contact=()=>{
    const ContactData=[
        {name:"Github",icon:<IconBrandGithub/>,url:"https://github.com/shoebk2336/"},
        {name:"Linkedin",icon:<IconBrandLinkedin/>,url:"https://www.linkedin.com/in/shoebkhan478/"},
        {name:"Twitter",icon:<IconBrandTwitter/>,url:"https://twitter.com/shoebk478"},
        {name:"mail",icon:<IconMailUp/>,url:'https://mail.google.com/mail/u/shoebk478@gmail.com/#compose'},
        
    ]
    return(<>
        <Container
        pb='100'
        >
        <Title
        ta='center'
        >Let's Connect</Title>
        <Space h='xl'/>
        <Flex
        m='auto'
        w={{base:'50%',sm:"20%"}}
        justify='space-between'
        >
        {ContactData?.map((contact,index)=>
            <a key={index}
            href={contact?.url}
            >
            <ActionIcon
            className={classes.actionIcon}
            size='lg'
            radius='50%'
            p='2'
            key={index}>
            {contact?.icon}
            </ActionIcon>
            </a>
            )}
            </Flex>
            </Container>
            </>)
        }
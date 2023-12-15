import { Badge, Box, Card, Flex, Image, Indicator, Space, Text, Title } from "@mantine/core"
import { IconBrandGithub, IconDeviceImac, IconPointFilled, IconWorld } from "@tabler/icons-react"
import classes from './PortfolioCard.module.css'


export const PortfolioCard=(props)=>{
    const {name,image,description,
            Tstack,
        gitLink,deployLink
        }=props.project
    console.log(props,'project')
    return(<>
        <Card
        className={classes.card}
        shadow="md"

        
        style={{border:"0px solid red"}}>
        <Flex
        
        w={{sm:'75%',base:"100%"}}
        justify='space-between'
        >
        {Tstack?.map((tech,index)=>
            <Badge 
            className={classes.badge}
            radius='sm'
            key={index}>
            <Text
            size="10px"
            fw={700}
            >
            {tech}
            </Text>
            
            </Badge>
            )}
            <IconDeviceImac 
            style={{marginLeft:"10px"}}
            color="black" />
            </Flex>
            
            <Space h='md'/>
            <Title 
            w={{sm:'25%',base:"40%"}}
            style={{border:"0px solid red"}}
            display='flex'
            order={2}>{name}
            </Title>
            <Text 
            lineClamp={3}
            c='dimmed'>{description}</Text>
            <Space h='xl'/>
            <Space h='lg'/>
            <Flex
            m='auto'
            w={{sm:'30%',base:"70%"}}
            justify='space-between'
            >
            <a href={gitLink}
            style={{textDecoration:"none"}}
            >
            <Text 
            td='none'
            size="xs"
            fw={700}
            display='flex'
            style={{alignItems:"center"}}
            >
            <IconBrandGithub size='12px' />
            GitHub</Text>
            </a>
            <a href={deployLink}
            style={{textDecoration:"none"}}
            >
            <Text 
            size="xs"
            fw={700}
            display='flex'
            style={{alignItems:"center",
            border:"0px solid red",
        
        }}
            >
            <IconWorld 
            
            size='15px' />
            Live</Text>
            </a>
            </Flex>
            <Space h='md'/>

            
        <Image 
        display='flex'
        h='400px'
        w={'100%'}
        fit="contain"
        src={image}/>
        </Card>
        </>)
}
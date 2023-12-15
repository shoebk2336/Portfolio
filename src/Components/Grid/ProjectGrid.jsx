import { Box, Container, SimpleGrid, Title } from "@mantine/core"
import { PortfolioCard,  } from "../Card/PortfolioCard"



export const ProjectGrid=()=>{


    const PortfolioData=[
        {name:"Afreshia",
        image:"https://drive.google.com/uc?export=view&id=1MxmlosXi7gVo-P24-Q-sjces-nyLx8sc",
        description:"Elevated e-commerce experiences with Afreshia, a React and Redux-powered platform. Dynamic landing pages, curated selections, and seamless transactions led to improved performance and user engagement. Explore my portfolio for more impactful projects.",
        gitLink:"https://github.com/shoebk2336/Afreshia",
        deployLink:"https://snazzy-malasada-531066.netlify.app/",
        Tstack:['React','Redux','Mantine UI','Routes']
        },
        {name:"ASconsultancy",image:"https://drive.google.com/uc?export=view&id=14Wjq6ybVqq7tPCV03ErfzH7ttxMfeVbq",
        description:"Launched AS Consultancy in February 2023, connecting 1200+ students to job opportunities. Utilized React, Redux, Chakra UI, and EmailJS for a user-friendly platform. Features include a secure HR Login Panel, Marathi translation, Query Form, and Email Automation.",
        gitLink:"https://github.com/shoebk2336/Asconsultancy",
        deployLink:"https://asconsultancybsl.in/",
        Tstack:['React','Redux','Chakra UI','Email JS']
        },
        // {name:"Afreshia",image:"https://drive.google.com/uc?export=view&id=14Wjq6ybVqq7tPCV03ErfzH7ttxMfeVbq",
        // description:"",
        // stack:['React','Redux','Mantine','Routes']
        // },
    ]
    

    return(<>
        <Container 
        mt='10%'
        size={1400}>
        <Title 
        ta='center'
        order={2}>Projects I've worked on</Title>
        <SimpleGrid 
        // h={600}
        w={{sm:'80%',base:"100%"}}
        m='auto'
        p={{sm:'20px',base:"10px"}}
        style={{border:"0px solid green"}}
        cols={{base:1,sm:2}}>
        {PortfolioData?.map((project,index)=>
            <PortfolioCard key={index} project={project}/>
            )}

        
        </SimpleGrid>
        
        
        </Container>
        </>)
}
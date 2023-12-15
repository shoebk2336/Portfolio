import { Navbar } from "../../Components/Navbar/Navbar"
import { MainHeader } from "../../Components/MainHeader/MainHeader"
import { Carousel } from "@mantine/carousel"
import { ProjectGrid } from "../../Components/Grid/ProjectGrid"
import { Banner } from "../../Components/Banner/Banner"
import { SkillGrid } from "../../Components/Grid/SkillGrid"
import { Divider, Space } from "@mantine/core"
import { Contact } from "../../Components/Contact/Contact"



export const Home=()=>{


    return(<>
        <Navbar/>
        <MainHeader/>
        <Banner/>
        <SkillGrid/>
        <ProjectGrid/>
        <Space h='xl'/>
        <Divider/>
        <Space h='xl'/>
        <Contact/>
        </>)
}
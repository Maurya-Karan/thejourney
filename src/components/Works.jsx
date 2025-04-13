import { Tilt } from "react-tilt"
import {motion} from 'framer-motion'
import {styles} from '../styles'
import { git, github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn,textVariant } from "../utils/motion"

// const ProjectCard = ( name, description, image, source_code_link ) => {
  const ProjectCard = ( {name, description, image, source_code_link} ) => {
  return (
    <motion.div variants={fadeIn("up","spring", 0.5,0.75)} className={`mt-4 w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card`}>

        <Tilt options={{
          max:10,
          scale:1,
          speed: 450,}
        } className= {`bg-tertiary p-6 rounded-[20px]   w-full sm:flex sm:flex-row gap-5 `}>
          
          {image && <div className="relative w-full sm:h-full sm:w-full ">

            <img src = {image} alt = {name} className=" h-full w-full object-cover sm:object-fill rounded-2xl"/>

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">

              <div onClick={()=> window.open(source_code_link,"_blank")} className="black-gradient w-6 h-6 rounded-full flex justify-center items-center cursor-pointer">

                <img src = {github} alt = "github" className="w-1/2 h-1/2 object-contain"/>

              </div>
            </div>
          </div>}
          <div className={` `}>
            <h3 className="text-white font-bold text-[20px]">{name}</h3>
            <p className=" text-secondary text-[15px] ">{description}</p>
          </div>
          
        </Tilt>
    </motion.div>
  )
}

const Works = () => {
  
  return (
    <div  className={` `} >
    <motion.div variants = {textVariant()}  id="work">
      <p className={`${styles.sectionSubText} `} >My Work</p>
      <h2 className={`${styles.sectionHeadText} `}>
        Projects
      </h2>
    </motion.div>
    <div className="w-full flex">
      <motion.p variants={fadeIn("","",0.1,1)} className={`mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]  `}>
        Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
      </motion.p>
    </div>
    <div className="mt-6  text-secondary   justify-center items-center leading-[30px] flex flex-col gap-10">

    {/* {projects.map((project) => <ProjectCard  project = {project} />)} */}

    { projects.map((project) =>   <ProjectCard  name = {project.name} description = {project.description} image = {project.image} source_code_link = {project.source_code_link} />)}
      
    </div>
    </div>
  )
}
export default SectionWrapper(Works,"work")

import { Tilt } from "react-tilt"
import {motion} from 'framer-motion'
import {styles} from '../styles'
import { git, github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn,textVariant } from "../utils/motion"

// const ProjectCard = ( name, description, image, source_code_link ) => {
  const ProjectCard = ( props ) => {
  return (
    <motion.div variants={fadeIn("up","spring", 0.5,0.75)} className={`mt-4 `}>

        <Tilt options={{
          max:10,
          scale:1,
          speed: 450,}
        } className= {`bg-tertiary p-5 rounded-2xl sm:h-[200px] sm:w-[900px] w-full sm:flex sm:flex-row gap-5 `}>
          
          <div className="relative w-full sm:h-full sm:w-full ">

            <img src = {props.project.image} alt = {props.project.name} className=" h-full w-full object-cover sm:object-fill rounded-2xl"/>

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">

              <div onClick={()=> window.open(props.project.source_code_link,"_blank")} className="black-gradient w-6 h-6 rounded-full flex justify-center items-center cursor-pointer">

                <img src = {github} alt = "github" className="w-1/2 h-1/2 object-contain"/>

              </div>
            </div>
          </div>
          <div className={` `}>
            <h3 className="text-white font-bold text-[20px]">{props.project.name}</h3>
            <p className=" text-secondary text-[12px] ">{props.project.description}</p>
          </div>
          
        </Tilt>
    </motion.div>
  )
}

const Works = () => {
  
  return (
    <div   id="work">
    <motion.div variants = {textVariant()} >
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
    <div className="mt-6  text-secondary text-[17px] max-w-3xl leading-[30px] flex flex-row justify-around ">

    <ProjectCard  project = {projects} />

        {/* <ProjectCard  name = {projects.name} description = {projects.description} image = {projects.image} source_code_link = {projects.source_code_link} /> */}
      
    </div>
    </div>
  )
}
export default SectionWrapper(Works,"work")

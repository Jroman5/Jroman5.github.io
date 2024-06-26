import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>JonathanRoman</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="home">
      <Navbar/>
      <main className={styles.main}>
        <div>
          <AboutMe/>
          <Skills/>
          <Contact/>
          <Cards/>
        </div>
      </main>
      </div>
    </>
  )
}

export function Contact(){
  return(
    <>
      <div id="contact">
        <h3 className = {inter.className}>Contact Me</h3>
        <br/>
        <p className = {inter.className}>Feel free to contact me via email at: <a href="mailto:jonroman2525@gmail.com">Jonroman2525@gmail.com</a></p>
        <hr className= "separator"/>
      </div>
    </>
  )
}

export function AboutMe() {
  return (
    <>
    <div id="aboutMe">
    <h2 className = {inter.className}> About Me </h2>
    <br/>
      <p className={inter.className}>
        I first found my passion for software development when I started attending the University of Texas at El Paso and had to choose between Mechanical, Electrical, or Software Engineering.
        I knew I wanted my work to impact as many people as possible, so naturally I gravitated towards software because of its ability to scale. 
        During my time as a student I became a tutor for the topics where I saw my classmates strugling the most, these topics include Intro to CS, Data Structures and Algorithms, and Computer Architechture.
         I currently have a year of experience in software development in an agile environment and am looking to continue improving in my journey as a software developer.
      </p>
      <br/>
      <hr className= "separator"/>
    </div>
    </>
  )
}

export function Skills(){
  return(
    <>
      {/* <h3 className={inter.className}> Languages and Tools</h3> */}
      <div className={inter.className} id="skills">
      <h4 className={inter.className}> Technologies I have Worked With:</h4>
      <p className={inter.className}>Java, Python, Scala, Bash, SQL, PostgreSQL, C, JavaScript, React,  Postman, Apache Spark, Mockito, Jira </p>
      <br />
      <hr className= "separator"/>
      </div>
      
      
    </>
  )
}
function mobileNavbarOnClick(){
    var x = document.getElementById("myLinks");
    if(x === null){
      return;
    }
    if (x.style.display === "grid") {
      x.style.display = "none";
    } else {
      x.style.display = "grid";
    }
  }
export function Navbar(){
  return(
  <>
    <div id="myLinks" >
      <a href="#home">Home</a>
      <a href="#aboutMe">About</a>
      <a href="#skills">Services</a>
      <a href="#contact">Contact</a>
      <a href="https://drive.google.com/file/d/1yTV05NwFS2hRAc-z25UtWwdN2K66KkqT/view?usp=sharing" target="_blank"> Resume</a>
    </div>
    <div className='navbar'>
      <svg viewBox="0 0 100 80" width="40" height="40" href="javascript:void(0);"  onClick={mobileNavbarOnClick}>
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
      </svg> 
      <a className='nav-item' href="#home">Home</a>
      <a className='nav-item' href="#aboutMe">About</a>
      <a className='nav-item' href="#skills">Services</a>
      <a className='nav-item' href="#contact">Contact</a>
      <a className='nav-item' href="https://drive.google.com/file/d/1yTV05NwFS2hRAc-z25UtWwdN2K66KkqT/view?usp=sharing" target="_blank"> Resume</a>
        
          
              
    </div>

          
          
        
        
          
        
      
      <div className=''>

          
      </div>
  </>
  )
}

export function Cards(){
  return(
  <>
    <div className={styles.grid}>
          <a
            href="https://github.com/Jroman5"
            
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              GitHub <span>-&gt;</span>
            </h2>
            <p className={inter.className}>

            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/jonathanroman25/"
            
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              LinkedIn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              
            </p>
          </a>

          <a
            href="https://drive.google.com/file/d/1yTV05NwFS2hRAc-z25UtWwdN2K66KkqT/view?usp=sharing"
            
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Resume <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              
            </p>
          </a>

          <a
            href="mailto:jonroman2525@gmail.com"
           
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Contact Me <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              
            </p>
          </a>
          
        </div>
  </>
  )
}
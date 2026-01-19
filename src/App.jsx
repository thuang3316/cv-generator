import { useState, useRef } from 'react'
import { Navigation } from './components/navigation';
import { General } from './components/general';
import { Education } from './components/education';
import { Resume } from './components/resume';
import { Projects } from './components/projects';
import { Works } from './components/works';
import { Skills } from './components/skills';
import { ResumeExample } from './components/resumeExample';
import './styles/shared.css'
import './styles/navigation.css'
import html2pdf from 'html2pdf.js';
 
function App() {
  // --- refs ---
  const resumeRef = useRef(null);

  // --- state declaration --- 

  const [currentContent, setCurrentContent] = useState('General');
  const [showExample, setShowExample] = useState(false);

  // general information
  const [generalInfoData, setGeneralInfoData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    phone: '',
  });

  // education information
  const [eduList, setEduList] = useState(
    [{
      id: crypto.randomUUID(),
      schoolName: "",
      schoolLocation: "",
      majorName: "",
      start: "",
      end: ""
    }]
  );

  // project information
  const [projectList, setProjectList] = useState(
    [{
      id: crypto.randomUUID(),
      projectName: "",
      projectLocation: "",
      projectRole: "",
      start: "",
      end: "",
      description: ""
    }]
  )

  const [workList, setWorkList] = useState(
    [{
      id: crypto.randomUUID(),
      workName: "",
      workLocation: "",
      workRole: "",
      start: "",
      end: "",
      description: ""
    }]
  )

  const [skillList, setSkillList] = useState(
    [{
      id: crypto.randomUUID(),
      skillGenre: "",
      skills: ""
    }]
  )

  // --- handlers ---
  function handleCurrentContent(item) {
    setCurrentContent(item);
  }

  function toggleResumeExample() {
    showExample ? setShowExample(false) : setShowExample(true);
  }

  const handleGeneratedPdf = () => {
    const element = resumeRef.current;
    const opt = {
      margin: 0,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2, 
        useCORS: true, 
        width: element.offsetWidth, // crucial, avoiding overflow
      },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  }

  return (
    <>
      <header>
        <h1 className='title'>CV Generator</h1>
        <div className='header-funcs'>
          <button type='button' id='download' className='headerBtn' onClick={handleGeneratedPdf}>Download</button>
          {!showExample && (<button type='button' id='show' className='headerBtn' onClick={toggleResumeExample}>Show example</button>)}
          {showExample && (<button type='button' id='hide' className='headerBtn' onClick={toggleResumeExample}>Hide example</button>)}
          <button type='button' id='iconBtn'>
            <a href="https://github.com/thuang3316/cv-generator"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" /></a>
          </button>
        </div>
        
      </header>
      <main>
        <div className="forms">
          <Navigation 
            currentContent={currentContent} 
            handleCurrentContent={handleCurrentContent}
          />
          {currentContent === 'General' && <General generalInfoData={generalInfoData} setGeneralInfoData={setGeneralInfoData}/>}
          {currentContent === 'Education' && <Education eduList={eduList} setEduList={setEduList}/>}
          {currentContent === 'Projects' && <Projects projectList={projectList} setProjectList={setProjectList} />}
          {currentContent === 'Work Experience' && <Works workList={workList} setWorkList={setWorkList}/>}
          {currentContent === 'Skills' && <Skills skillList={skillList} setSkillList={setSkillList}/>}
        </div>
        {!showExample && (
          <div className='resume-container' ref={resumeRef}>
            <Resume generalInfoData={generalInfoData} eduList={eduList} projectList={projectList} workList={workList} skillList={skillList}/>
          </div>
        )}
        {showExample && (
          <div className='resume-container' ref={resumeRef}>
            <ResumeExample />
          </div>
        )}
        
      </main>
      
    </>
  )
}

export default App

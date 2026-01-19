import '../styles/resume.css'
import { combineStartEndDate, dateToMonthYear, extractYear } from '../utils/dateHandler';

export function Resume({generalInfoData, eduList, projectList, workList, skillList}) {
    const form = generalInfoData;

    return (
        <div className="resume">
            <header className="generalInfo">
                <h1 className="name">{form.firstName + ' ' + form.lastName}</h1>
                <p className="address">{form.address}</p>
                <div className="contactInfo">
                    <div className="email">{form.email}</div>
                    <div className="phone">{form.phone}</div>
                </div>
            </header>
            <section className="education">
                <h2>Education</h2>
                <hr />
                <ul>
                    {eduList.map((school) => {
                        return (
                            <li key={school.id}>
                                <div className="schoolInfo info">
                                    <div className="schoolName bold">{school.schoolName}</div>
                                    <div className="schoolLocation bold">{school.schoolLocation}</div>
                                </div>
                                <div className="majorInfo info">
                                    <div className="majorName"><i>{school.majorName}</i></div>
                                    <div className="duration">{combineStartEndDate(school.start, school.end, extractYear)}</div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </section>
            <section className="projects">
                <h2>Projects</h2>
                <hr />
                <ul>
                    {projectList.map((project) => {
                        return (
                            <li key={project.id}>
                                <div className="projectInfo info">
                                    <div className="projectName bold">{project.projectName}</div>
                                    <div className="projectLocation bold">{project.projectLocation}</div>
                                </div>
                                <div className="projectDetails info">
                                    <div className="projectRole"><i>{project.projectRole}</i></div>
                                    <div className="duration">{combineStartEndDate(project.start, project.end, dateToMonthYear)}</div>
                                </div>
                                {project.description.split(/\r?\n/).map((item, index) => (
                                    <div key={index}>{item}</div>
                                ))}
                            </li>
                        )
                    })}
                </ul>
            </section>
            <section className="work-experience">
                <h2>Work Experience</h2>
                <hr />
                <ul>
                    {workList.map((work) => {
                        return (
                            <li key={work.id}>
                                <div className="workInfo info">
                                    <div className="workName bold">{work.workName}</div>
                                    <div className="workLocation bold">{work.workLocation}</div>
                                </div>
                                <div className="workDetails info">
                                    <div className="workRole"><i>{work.workRole}</i></div>
                                    <div className="duration">{combineStartEndDate(work.start, work.end, dateToMonthYear)}</div>
                                </div>
                                {work.description.split(/\r?\n/).map((item, index) => (
                                    <div key={index}>{item}</div>
                                ))}
                            </li>
                        )
                    })}
                </ul>
            </section>
            <section className="skills">
                <h2>Skills</h2>
                <hr />
                <ul>
                    {skillList.map((skill) => {
                        return (
                            <li key={skill.id}>
                                <div className="skillInfo">
                                    <div className="skillGenre bold">{skill.skillGenre}</div>
                                    <div className="skills">{skill.skills}</div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </div>
    )
}
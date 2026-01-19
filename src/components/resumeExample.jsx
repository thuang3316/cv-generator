import '../styles/resume.css'

export function ResumeExample() {

    return (
        <div className="resume">
            <header className="generalInfo">
                <h1 className="name">Alice Bob</h1>
                <p className="address">450 Serra Mall, Stanford, CA 94305, USA</p>
                <div className="contactInfo">
                    <div className="email">alicebob@gmail.com</div>
                    <div className="phone">(123)456-7890</div>
                </div>
            </header>
            <section className="education">
                <h2>Education</h2>
                <hr />
                <ul>
                    <li>
                        <div className="schoolInfo info">
                            <div className="schoolName bold">Stanford University</div>
                            <div className="schoolLocation bold">Stanford, CA</div>
                        </div>
                        <div className="majorInfo info">
                            <div className="majorName"><i>B.S. in Computer Science</i></div>
                            <div className="duration">Sep 2022 - Jun 2026</div>
                        </div>
                    </li>
                    <li>
                        <div className="schoolInfo info">
                            <div className="schoolName bold">University of California, Berkeley</div>
                            <div className="schoolLocation bold">Berkeley, CA</div>
                        </div>
                        <div className="majorInfo info">
                            <div className="majorName"><i>Visiting Student, Computer Science</i></div>
                            <div className="duration">Jan 2024 - May 2024</div>
                        </div>
                    </li>
                </ul>
            </section>
            <section className="projects">
                <h2>Projects</h2>
                <hr />
                <ul>
                    <li>
                        <div className="projectInfo info">
                            <div className="projectName bold">Distributed File System</div>
                            <div className="projectLocation bold">Stanford, CA</div>
                        </div>
                        <div className="projectDetails info">
                            <div className="projectRole"><i>Backend Engineer</i></div>
                            <div className="duration">Jan 2024 - Mar 2024</div>
                        </div>
                        <div>- Implemented a distributed file system supporting replication and fault tolerance.</div>
                        <div>- Designed metadata management and client-server communication protocols.</div>
                        <div>- Improved read and write performance through caching and concurrency control.</div>
                    </li>
                    <li>
                        <div className="projectInfo info">
                            <div className="projectName bold">Distributed File System</div>
                            <div className="projectLocation bold">Stanford, CA</div>
                        </div>
                        <div className="projectDetails info">
                            <div className="projectRole"><i>Backend Engineer</i></div>
                            <div className="duration">Jan 2024 - Mar 2024</div>
                        </div>
                        <div>- Implemented a distributed file system supporting replication and fault tolerance.</div>
                        <div>- Designed metadata management and client-server communication protocols.</div>
                        <div>- Improved read and write performance through caching and concurrency control.</div>
                    </li>
                    <li>
                        <div className="projectInfo info">
                            <div className="projectName bold">Distributed File System</div>
                            <div className="projectLocation bold">Stanford, CA</div>
                        </div>
                        <div className="projectDetails info">
                            <div className="projectRole"><i>Backend Engineer</i></div>
                            <div className="duration">Jan 2024 - Mar 2024</div>
                        </div>
                        <div>- Implemented a distributed file system supporting replication and fault tolerance.</div>
                        <div>- Designed metadata management and client-server communication protocols.</div>
                        <div>- Improved read and write performance through caching and concurrency control.</div>
                    </li>
                </ul>
            </section>
            <section className="work-experience">
                <h2>Work Experience</h2>
                <hr />
                <ul>
                    <li>
                        <div className="workInfo info">
                            <div className="workName bold">Google</div>
                            <div className="workLocation bold">Mountain View, CA</div>
                        </div>
                        <div className="workDetails info">
                            <div className="workRole"><i>Software Engineering Intern</i></div>
                            <div className="duration">May 2024 - Aug 2024</div>
                        </div>
                        <div>- Developed internal tools for monitoring large-scale distributed systems.</div>
                        <div>- Improved reliability by adding logging, metrics, and automated alerts.</div>
                        <div>- Collaborated with engineers through code reviews and design discussions.</div>
                    </li>

                </ul>
            </section>
            <section className="skills">
                <h2>Skills</h2>
                <hr />
                <ul>
                    <li>
                        <div className="skillInfo">
                            <div className="skillGenre bold">Programming Languages</div>
                            <div className="skills">Python, Java, C++, JavaScript</div>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    )
}
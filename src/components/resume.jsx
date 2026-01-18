export function Resume({generalInfoData, eduList, projectList}) {
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
                                <div className="schoolInfo">
                                    <div className="schoolName">{school.schoolName}</div>
                                    <div className="schoolLocation">{school.schoolLocation}</div>
                                </div>
                                <div className="majorInfo">
                                    <div className="majorName">{school.majorName}</div>
                                    <div className="duration">{school.start} {school.end}</div>
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
                                <div className="projectInfo">
                                    <div className="projectName">{project.projectName}</div>
                                    <div className="projectLocation">{project.projectLocation}</div>
                                </div>
                                <div className="projectDetails">
                                    <div className="projectRole">{project.projectRole}</div>
                                    <div className="duration">{project.start} {project.end}</div>
                                </div>
                                {project.description.split(/\r?\n/).map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </li>
                        )
                    })}
                </ul>
            </section>
        </div>
    )
}
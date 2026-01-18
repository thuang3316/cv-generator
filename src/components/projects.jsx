import { useState } from "react";

export function Projects({projectList, setProjectList}) {
    const [editing, setEditing] = useState(true);
    
    function handleEditBtn() {
        setEditing(true);
    }

    function handleSaveBtn() {
        setEditing(false);
    }

    function handleAdd(){
        setProjectList(prev => 
        [...prev, {
            id: crypto.randomUUID(),
            projectName: "",
            projectLocation: "",
            projectRole: "",
            start: "",
            end: "",
            description: ""
        }]
        );
    }

    function handleDelete(id) {
        setProjectList(prev => prev.filter(project => project.id !== id));
    }

    function handleChange(id, name, value) {
        setProjectList(prev => 
            prev.map(project =>
                project.id === id ? {...project, [name]:value} : project
            )
        )
    }

    return (
        <div className="projectForm">
            <h2>Projects</h2>

            {projectList.map(project => (
                <div className="projectInput" key={project.id}>
                    <form onSubmit={e => e.preventDefault()}>
                        <div className="input-group">
                            <label htmlFor="projectName">Project Name: </label>
                            <input 
                                type="text" 
                                name="projectName" 
                                id="projectName" 
                                value={project.projectName}
                                onChange={(e) => handleChange(project.id, 'projectName', e.target.value)}
                                readOnly={!editing}
                                placeholder="Enter Project Name"
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="projectLocation">Project Location: </label>
                            <input 
                                type="text" 
                                name="projectLocation" 
                                id="projectLocation" 
                                value={project.projectLocation}
                                onChange={(e) => handleChange(project.id, 'projectLocation', e.target.value)}
                                readOnly={!editing}
                                placeholder="Enter Project Location"
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="projectRole">Major Name: </label>
                            <input 
                                type="text" 
                                name="projectRole" 
                                id="projectRole" 
                                value={project.projectRole}
                                onChange={(e) => handleChange(project.id, 'projectRole', e.target.value)}
                                readOnly={!editing}
                                placeholder="Enter Major Name"
                            />
                        </div>
                        <div className="date-container">
                            <div className="input-group">
                                <label htmlFor="start">Start Time: </label>
                                <input 
                                    type="date" 
                                    name="start" 
                                    id="start" 
                                    value={project.start}
                                    onChange={(e) => handleChange(project.id, 'start', e.target.value)}
                                    readOnly={!editing}
                                    placeholder="Enter Start Time"
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="end">End Time: </label>
                                <input 
                                    type="date" 
                                    name="end" 
                                    id="end" 
                                    value={project.end}
                                    onChange={(e) => handleChange(project.id, 'end', e.target.value)}
                                    readOnly={!editing}
                                    placeholder="Enter End Time"
                                />
                            </div>
                        </div>
                        <div className="input-group">
                            <label htmlFor="description">Description: </label>
                            <textarea
                                type="text" 
                                name="description" 
                                id="description" 
                                value={project.description}
                                onChange={(e) => handleChange(project.id, 'description', e.target.value)}
                                readOnly={!editing}
                                placeholder="Enter Description"
                            />
                        </div>
                    </form>
                    {projectList.length !== 1 && (
                        <button type="button" className="delete-btn" onClick={() => handleDelete(project.id)}>Delete</button>
                    )}
                </div>
            ))}

            <div className="control-btns">
                {editing ? (
                <>
                    <button type="button" onClick={handleAdd}>Add</button>
                    <button type="button" onClick={handleSaveBtn}>Save</button>
                </>
                ) : (
                <button type="button" onClick={handleEditBtn}>Edit</button>
                )}
            </div>
        </div>
    )
}
import { useState } from "react";

export function Works({workList, setWorkList}) {
    const [editing, setEditing] = useState(true);
    
    function handleEditBtn() {
        setEditing(true);
    }

    function handleSaveBtn() {
        setEditing(false);
    }

    function handleAdd(){
        setWorkList(prev => 
        [...prev, {
            id: crypto.randomUUID(),
            workName: "",
            workLocation: "",
            workRole: "",
            start: "",
            end: "",
            description: ""
        }]
        );
    }

    function handleDelete(id) {
        setWorkList(prev => prev.filter(work => work.id !== id));
    }

    function handleChange(id, name, value) {
        setWorkList(prev => 
            prev.map(work =>
                work.id === id ? {...work, [name]:value} : work
            )
        )
    }

    return (
        <div className="workForm form">
            <h2>Work Experience</h2>

            {workList.map(work => (
                <div className="workInput formInput" key={work.id}>
                    <form onSubmit={e => e.preventDefault()}>
                        <div className="input-group">
                            <label htmlFor="workName">Company Name: </label>
                            <input 
                                type="text" 
                                name="workName" 
                                id="workName" 
                                value={work.workName}
                                onChange={(e) => handleChange(work.id, 'workName', e.target.value)}
                                readOnly={!editing}
                                placeholder="Enter Company Name"
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="workLocation">Company Location: </label>
                            <input 
                                type="text" 
                                name="workLocation" 
                                id="workLocation" 
                                value={work.workLocation}
                                onChange={(e) => handleChange(work.id, 'workLocation', e.target.value)}
                                readOnly={!editing}
                                placeholder="Enter Company Location"
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="workRole">Role: </label>
                            <input 
                                type="text" 
                                name="workRole" 
                                id="workRole" 
                                value={work.workRole}
                                onChange={(e) => handleChange(work.id, 'workRole', e.target.value)}
                                readOnly={!editing}
                                placeholder="Enter Your Role"
                            />
                        </div>
                        <div className="date-container inline-container">
                            <div className="input-group">
                                <label htmlFor="start">Start Time: </label>
                                <input 
                                    type="date" 
                                    name="start" 
                                    id="start" 
                                    value={work.start}
                                    onChange={(e) => handleChange(work.id, 'start', e.target.value)}
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
                                    value={work.end}
                                    onChange={(e) => handleChange(work.id, 'end', e.target.value)}
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
                                value={work.description}
                                onChange={(e) => handleChange(work.id, 'description', e.target.value)}
                                readOnly={!editing}
                                placeholder="Enter Description (Press enter to start a new line)"
                            />
                        </div>
                    </form>
                    <button type="button" className="delete-btn" onClick={() => handleDelete(work.id)}>Delete</button>
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
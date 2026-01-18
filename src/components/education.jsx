import { useState } from "react"

export function Education({eduList, setEduList}) {
    const [editing, setEditing] = useState(true);

    function handleEditBtn() {
        setEditing(true);
    }

    function handleSaveBtn() {
        setEditing(false);
    }

    function handleAdd(){
        setEduList(prev => 
        [...prev, {
            id: crypto.randomUUID(),
            schoolName: "",
            schoolLocation: "",
            majorName: "",
            start: "",
            end: ""
        }]
        );
    }

    function handleDelete(id) {
        setEduList(prev => prev.filter(edu => edu.id !== id));
    }

    function handleChange(id, name, value) {
        setEduList(prev => 
            prev.map(edu =>
                edu.id === id ? {...edu, [name]:value} : edu
            )
        )
    }

    return (
        <div className="eduForm">
            <h2>Education</h2>

            {eduList.map(edu => (
                <div className="eduInput" key={edu.id}>
                    <form onSubmit={e => e.preventDefault()}>
                        <div className="input-group">
                            <label htmlFor="schoolName">School Name: </label>
                            <input 
                                type="text" 
                                name="schoolName" 
                                id="schoolName" 
                                value={edu.schoolName}
                                onChange={(e) => handleChange(edu.id, 'schoolName', e.target.value)}
                                readOnly={!editing}
                                placeholder="Enter School Name"
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="schoolLocation">School Location: </label>
                            <input 
                                type="text" 
                                name="schoolLocation" 
                                id="schoolLocation" 
                                value={edu.schoolLocation}
                                onChange={(e) => handleChange(edu.id, 'schoolLocation', e.target.value)}
                                readOnly={!editing}
                                placeholder="Enter School Location"
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="majorName">Major Name: </label>
                            <input 
                                type="text" 
                                name="majorName" 
                                id="majorName" 
                                value={edu.majorName}
                                onChange={(e) => handleChange(edu.id, 'majorName', e.target.value)}
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
                                    value={edu.start}
                                    onChange={(e) => handleChange(edu.id, 'start', e.target.value)}
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
                                    value={edu.end}
                                    onChange={(e) => handleChange(edu.id, 'end', e.target.value)}
                                    readOnly={!editing}
                                    placeholder="Enter End Time"
                                />
                            </div>
                        </div>
                    </form>
                    {eduList.length !== 1 && (
                        <button type="button" className="delete-btn" onClick={() => handleDelete(edu.id)}>Delete</button>
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
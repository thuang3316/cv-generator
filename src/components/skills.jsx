import { useState } from "react";

export function Skills({skillList, setSkillList}) {
    const [editing, setEditing] = useState(true);
    
    function handleEditBtn() {
        setEditing(true);
    }

    function handleSaveBtn() {
        setEditing(false);
    }

    function handleAdd(){
        setSkillList(prev => 
        [...prev, {
            id: crypto.randomUUID(),
            skillGenre: "",
            skills: ""
        }]
        );
    }

    function handleDelete(id) {
        setSkillList(prev => prev.filter(skill => skill.id !== id));
    }

    function handleChange(id, name, value) {
        setSkillList(prev => 
            prev.map(skill =>
                skill.id === id ? {...skill, [name]:value} : skill
            )
        )
    }

    return (
        <div className="skillForm form">
            <h2>Skills</h2>

            {skillList.map(skill => (
                <div className="skillInput formInput" key={skill.id}>
                    <form onSubmit={e => e.preventDefault()}>
                        <div className="input-group">
                            <label htmlFor="skillGenre">Skill Genre: </label>
                            <input 
                                type="text" 
                                name="skillGenre" 
                                id="skillGenre" 
                                value={skill.skillName}
                                onChange={(e) => handleChange(skill.id, 'skillGenre', e.target.value)}
                                readOnly={!editing}
                                placeholder="Enter Skill Genre"
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="skills">Skills: </label>
                            <textarea
                                type="text" 
                                name="skills" 
                                id="skills" 
                                value={skill.skills}
                                onChange={(e) => handleChange(skill.id, 'skills', e.target.value)}
                                readOnly={!editing}
                                placeholder="Enter Skills"
                            />
                        </div>
                    </form>
                    <button type="button" className="delete-btn" onClick={() => handleDelete(skill.id)}>Delete</button>
                    
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
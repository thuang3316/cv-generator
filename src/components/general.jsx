import { useState } from "react";

export function General({generalInfoData, setGeneralInfoData}) {
    const [editing, setEditing] = useState(true);
    
    function handleEditBtn() {
        setEditing(true);
    }

    function handleSaveBtn() {
        setEditing(false);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setGeneralInfoData(prev => ({
        ...prev,
        [name]: value,
        }));
    }

    return (
        <div className="generalForm form">
            <h2>General Information</h2>
                <form onSubmit={e => e.preventDefault()}>
                    <div className="fullName inline-container">
                        <div className="input-group">
                            <label htmlFor="firstName">First Name: </label>
                            <input 
                                type="text" 
                                name="firstName" 
                                id="firstName" 
                                value={generalInfoData.firstName}
                                onChange={handleChange}
                                readOnly={!editing}
                                placeholder="Enter First Name"
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="lastName">Last Name: </label>
                            <input 
                                type="text" 
                                name="lastName" 
                                id="lastName" 
                                value={generalInfoData.lastName}
                                onChange={handleChange}
                                readOnly={!editing}
                                placeholder="Enter Last Name"
                            />
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address: </label>
                        <input 
                            type="text" 
                            name="address" 
                            id="address" 
                            value={generalInfoData.address}
                            onChange={handleChange}
                            readOnly={!editing}
                            placeholder="Enter Address"
                        />
                    </div>
                    <div className="contact-container inline-container">
                        <div className="input-group">
                            <label htmlFor="email">Email: </label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                value={generalInfoData.email}
                                onChange={handleChange}
                                readOnly={!editing}
                                placeholder="Enter Email"
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="phone">Phone number: </label>
                            <input 
                                type="tel" 
                                name="phone" 
                                id="phone" 
                                value={generalInfoData.phone}
                                onChange={handleChange}
                                readOnly={!editing}
                                placeholder="Enter Phone Number"
                            />
                        </div>
                    </div>
                </form>

            <div className="control-btns">
                {editing ? (
                <>
                    <button type="button" onClick={handleSaveBtn}>Save</button>
                </>
                ) : (
                <button type="button" onClick={handleEditBtn}>Edit</button>
                )}
            </div>
        </div>
    )
}
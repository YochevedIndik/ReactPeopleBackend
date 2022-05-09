import React from 'react';




function AddPersonForm({person, onTextChange, onAddButtonClicked, onCancelClick, onUpdateClick, editing}){
    const{firstName, lastName, age} = person;
    return (
        <div className="row jumbotron">
        <div className="col-md-3">
            <input value={firstName} onChange={onTextChange} name='firstName' type="text" className="form-control" placeholder="First Name" />
        </div>
        <div className="col-md-3">
            <input value={lastName} onChange={onTextChange} name='lastName' type="text" className="form-control" placeholder="Last Name" />
        </div>
        <div className="col-md-3">
            <input value={age} onChange={onTextChange} name='age' type="text" className="form-control" placeholder="Age" />
        </div>
        <div className="col-md-3">
          {editing ? <div><button className='btn btn-info' onClick={onUpdateClick}>Update</button>
          <button className='btn btn-danger' onClick={onCancelClick}>Cancel</button> </div>:
            <button className='btn btn-primary btn-block'  onClick={onAddButtonClicked}>Add</button>}
        </div>
    </div>
    



    )
}
export default AddPersonForm;

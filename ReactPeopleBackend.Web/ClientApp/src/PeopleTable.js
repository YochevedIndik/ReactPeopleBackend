import React from "react";
import axios from 'axios';
import PersonRow from "./PersonRow";
import AddPersonForm from "./AddPersonForm";

class PeopleTable extends React.Component{
    state = {
             people: [],
             person:{
                 firstName:'',
                 lastName:'',
                 age:''
             },
             editing: false,
    }
    componentDidMount(){
        axios.get('/api/people/getall').then(res =>{
            this.setState({people:res.data});
            
        });
    }
    getAll = () =>{
        axios.get('/api/people/getall').then((res) => {
            this.setState({
               people:res.data,
                person:{
                    firstName:'',
                    lastName:'',
                    age:''
                }
                
            })
        })
    }
     onTextChange = e =>{
        const copy = {...this.state.person};
        copy[e.target.name] = e.target.value;
        this.setState({person: copy});
        
    }
    onAddButtonClick = () =>{
        
        axios.post('/api/people/addperson', this.state.person).then(() => {
            this.getAll();
            
        });
    }
    onDeleteClick = (person) =>{
        axios.post('/api/people/delete', person).then(() =>{
            this.getAll();
        });
    }
    onEditClick = (person) =>{
        this.setState({person:person, editing:true});
    }
    onUpdateClick = (person) => {
        
        axios.post('/api/people/update', person).then(() => {
            this.getAll();
            this.setState({editing:false});
        })
    }
    onCancelClick = () => {
        this.setState({ editing: false, person: { firstName: '', lastName: '', age: '' } });
    }
    
  


                
            
            
        
    
    render(){
        const {people, person, editing} = this.state;
        return(
            <div className='container mt-5'>
                <AddPersonForm onAddButtonClicked={this.onAddButtonClick} 
                onTextChange={this.onTextChange} person={person}
                onCancelClick={this.onCancelClick}  onUpdateClick={() => this.onUpdateClick(person)} editing={editing}
                /> 
                <table className='table table-hover table-bordered table-striped'>
                    <thead>
                        <tr>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Age</td>
                            <td>Edit/Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                          {people.map(p => <PersonRow
                          onDeleteClick={() => this.onDeleteClick(p)} 
                          onEditClick={() => this.onEditClick(p)}
                          person={p} key={p.id}/>)}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default PeopleTable;
  
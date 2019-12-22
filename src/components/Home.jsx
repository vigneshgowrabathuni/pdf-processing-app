import React from 'react';
import { post } from 'axios';

class Home extends React.Component {
    constructor(props) { 
        super(props);
        this.state ={
          file:null
        }
      }
    
      handleSubmit = (e) => {
        e.preventDefault() // Stop form submit
        this.fileUpload(this.state.file).then((response)=>{
          console.log(response, "res");
        })
      }
    
      onChange = (e) => {
        this.setState({file: e.target.files[0]});
        console.log(e.target.files[0], "file");
      }
    
      fileUpload(file){
        const url = 'http://localhost:5000/api/pdf-encrypt';
        const formData = new FormData();
        formData.append('file',file)
        const config = {
            headers: {
              contentType : 'form/multi-part'
            }
        }
        return  post(url, formData,config)
      }
    
      render(){
      return (
          <div className="card" style={{marginTop: '100px'}}>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="pdf-file">Choose PDF file</label>
                  <input type="file" className="form-control-file" id="pdf-file" onChange={this.onChange}/>
                </div>
                <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
              </form>
            </div>
          </div>
      );
      }
}

export default Home;
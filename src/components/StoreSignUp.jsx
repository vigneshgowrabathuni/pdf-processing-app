import React from 'react';

class StoreSignUp extends React.Component {

    handleSubmit = (e) => {
        // .. do something
    }

    render() {
        return (
            <form>
                <div>
                    <h3 className="text-center">Store Sign Up</h3>
                </div>
                <div className="form-group col-md-6">
                    <label for="name">Name</label>
                    <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group col-md-6">
                    <label for="email">Email</label>
                    <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group col-md-6">
                    <label for="pwd">Password</label>
                    <input type="password" className="form-control" id="pwd" />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="pdf-file">Choose PDF file</label>
                    <input type="file" className="form-control-file" id="pdf-file" onChange={this.onChange}/>
                </div>
                <div className="form-group col-md-6">
                    <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Sign up</button>
                </div>
            </form>
        )
    }
}

export default StoreSignUp;
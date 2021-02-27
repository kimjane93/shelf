import React, { Component } from 'react'


let blankForm 


 
    

class AddComment extends Component {
    state = {
        invalidForm: true,
        formData: {
            resource: this.props.resource._id,user: this.props.user._id,
            userName: this.props.user.name,
            // userAvatar: this.props.user.avatar
            content: ''
        }
    }

    formRef = React.formRef()

    render(){
        return (
            <>
            <div>
                <form ref={this.formRef} onSubmit={this.handleSubmit}>
                    <input type="text" name="content" value={this.state.formData.content} onChange={this.handleChange} />
                </form>
                <button type="submit" >Add Comment</button>
            </div>
            </>
        )
    }
}


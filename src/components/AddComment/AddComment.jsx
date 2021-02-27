import React, { Component } from 'react'


class AddComment extends Component {
    state = {
        invalidForm: true,
        formData: {
            resource: this.props.resource._id,
            user: this.props.user._id,
            userName: this.props.user.name,
            // userAvatar: this.props.user.avatar
            content: ''
        }
    }

    formRef = React.formRef()

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleAddComment(this.state.formData)
        this.setState({ formData: {content: ''} })
    }

    handleChange = (e) => {
        const formData = {
            ...this.state.formData, [e.target.name]: e.target.value
        }
        this.setState({ 
            formData: formData, 
            invalidForm: !this.formRef.current.checkValidity()
        })
    }


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

export default AddComment
import React from 'react';
import {connect} from 'react-redux'
import {deletePost} from '../actions/Action'

class Post  extends React.Component{
    handleDelete = () => {
        this.props.deletePost(this.props.post.id)
        this.props.history.push('/reducer')
    }
    render() {
        console.log(this.props)
        //const {post} = this.props.post
        const post=this.props.post ? (<div>
            <h4>{this.props.post.id}</h4>
            <p>{this.props.post.name}</p>
            <div className=''>
                <button onClick={this.handleDelete}>DELETE</button>
            </div>
        </div>) : (<div>
            Loading Post ...
        </div>)
    return(<div>{post}</div>)
} }

const mapStoreStateToComponentProps = (state, ownProps) => {
    let id =ownProps.match.params.post_id
    return({
        post: state.posts.find(post => (post.id == id))
    })
}

const mapDispacherToProps = (dispacher) => {
    return {
        deletePost: (id) => {dispacher(deletePost(id))}
    }
}

export default connect(mapStoreStateToComponentProps, mapDispacherToProps)(Post)
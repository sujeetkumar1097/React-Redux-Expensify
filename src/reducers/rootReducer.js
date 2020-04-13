

const initState = {
    posts: [{id:'1' , name:'sujeet', roll: '100'},
            {id:'2' , name:'sanjeet', roll: '200'}],
    delete: []
    
}

const rootReducer = (state = initState, action) => {
    switch(action.type){
        case 'DELETE_POST':
            let newPosts = state.posts.filter(post => post.id !== action.id)
            return Object.assign(...state, {
                posts: newPosts
              });
              
        default:
                return state
    }
    // if(action.type === 'DELETE_POST') {
    //     let newPosts = state.posts.filter(post => post.id !== action.id)
    //         return {
    //             ...state,
    //             posts: newPosts
    //         }
    // }
    
    // return state;
}

export default rootReducer ;
import React,{Component} from 'react'

class Posts extends Component{
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    render(){
        return(
            <section className="Posts">
                {posts}
            </section>
        )
    }
}


export default Posts
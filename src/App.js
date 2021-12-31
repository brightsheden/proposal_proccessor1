import logo from './logo.svg';
//import './App.css';
//import classes from './BlogCard.module.css'
import React, {Component} from 'react';

import  BlogCard from './BlogCard';
import {isArrayEmpty} from './utils'

class App extends Component {
 // const firstName = "John"
  //const lastName= "wick"
 // const gender = "male"
  //const job="designer"
  //const age= "30"
   //var placeholder = "enetr ur name"
   //jsx in variables
  // const textbox = <input placeholder={placeholder} autoComplete/>
   //jsx with array
   //const mArray = ["bola","tolu","bose"]
    //jsx with ubjexts
    /*const blogPost = {
      header : "Blog post",
      description : "lorem ipsum donire accertar santos"
    }
    // styling as a variables
    //const styles= ""
    //generate react element dynamically with Array objrcts*/
    //state concept
    
    state = {
      showBlogs: true,
      blogArr : [
        { id : 1,
          header : "Blog post 1",
        description : "no lorem ipsum donire accertar santos",
        likeCount : 0
  
        },
        { id : 2,
          header : "Blog post 2",
        description : "lorem ipsum donire accertar santos",
        likeCount : 0
        },
        {id : 3,
          header : "Blog post 3",
        description : "lorem ipsum donire accertar santos",
        likeCount : 0
        }
      ]
    }

    
  onlikebtnClick= (pos)=>{
      const updateBlogList = this.state.blogArr;
      const updatedBlogObj = updateBlogList[pos];
      updatedBlogObj.likeCount = updatedBlogObj.likeCount + 1;
      this.setState({blogArr: updateBlogList})
    } 
     
     onhidebtn = () => {
     // let update = !this.state.showBlogs;
      this.setState((prevState, prevProp) =>{
      return  {showBlogs :! prevState.showBlogs }} );
         console.log(this.showBlogs)
    }
    render () {
      console.log(this.state);
      const BlogCards =isArrayEmpty(this.state.blogArr) ? [] :  this.state.blogArr.map((item, pos) => {
        console.log(item);
        return(
          <BlogCard key={pos} title={item.header} id={item.id} desc={item.description} likeCount={item.likeCount} onlikebtnClick={() => this.onlikebtnClick(pos)} />
       /* <div className="BlogCard" key={item.id} >
       <h3>{item.header}</h3>
       <p>{item.description}</p>
       </div>
       */
        )
  
      })
      return (
        <div className="App">
      { this.state.showBlogs ? BlogCards : null
       }
      <button onClick={this.onhidebtn}>{this.state.showBlogs ? "hidelist" : "showlist"}</button>
      <br></br>
     
     
     
    </div>

      );
    }
  
}

export default App;


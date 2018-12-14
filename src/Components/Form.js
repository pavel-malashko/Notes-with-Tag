import React, { Component } from 'react';
import Post from "./Post";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            tag: '',
            data:[],
            note: [],
            json: null,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleActive = this.handleActive.bind(this);
        this.noteChange = this.noteChange.bind(this);
        this.searchTag = this.searchTag.bind(this);
    }
    handleActive(item){
        this.setState({ value: item});
    }
    noteChange(e){
        this.setState({
            tag: e.target.value,
        });
    }
    searchTag(e){
        e.preventDefault();
        let data = this.state.data;
        let indexOfStevie = data.findIndex(i => i.indexOf(this.state.tag) !==-1);
        data.unshift(data[indexOfStevie]);
        data.splice(indexOfStevie+1,1);
        this.setState({
            data:data
        })
    }
    handleChange(e) {
        this.setState({
            value: e.target.value,
        });
        let val = this.state.value.split(/(#[a-z\d-]+)/ig);
        for (let i = 0; i < val.length; i++) {
            if (val[i].charAt(0) === "#") {
                let array = [];
                array.push(val[i]);
                this.setState({
                    note: array
                });
            }
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        let myJson = {
            data:this.state.data,
            note:this.state.note
        };
        this.setState({
             data: this.state.data.concat(this.state.value),
             json: JSON.stringify(myJson)
        });
    }
     delPost = (index)=>{
        let arr = this.state.data;
        arr.splice(index,1);
        this.setState({ data: arr});
    };
     delHashtag = (index)=>{
         let tag = this.state.note;
         let val = this.state.value;
         let del = tag.splice(index,1);
         let clearTag = val.substring(0, val.length - 1).replace(del,'');
         this.setState({
             note: tag,
             value: clearTag,
         });
     };
    edit = (index)=>{
        let val = this.state.value;
        let arr = this.state.data;
        arr.splice(index,1,val);
        this.setState({ data: arr});
    };
    render() {
        return (
            <div>
               <Post
                   value={this.state.value}
                   data={this.state.data}
                   note={this.state.note}
                   tag={this.state.tag}
                   handleChange={this.handleChange}
                   delHashtag={this.delHashtag}
                   delPost={this.delPost}
                   edit={this.edit}
                   handleSubmit={this.handleSubmit}
                   handleActive={this.handleActive}
                   searchTag={this.searchTag}
                   noteChange={this.noteChange}
               />
            </div>
        );
    }
}
export default Form;

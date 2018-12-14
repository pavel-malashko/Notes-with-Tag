import React, { Component } from 'react';
import PropTypes from "prop-types";

class Post extends Component {
    render() {
        return (
            <div className="Post">
                <form className="someText">
                    <textarea value={this.props.value} onChange={this.props.handleChange} placeholder="Введите техт"></textarea>
                    <button className="save" onClick={this.props.handleSubmit}>Сохранить</button>
                </form>
                <form className="searchTag">
                    <input placeholder="Искать заметку по тегу" value={this.props.tag} onChange={this.props.noteChange} />
                    <button className="tagButton" onClick={this.props.searchTag}>Искать</button>
                </form>
                <ul className='listBox'>
                    {this.props.data.length > 0? this.props.data.map((item, index) =>
                        <div key={index} className='notes'>
                            <li onClick={()=>this.props.handleActive(item)} className='someNote'>{item}</li>
                            <button onClick={() => this.props.edit(index)} className='changeNote'>Изменить заметку</button>
                            <button onClick={() => this.props.delPost(index)} className='delNote'>Удалить заметку</button>
                        </div>                    
                    ) : null}
                </ul>
                <ul className='containerNote'>
                    {this.props.note.length > 0 ? this.props.note.map((item, index)=>
                        <div key={index} className='tags'>
                            <li className='someTag'>{item}</li>
                            <button onClick={() => this.props.delHashtag(index)} className='delTag'>Удалить тэг</button>
                        </div>
                    ): null}
                </ul>
            </div>
        )}
}
Post.propTypes = {
    data: PropTypes.array,
    note: PropTypes.array,
    searchTag: PropTypes.func,
    edit: PropTypes.func,
    handleChange: PropTypes.func,
    delHashtag: PropTypes.func,
    delPost: PropTypes.func,
    handleSubmit: PropTypes.func,
    noteChange: PropTypes.func,
    json: PropTypes.object,
    value: PropTypes.string,
    tag: PropTypes.string
};
export default Post;

/**
 * Image é uma classe que apenas renderiza as imagens que são colocadas na grid e na home page
 */

import React, {Component} from 'react';

class Image extends Component {
    render(){
        return(
            <>
                <div className='image'>
                    <img className={this.props.name} src={this.props.src} alt='Photo'/>
                </div>
            </>
        )
    }
}

export default Image;
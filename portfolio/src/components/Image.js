/* onde se vai inserir codigo da grid entre outras coisas do site*/
/* o essencial por assim dizer*/

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
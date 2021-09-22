import React from 'react'

class Card extends React.Component{
    render(){
      return(

        <div className="card w-100">
        <img src={this.props.image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{this.props.myTitle}</h5>
          <p className="card-text">This is a wider card.</p>
          <p className="card-text"><small className="text-muted">{this.props.myHour}</small></p>
        </div>
      </div>

    )
    }
}

Card.defaultProps = {
  myTitle:'Default Card title'
}

export default Card
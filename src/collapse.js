import React from "react"

class Collapse extends React.Component {
    constructor(props){
        super(props);

        this.state = { showContent:true}
    }
      
      


showMore = () =>{
    this.setState({showContent:!this.state.showContent})
}

    render() {
        return (
            <div>
                <button className="btn btn-primary w-100" onClick = {this.showMore}>
                   { console.log(this.props.children.props)}
                   {/* {React.Children.map(this.props.children, children =>children.props.myTitle)} */}
                </button>
                {
                    this.state.showContent ? (
                        <div className="collapse show">
                        {this.props.children}
                    </div>
                    ) : null
                }


            </div>
        );
    }
};

export default Collapse
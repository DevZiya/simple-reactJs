import React from 'react'
import ReactDOM from 'react-dom'
import Card from './card'
import Collapse from './collapse'



const App = () => {
    return (
        <div className='container'>
            <div className='col'>
            <div className='cardGroup w-100'>
                <div className='row'>
                        <Collapse href='collapseExample1'>
                            <Card
                                myTitle='Form 3'
                                myHour='5 deqiqe evvel'
                                image='img1.jpg' />,
                        </Collapse>

                        <Collapse href='collapseExample2'>
                            <Card
                                myTitle='Form 4'
                                myHour='6 deqiqe evvel'
                                image='img2.jpg' />,
                        </Collapse>

                        <Collapse href='collapseExample3'>
                            <Card
                                myTitle='Form 5'
                                myHour='7 deqiqe evvel'
                                image='img3.jpg' />,
                        </Collapse>

                    </div>
                </div>
            </div>


        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
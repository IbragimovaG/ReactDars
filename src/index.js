import React from 'react'
import ReactDOM from 'react-dom';

class Index extends React.Component {
    state = {
        count:0

    }

   addCount=()=>{
       this.setState({
           count:this.state.count + 1
       })
}
removeCount=()=>{
        this.setState({
            count:this.state.count - 1
        })
    }


    render() {
        return <div>
            <div className={'card'}>
                <div className={'card-header'}>
                    <h3>Counter</h3>
                </div>
                <div className={'card-body'}>
                <h1>{this.state.count}</h1>
                </div>
                <div className={'card-footer'}>
                    <button className={'btn btn-success'} onClick={this.addCount}>+</button>
                    <button className={'btn btn-danger ml-1'} onClick={this.removeCount}>-</button>

                </div>
            </div>
            <p>lorem</p>
        </div>
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('root')
)

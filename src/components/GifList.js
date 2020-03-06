import React ,{Component} from 'react'
class GifList extends Component {
  render(){
    return(
      <div> 
      <ul>
      {this.props.list}.map(e => {<li> e. </li>})
      </ul>
      </div>
      )
  }
}
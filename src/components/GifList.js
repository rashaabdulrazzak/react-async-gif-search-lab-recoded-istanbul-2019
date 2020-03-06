import React ,{Component} from 'react'
class GifList extends Component {
  render(){
    return(
      <div> 
      <ul>
      {this.props.list}.map(e => {<li> <img src='e.images.original.url' alt='image'/> </li>})
      </ul>
      </div>
      )
  }
}
export default GifList
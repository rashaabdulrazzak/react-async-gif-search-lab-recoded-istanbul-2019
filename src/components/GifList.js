import React ,{Component} from 'react'
class GifList extends Component {
  render(){
    return(
      <div> 
      <ul>
       {this.props.list.map(iimg=>{
                    return <li><img src={iimg.images.original.url} alt=""/></li>
                })}
      </ul>
       
      </div>
      )
  }
}
export default GifList
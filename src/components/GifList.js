import React ,{Component} from 'react'
class GifList extends Component {
  render(){
    return(
      <div> 
      <ul>
      //{this.props.list}.map(item=>{return <li><img src={item.images.original.url} alt='image'/> </li>})
      </ul>
        {this.props.list.map(iimg=>{
                    return <li><img src={iimg.images.original.url} alt=""/></li>
                })}
      </div>
      )
  }
}
export default GifList
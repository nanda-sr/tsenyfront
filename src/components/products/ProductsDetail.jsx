import React from 'react';
import {Card, Image, Icon, Modal, Header} from 'semantic-ui-react';
import {Link} from 'react-router-dom';


export const ElecDetail = ({name, image, regularPrice, sku, thumbnailImage, url, shortDescription, longDescription, wishList}) => {
  return (
    <div>
    {console.log(regularPrice)}
      <Card>
    <Image style={{width: '200px', height:'200px',  display:'flex', alignSelf: 'center', margin:'10px'}} src={image}/>
    <Card.Content>
      <Card.Header>
      <Icon name= 'dollar'/>{regularPrice}
      </Card.Header>
      <Card.Description>
        {name}
      </Card.Description>
    </Card.Content>
    <Card.Content extra >

     <Icon name='plus' onClick={()=>wishList({sku})}/> Add to wish list 

      <Modal className='detailModal' trigger={<Icon style={{marginLeft: '5px'}} name='sticky note'>Detail</Icon>}>
    <Modal.Header>{name}</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src={image} />
      <Modal.Description>
        <Header>Description</Header>
        <p>{longDescription}</p>
        <Header as="h4">Price: <p>{regularPrice}</p></Header>
        <a href={url}><Icon name='cart'/>Buy Product</a>
      </Modal.Description>
    </Modal.Content>
  </Modal>


    </Card.Content>
  </Card>
    </div>
  )
}
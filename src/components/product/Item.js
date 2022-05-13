import React from "react";
import {
    Container,
    Image,
    Row,
    Col,
    Card,
    Nav,
    Navbar,
    Dropdown,
    Button,
    Form} from "react-bootstrap";
// import MenuItem from './MenuItem';
import Robot_img from '../../assets/image/nft/robot.png';
import Cart_img from '../../assets/image/nft/cart.png';
import Room_img from '../../assets/image/nft/room.png';
import Bear_img from '../../assets/image/nft/bear.png';
import Flower_img from '../../assets/image/nft/flower.png';
import Clock_img from '../../assets/image/nft/clock.png';
import Water_img from '../../assets/image/nft/water.png';
import Stick_img from '../../assets/image/nft/stick.png';
import Grando_img from '../../assets/image/icon/Grando.png';
import Equipment_img from '../../assets/image/icon/Equipment.png';
import Wear_img from '../../assets/image/icon/Wear.png';
import Art_img from '../../assets/image/icon/Art.png';
import Ether_img from '../../assets/image/icon/ether.png';
import HeartCircle_img from '../../assets/image/icon/heart-circle.png';
import BagCircle_img from '../../assets/image/icon/Bag-circle.png';
import Eye_img from '../../assets/image/icon/eye.png';
import HeartEmpty_img from '../../assets/image/icon/heart-empty.png';
import CheckButton_img from '../../assets/image/icon/check-button.png';

function Item() {
    const NftItemdata = [
        {NftImg: Robot_img, CatImg: Grando_img, CatName:"GRANDO ITEM #RARE", CheckOne: Wear_img, CheckTwo: Art_img, CheckThree: Equipment_img, Maker: "YGGDRAZILTEAM", cryPrice: "0.069", price: "2,388.74", eye: "120K", heart: "80.1K", href:""},
        {NftImg: Cart_img, CatImg: Grando_img, CatName:"GRANDO ITEM #RARE", CheckTwo: Art_img, CheckThree: Equipment_img, Maker: "YGGDRAZILTEAM", cryPrice: "0.069", price: "2,388.74", eye: "120K", heart: "80.1K", href:""},
        {NftImg: Room_img, CatImg: Grando_img, CatName:"GRANDO ITEM #RARE", CheckThree: Equipment_img, CheckButton: CheckButton_img, Maker: "YGGDRAZILTEAM", cryPrice: "0.069", price: "2,388.74", eye: "120K", heart: "80.1K", href:""},
        {NftImg: Bear_img, CatImg: Grando_img, CatName:"GRANDO ITEM #RARE", CheckOne: Wear_img, CheckTwo: Art_img, Maker: "YGGDRAZILTEAM", cryPrice: "0.069", price: "2,388.74", eye: "120K", heart: "80.1K", href:""},
        {NftImg: Flower_img, CatImg: Grando_img, CatName:"GRANDO ITEM #RARE", CheckTwo: Art_img, CheckButton: CheckButton_img, Maker: "YGGDRAZILTEAM", cryPrice: "0.069", price: "2,388.74", eye: "120K", heart: "80.1K", href:""},
        {NftImg: Clock_img, CatImg: Grando_img, CatName:"GRANDO ITEM #RARE", CheckOne: Wear_img, CheckTwo: Art_img, CheckThree: Equipment_img, Maker: "YGGDRAZILTEAM", cryPrice: "0.069", price: "2,388.74", eye: "120K", heart: "80.1K", href:""},
        {NftImg: Water_img, CatImg: Grando_img, CatName:"GRANDO ITEM #RARE", CheckOne: Wear_img, CheckTwo: Art_img, CheckThree: Equipment_img, Maker: "YGGDRAZILTEAM", cryPrice: "0.069", price: "2,388.74", eye: "120K", heart: "80.1K", href:""},
        {NftImg: Stick_img, CatImg: Grando_img, CatName:"GRANDO ITEM #RARE", CheckOne: Wear_img, CheckTwo: Art_img, CheckThree: Equipment_img, CheckButton: CheckButton_img, Maker: "YGGDRAZILTEAM", cryPrice: "0.069", price: "2,388.74", eye: "120K", heart: "80.1K", href:""},
        {NftImg: Robot_img, CatImg: Grando_img, CatName:"GRANDO ITEM #RARE", CheckOne: Wear_img, CheckTwo: Art_img, CheckThree: Equipment_img, Maker: "YGGDRAZILTEAM", cryPrice: "0.069", price: "2,388.74", eye: "120K", heart: "80.1K", href:""},
        {NftImg: Robot_img, CatImg: Grando_img, CatName:"GRANDO ITEM #RARE", CheckOne: Wear_img, CheckTwo: Art_img, CheckThree: Equipment_img, Maker: "YGGDRAZILTEAM", cryPrice: "0.069", price: "2,388.74", eye: "120K", heart: "80.1K", href:""},
        {NftImg: Robot_img, CatImg: Grando_img, CatName:"GRANDO ITEM #RARE", CheckOne: Wear_img, CheckTwo: Art_img, CheckThree: Equipment_img, Maker: "YGGDRAZILTEAM", cryPrice: "0.069", price: "2,388.74", eye: "120K", heart: "80.1K", href:""},        
    ];
  return (
      <div className="cards">
        {NftItemdata.map((item, index) => (
        <div className="nft-card col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-3">
            <Card className="each-card">
            <Card.Img src={item.NftImg} className="nft-img" />
            <Card.Body>
                <div className="cat-text">
                    <Image src={item. CatImg} className="cat-img" />
                    <p className="cat-name">GRANDO ITEM #RARE</p>
                </div>
                <div>
                    <Image className="checkone" src={item.CheckOne} />
                    <Image className="checkone" src={item.CheckTwo} />
                    <Image className="checkone" src={item.CheckThree} />
                    <Image className="check-button" src={item.CheckButton}></Image>
                </div>
                <div className="maker">CREATE BY: {item.Maker}</div>
                <div className="price-row">
                    <div className="ether-price">
                        <Image className="ether-img" src={Ether_img} />
                        <Col className="nft-price">
                            <p className="nft-val">0.069</p>
                            <p className="dol-val">($2,388.74)</p>
                        </Col>
                    </div>
                    <div>
                        <Image className="fav-img" src={HeartCircle_img} />
                        <Image className="cart-img" src={BagCircle_img} />
                    </div>
                </div>
                <div className="value">
                    <div className="read">
                        <Image className="eye-img" src={Eye_img} />120K
                    </div>
                    <div className="estimate">
                        <Image className="heartempty-img" src={HeartEmpty_img} />80.1K
                    </div>
                </div>
            </Card.Body>
            </Card>        
        </div>
        ))}
    </div>
  );
}

export default Item;
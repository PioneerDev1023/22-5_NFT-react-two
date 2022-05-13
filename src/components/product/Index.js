import React from 'react';
import {Container,
        Col,
        Row,
        Dropdown,
        InputGroup,
        FormControl
        } from 'react-bootstrap';
import Header from '../home/Header';
import SearchPage from './Search';
import Item from './Item';
import Filter from './Filter';
import './style.css';

export default function Product() {
return (
    <div>
        <Header />
        <Container>
            <Row>
                <p className='cat-title'>SELECT CATEGORY
                    <Dropdown>
                        <Dropdown.Toggle className="cat-btn bg-white color-gray">
                            GRANDORA
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item className='dropdown-title' href="">SPORTS</Dropdown.Item>
                            <Dropdown.Item className='dropdown-title' href="">ARTS</Dropdown.Item>
                            <Dropdown.Item className='dropdown-title' href="">MUSIC</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </p>
            </Row>
            <SearchPage />
            <Item />
        </Container>
        <Filter />
    </div>
  )
}

import React from 'react'
import PropTypes from 'prop-types'
import ProductCard from './ProductCard'
import { Container, Row, Col } from 'reactstrap'
import { chunk } from 'lodash'
import {PRODUCT_LIST_ITEMS_IN_ROW} from "../../../const/Commons"

const ProductsList = ({ list }) => {
  const rows = chunk(list, PRODUCT_LIST_ITEMS_IN_ROW)
  const columnSize = Math.floor(12 / PRODUCT_LIST_ITEMS_IN_ROW)
  return (
    <Container>
      {rows.map((row, index) => (
        <Row key={index} className="mb-5">
          {row.map(product => (
            <Col className="products-product-card" sm={columnSize} key={product.id}>
              <ProductCard {...product}/>
            </Col>))}
        </Row>
      ))}
    </Container>
  )
}

ProductsList.propTypes = {
  list: PropTypes.array.isRequired,
}

export default ProductsList
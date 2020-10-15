import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import CategoryList from "../categories/CategoryList";
import ProductList from "../products/ProductList";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Row>

                    <Col xs="2">
                        <CategoryList/>
                    </Col>

                    <Col xs="10">
                        <ProductList/>
                    </Col>

                </Row>
            </div>
        );
    }
}

Dashboard.propTypes = {};

export default Dashboard;

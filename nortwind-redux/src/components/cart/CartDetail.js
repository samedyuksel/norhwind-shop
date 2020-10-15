import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import {connect} from 'react-redux'
import Badge from "reactstrap/es/Badge";
import {Table,Button} from "reactstrap";
import alertify from "alertifyjs"

class CartDetail extends Component {
    removeFromCart(product){
        this.props.actions.removeFromCart(product);
        alertify.error(product.productName + " removed from cart!")
    }
    render() {
        return (
            <div>
                <Table hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th> </th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.cart.map(cartItem => (
                        <tr key={cartItem.productID}>
                            <th scope="row">{cartItem.product.id}</th>
                            <td>{cartItem.product.productName}</td>
                            <td><Badge color="success">$ {cartItem.product.unitPrice}</Badge></td>
                            <td>@{cartItem.quantity}</td>
                            <td><Button color="danger" onClick={()=>this.removeFromCart(cartItem.product)}>Remove</Button></td>
                        </tr>
                    ))}

                    </tbody>
                </Table>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);

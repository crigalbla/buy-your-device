import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

import { Modal } from '../../components';
import {
    EMPTY_PRODUCT, READY_TO_ADD_MORE, startAddProduct, startGetProduct,
} from '../../redux/actions/product.action';
import { SHOPPING_CART_ITEM_ADDED } from '../../redux/actions/shoppingCart.action';

import './productDetails.scss';

const ProductDetails = () => {
    const history = useHistory();
    const { id } = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state) => state.Product);
    const [isLoading, setIsLoading] = useState(true);

    const thereIsProduct = product && product.id;

    const onClickAddButton = (e) => {
        const { color, storage } = e.target.form;
        dispatch(startAddProduct({
            method: 'post',
            path: '/cart',
            data: { id, colorCode: color.value, storageCode: storage.value },
        }));
        dispatch({ type: SHOPPING_CART_ITEM_ADDED, value: product });
    };

    const renderCameras = () => {
        if (product.primaryCamera) {
            if (typeof product.primaryCamera === 'object') {
                return (
                    <ul>
                        {product.primaryCamera.map((camera) => <li key={camera}>{camera}</li>)}
                    </ul>
                );
            }

            return product.primaryCamera;
        }

        return 'N/A';
    };

    useEffect(() => {
        dispatch(startGetProduct({ method: 'get', path: `/product/${id}` }));

        return dispatch({ type: EMPTY_PRODUCT });
    }, [id]);

    useEffect(() => {
        if (product && (product.id || product.error)) {
            setIsLoading(false);
        } else {
            setIsLoading(true);
        }
    }, [product]);

    return (
        <div className="productDetails-div__main">
            {isLoading
                ? <div className="productDetails-center__center h1">Cargando...</div>
                : !thereIsProduct && (
                    <div className="productDetails-center__center productDetails-div__notFound">Producto no encontrado o no existe</div>
                )}
            {product.error && <Modal show title="Error" text={product.error} />}
            {product.productAdded
                && <Modal show title="Éxito" text={product.productAdded} beforeClose={() => dispatch({ type: READY_TO_ADD_MORE })} />}
            {thereIsProduct
                && (
                    <div className="row">
                        <div className="col-md-6 align-self-center">
                            <div className="productDetails-div__img">
                                <img src={product.imgUrl} alt="error-img" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="productDetails-div__decrip">
                                <div className="d-flex justify-content-center h3 fw-bold">
                                    Descripción
                                </div>
                                <div>
                                    <strong>Marca: </strong>
                                    {product.brand || 'N/A'}
                                </div>
                                <div>
                                    <strong>Modelo: </strong>
                                    {product.model || 'N/A'}
                                </div>
                                <div>
                                    <strong>Precio: </strong>
                                    {`${product.price || '-'}€`}
                                </div>
                                <div>
                                    <strong>CPU: </strong>
                                    {product.cpu || 'N/A'}
                                </div>
                                <div>
                                    <strong>RAM: </strong>
                                    {product.ram || 'N/A'}
                                </div>
                                <div>
                                    <strong>Sistema Operativo: </strong>
                                    {product.os || 'N/A'}
                                </div>
                                <div>
                                    <strong>Resolución de pantalla: </strong>
                                    {product.displaySize || 'N/A'}
                                </div>
                                <div>
                                    <strong>Batería: </strong>
                                    {product.battery || 'N/A'}
                                </div>
                                <div>
                                    <strong>Cámaras:</strong>
                                    <div className="ms-4">
                                        <div>
                                            <strong>- Principal: </strong>
                                            {renderCameras()}
                                        </div>
                                        <div>
                                            <strong>- Secundaria: </strong>
                                            {product.secondaryCmera || 'N/A'}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <strong>Dimensiones: </strong>
                                    {product.dimentions || 'N/A'}
                                </div>
                                <div>
                                    <strong>Peso: </strong>
                                    {product.weight ? `${product.weight} g` : 'N/A'}
                                </div>
                            </div>
                            <div className="productDetails-div__actions">
                                <div className="d-flex justify-content-center h3 fw-bold">
                                    Elegir prestaciones
                                </div>
                                <Form>
                                    <Form.Group controlId="options-storages">
                                        <Form.Label><strong>Almacenamiento: </strong></Form.Label>
                                        <Form.Control as="select" name="storage">
                                            {product && product.options && product.options.storages
                                                .map((memory) => <option key={memory.code} value={memory.code}>{memory.name}</option>)}
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="options-colors">
                                        <Form.Label><strong>Colores: </strong></Form.Label>
                                        <Form.Control as="select" name="color">
                                            {product && product.options && product.options.colors
                                                .map((color) => <option key={color.code} value={color.code}>{color.name}</option>)}
                                        </Form.Control>
                                    </Form.Group>
                                    <Button className="text-light m-2" variant="info" type="button" onClick={() => history.push('/home')}>
                                        Volver al listado
                                    </Button>
                                    <Button className="m-2" variant="success" type="button" onClick={(e) => onClickAddButton(e)}>
                                        Añadir al carrito
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    );
};

export default ProductDetails;

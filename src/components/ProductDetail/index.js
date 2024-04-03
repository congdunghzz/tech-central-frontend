
function ProductDetail({productDetail}){
    console.log(productDetail);
    return (
        <div className="product-detail my-5">
            <table className="table table-sm table-striped w-75">
                <tbody>
                    <tr>
                        <th scope="row"></th>
                        <td>CPU</td>
                        <td>{productDetail.cpu}</td>
                        
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>RAM</td>
                        <td>{`${productDetail.ram} GB`}</td>
                        
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>ROM</td>
                        <td>{`${productDetail.rom} GB`}</td>

                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>Screen</td>
                        <td>{productDetail.screen} inch</td>

                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>Resolution</td>
                        <td>{productDetail.resolution}</td>

                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>Color</td>
                        <td>{productDetail.color}</td>

                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>Material</td>
                        <td>{productDetail.material}</td>

                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ProductDetail;
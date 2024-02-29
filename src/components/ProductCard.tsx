import { ProductProps } from "../types/types";

const ProductCard = ({ product }:ProductProps) => {
    const { id, brand, product: name, price } = product;

    return (
        <li className="content__item">
            <div className="content__product">
                {name} {brand}
            </div>
            <div className="content__price">{price} rub</div>
            <div className="content__id">{id}</div>
        </li>
    );
};

export default ProductCard;

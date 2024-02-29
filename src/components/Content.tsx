import Spinner from "./Spinner";
import ProductCard from "./ProductCard";
import { useEffect, useState, useMemo } from "react";
import { useFetchData } from "../hooks/useFetchData";
import { defaultLimit, actions } from "../constants";
import { getUniqElements } from "../utils/helpers";
import { ContentProps, ItemsData } from "../types/types";
import "../styles/content.scss";

const Content = ({ activeFilter }: ContentProps) => {
    const [page, setPage] = useState<number>(0);
    const { data: ids, getData: getIds, fetchError: idsFetchError, loading: idsLoading } = useFetchData<string>(activeFilter ? actions.filter : actions.getIds);
    const { data: items, getData: getItems, fetchError: itemsFetchError, loading: itemsLoading } = useFetchData<ItemsData>(actions.getItems);

    useEffect(() => {
        activeFilter ?
            getIds({ [activeFilter.name]: activeFilter.value }) :
            getIds({ "offset": page * defaultLimit, "limit": defaultLimit });
    }, [getIds, activeFilter, page]);

    useEffect(() => {
        if (ids?.length) {
            getItems({ "ids": ids });
        }
    }, [ids, getItems]);

    const nothingHasFound = useMemo(() => {
        return !ids?.length && !idsFetchError && !itemsFetchError;
    }, [ids, idsFetchError, itemsFetchError]);

    return (
        <section className="content">
            <div className="content__pagination">
                <button
                    onClick={() => setPage((prev) => prev - 1)}
                    disabled={page === 0}
                >←</button>
                <button
                    onClick={() => setPage((prev) => prev + 1)}
                >→</button>
            </div>
            {idsFetchError && 
                <div className="content__error">{idsFetchError}</div>}
            {itemsFetchError && 
                <div className="content__error">{itemsFetchError}</div>}
            {idsLoading || itemsLoading && < Spinner />}
            {nothingHasFound ?
                <div className="content__error">No products found</div> :
                <ul className="content__list">
                    {getUniqElements(items)?.map((product) =>
                        <ProductCard key={product.id} product={product} />
                    )}
                </ul>
            }
        </section >
    );
};

export default Content;
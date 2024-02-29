import { useCallback, useState } from "react";
import { IFiltersValue, FilterProps } from "../types/types";
import { defaultFilter, selectOptions } from "../constants";
import "../styles/filters.scss";

const Filters = ({ addActiveFilter }: FilterProps) => {
    const [showFilter, setShowFilter] = useState<IFiltersValue | null>(null);
    const [selectValue, setSelectValue] = useState(defaultFilter.name);
    const [inputValue, setInputValue] = useState<string | number>(defaultFilter.value);

    const changeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectValue(event.target.value);
    };

    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.type === "number" ?
            Number(event.target.value) :
            event.target.value
        );
    };

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        addActiveFilter({ name: selectValue, value: inputValue });
        setInputValue(defaultFilter.value);

        if (inputValue !== defaultFilter.value) {
            setShowFilter({ name: selectValue, value: inputValue });
        }
    };

    const resetFilter = useCallback(() => {
        setShowFilter(null);
        addActiveFilter(null);
    }, [addActiveFilter]);

    return (
        <section className="filters">
            <label htmlFor="filter">Sort by:</label>
            <select
                className="filters_select"
                onChange={changeSelect}
                name="filter"
            >
                {selectOptions.map(({ name, value }, i) =>
                    <option key={i} value={value}>{name}</option>)}
            </select>

            <form
                className="filters_form"
                onSubmit={handleSubmit}>
                <input
                    type={selectValue === defaultFilter.name ? "number" : "text"}
                    name={selectValue}
                    placeholder="Search..."
                    value={inputValue}
                    onChange={changeValue}
                />
                <button>Search</button>
                {showFilter &&
                    <div className="filters__toShow">
                        <div>{showFilter.name}: {showFilter.value}</div>
                        <button onClick={resetFilter}>x</button>
                    </div>}
            </form>
        </section>
    );
};

export default Filters;
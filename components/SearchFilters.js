import { useState, useEffect } from "react";
import {useRouter } from "next/router";
import { MdCancel} from 'react-icons/md'
import {filterData, getFilterValues} from '../utils/filterData'


const SearchFilters = () => {
    const [filters, setFilters] = useState(filterData);
    const router = useRouter()


    const searchProperties = (filterValues) => {
        const path = router.pathname;
        const { query } = router;

        const values = getFilterValues(filterValues);

        values.forEach((item) => {
            if(item.value && filterValues?.[item.name]) {
                query[item.name] = item.value

            }
        })
        router.push({pathname: path, query })
    }
    return (
    <div className="d-flex bg-light p-3 justify-content-center flex-wrap">
        {filters.map((filter) => (
            <div key={filter.queryName} className="m-2">
            <select 
            placeholder={filter.placeholder} 
            className="form-select py-3" 
            onChange={(e) => searchProperties({[filter.queryName]: e.target.value})}
            >
  <option defaultValue={true}>{filter.placeholder}</option>

            {filter?.items?.map((item => (
                <option value={item.value} key={item.value}>
                    {item.name}
                </option>
            )))}
            </select>
            </div>
        ))}
    </div>
    );
};

export default SearchFilters;

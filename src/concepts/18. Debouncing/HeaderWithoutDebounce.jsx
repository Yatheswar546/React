import { useEffect, useState } from "react";
import axios from "axios";

export default function Header() {

    const [searchKey, setSearchKey] = useState("");
    const [results, setResults] = useState([]);

    const handleChange = (e) => {
        setSearchKey(e.target.value);
    };

    async function fetchData() {
        if(!searchKey) return;

        try {
            const res = await axios.get(
                `https://dummyjson.com/products/search?q=${searchKey}`
            );
            setResults(res.data.products);
            // console.log(res.data);
            console.log(searchKey);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchData();
    }, [searchKey]); // calls the function only when searchKey is updated. known as "update phase in useEffect".

    return (
        <>
            <input 
                type="text"
                placeholder="Search..."
                value={searchKey}
                onChange={handleChange}
            />

            {results.map(item => (
                <p key={item.id}>{item.title}</p>
            ))}

        </>
    );
}
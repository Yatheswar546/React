export default function Header({ search, setSearch }) {

    function handleChange(e) {
        setSearch(e.target.value);
    }

    return (
        <>
            <input 
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={handleChange}
            />
        </>
    );
}
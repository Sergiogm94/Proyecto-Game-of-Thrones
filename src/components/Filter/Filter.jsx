import "./Filter.scss";

const Filter = ({setSearch}) => {
    const handleChange = (event) => {
        const {value} = event.target;
        setSearch(value);
    }

    return(
        <div className="divfilter">
            <input className="finder" type="text" placeholder="&#128269; Buscar..." onChange={handleChange}></input>
        </div>
    )
}

export default Filter;
export default function Buttons({filteredClothes}) {
    return (
        <diV className="cont">
            <button className="change" onClick={() => filteredClothes("dress")}>Dresses</button>
            <button className="change" onClick={() => filteredClothes("skirt")}>Skirts</button>
            <button className="change" onClick={() => filteredClothes("pants")}>Pants</button>
            <button className="change" onClick={() => filteredClothes("shoes")}>Shoes</button>
            <button className="change" onClick={() => filteredClothes("shirt")}>Shirts</button>
            <button className="change" onClick={() => filteredClothes("sweater")}>Sweaters</button>
        </diV>

    )
}
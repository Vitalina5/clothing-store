export default function Clothes({anyClothes}) {
    return (
        <div className="products">
            {anyClothes.map((element => {
                const {id, name, price, image} = element;
                return (
                    <div className="product-card" key={id}>
                        <img className="clothes-image" src={image} width="400px" height="500px" alt="clothes"/>
                      <div>
                        <h3>{name}</h3>
                        <h4>{price}</h4>
                      </div>
                    </div>
                )
            }))}
        </div>
    )
}
import { useState } from 'react';
import Buttons from './Buttons';
import { data } from './data';
import Clothes from './Clothes';
import image from './fashion.jpg';

function Home() {
    const [clothes, setClothes] = useState(data);

    const chosenClothes = (searchTerm) => {
    const newClothes = data.filter(element => element.searchTerm === searchTerm);
    setClothes(newClothes);
    }

    return (
      <div>
        <div className='cont'>
          <h2 className='back'>Free Standart Shipping</h2>
        </div>
        <div className='cont fashion'>
          <img className='slide' src={image} alt="clothes" width="1000px" height="600px"/>
        </div>
        <Buttons filteredClothes={chosenClothes} />
        <Clothes anyClothes={clothes} />
      </div>
    );
  }

export default Home;
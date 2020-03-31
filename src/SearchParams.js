import React, { useState } from 'react'
import { ANIMALS } from '@frontendmasters/pet'

const SearchParams = () => {
    const [location, setLocation] = useState('Seattle, Wa')
    const [animal, setAnimal] = useState('dog')
    return (
        <div className="search-params">
            <form>
                <label htmlFor="locaton">
                    Location
                 <input
                        id="location"
                        value={location}
                        placeholder="location"
                        onChange={e => setLocation(e.target.value)}/>
                </label>
                <label htmlFor="animal">Animal
                     <select
                        id="animal"
                        value={animal}
                        onChange={e => setAnimal(e.target.value)}></select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams
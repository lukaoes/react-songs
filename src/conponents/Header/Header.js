import { useState, } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Card from '../card/card'
import { SearchBtn, Button } from '../buttons/buttons'


const Input = styled.input`
    min-width: 500px;
    padding: 10px;
    font-size: 20px;
    border: 1px solid #ccc;
    border-radius: 12px;
`



const Header = () => {
    const [name, setName] = useState('')
    const [songs, setSongs] = useState([])
    const [loader, setLoader] = useState(false)


    const search = () => {
        setLoader(true);
        if (name.length > 3) {

            axios.get(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${name}`, {
                headers: {
                    "X-RapidAPI-Key":
                        "cff6b313b2msh87e50c799668fcap1cb760jsn96488c100355",
                    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
                },
            })
                .then((res) => {
                    setSongs(res.data.data);
                    setLoader(false);
                });
        }
    }

    return (
        <div style={{ maxWidth: 1128, margin: '0 auto' }}>
            <div style={{ margin: '0 auto', width: 641 }}>
                <Input value={name} type="text" onInput={(e) => setName(e.target.value)} placeholder="Search Song/Artist..." />
                <SearchBtn onClick={() => search()}> Search </SearchBtn>

            </div>
            {loader ? (
                <div style={{ margin: "0 auto", width: 641, }}>
                    <img style={{ width: 500 }} src="https://cdn.dribbble.com/users/546766/screenshots/4790425/progress-circle.gif" alt='loader' />
                </div>
            )
                :

                (
                    <div style={{ display: 'flex', flexWrap: 'wrap', }}>
                        {songs.map((item) =>
                            <Card key={item.id} item={item} />
                        )}
                    </div>
                )}
        </div >
    )
}

export default Header;


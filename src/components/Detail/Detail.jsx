import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import d from './Detail.module.css';

export default function Detail(props) {

    const { detaiId } = useParams();
    const [character, setChar] = useState();
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detaiId}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setChar(char);
                } else {
                    window.alert('No hay personajes con ese ID');
                }
            })
            .catch((err) => {
                window.alert('No hay personajes con ese ID');
            });
        return setChar({});
    }, [detaiId]);

    return (
    <div>
        {character ? (
            <div>
                <h1>{character.name}</h1>
                <h5>{character.status}</h5>
                <h5>{character.species}</h5>
                <h5>{character.gender}</h5>
                <h5>{character.origin?.name}</h5>
                <div>
                    <img src={character.image} alt={character.name} />
                </div>
            </div>
        ) : (
            ''
            )}
    </div>
    )
};
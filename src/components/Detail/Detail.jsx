import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import d from './Detail.module.css';

export default function Detail() {

    const { detailId } = useParams();
    const [character, setChar] = useState();
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
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
    }, [detailId]);

    return (
        <div>
            {character ? (
                <div className={d.Info}>
                    <h1 id={d.nombre}>{character.name}</h1>
                    <div className={d.InfImg}>
                        <img id={d.imagen} src={character.image} alt={character.name} />
                    </div>
                    <div className={d.InfoDet}>
                        <h4>Estado: {character.status}</h4>
                        <h4>Especie: {character.species}</h4>
                        <h4>Sexo: {character.gender}</h4>
                        <h4>Origen: {character.origin?.name}</h4>
                    </div>                    
                </div>
            ) : (
                ''
            )}
        </div>
    )
};
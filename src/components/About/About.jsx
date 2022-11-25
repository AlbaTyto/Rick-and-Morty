import a from './About.module.css';

export default function About() {
    return (
        <div className={a.Fondo}>
            <h2>About Rick & Morty's App.</h2>
            <p>
                This is a learning proyect from Soy Henry, in which we learn how to develop a React aplication/website.
            </p>
            <h3>About the author</h3>
            <p>
                My name is Gustavo Peretti, I'am from Salta-Argentina.
            </p>
        </div>
    );
};
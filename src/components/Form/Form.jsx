import React from 'react';
import f from './Form.module.css';
import validation from './validation';
export default function Form(props) {
    const [userLog, setUserLog] = React.useState({
        username: '',
        password: ''
    });

    const [logErrors, setLogErrors] = React.useState({
        username: [],
        password: []
    });

    function handleInputChange(ev) {
        setUserLog({
            ...userLog,
            [ev.target.name]: ev.target.value
        });
        setLogErrors(
            validation({
                ...userLog,
                [ev.target.name]: ev.target.value
            })
        )
    };
    function handleSubmit(ev) {
        ev.preventDefault();
        if (!Object.entries(logErrors).length) {
            setUserLog({
                username: '',
                password: ''
            });
        setLogErrors(
            validation({
                username: [],
                password: []
            }));
            console.log(userLog);
            console.log(logErrors);
        } else alert("Debes completar los campos");
    }
    return (
        <form onSubmit={handleSubmit} className={f.BackForm}>
            <div className={f.User}>
                <label style={{ margin: '1rem' }} htmlFor="username">Username</label>
                <input type="text"
                    placeholder='Ingrese el nombre de usuario'
                    name='username'
                    id='name'
                    value={userLog.name}
                    onChange={handleInputChange} />
                {logErrors.username.length>0 && <p> {logErrors.username} </p>}
            </div>
            <div className={f.Pwd}>
                <label style={{ margin: '1rem' }} htmlFor="password">Password</label>
                <input type="text"
                    placeholder='Ingrese la contraseña'
                    id='password'
                    name='password'
                    value={userLog.name}
                    onChange={handleInputChange} />
                    {logErrors.password.length>0 && <p> {logErrors.password} </p>}
            </div>
            <button type='submit' className={f.Login}>LOGIN</button>
        </form>
    );
}
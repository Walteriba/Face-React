import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'

export const Login = () => {

    const [user, setUser] = useState({ email: '', password: '' })
    const [error, setError] = useState()

    const { signIn } = useAuth()
    const navigate = useNavigate()

    // La siguiente es una forma muy clara...
    // *** const handleChange = e => {
    // ***   console.log(e.target.name, e.target.value);
    // *** }
    // ...pero es más profesional del siguinte modo.
    // Aquí sabemos que en el evento existe una propiedad
    // "target", y de target quiero extraer el name y el value:
    const handleChange = ({ target: { name, value } }) => {
        // console.log(name, value);
        // Con ...user, copio todos los dato
        // que el user tenga en ese momento,
        // y luego actualizo.
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try {
            await signIn(user.email, user.password)
            navigate('/home')
        } catch (error) {
            // console.log(error.message)
            setError(error.message)
            // O mejor aún:
            if (error.code === "auth/invalid-email") {
                setError('Correo inválido.')
            }
            if (error.code === "auth/invalid-credential") {
                setError('Su información de autenticación es incorrecta.')
            }
            if (error.code === "auth/too-many-requests") {
                setError('Demasiados intentos incorrectos. Espere e intente nuevamente.')
            }
        }
        // console.log(user)
    }

    const handleRegister = (e) => {
        navigate("/Register")
    }

    return (
    <div>
            <div className="d-flex justify-content-center align-items-center vw-100 vh-100 bg-primary">
                <div className="p-5 rounded bg-white">
                    <form onSubmit={handleSubmit} className="form-group">
                        <h3 className="text-center">Sign In</h3>
                        <div className="mb-3"> 
                            <label htmlFor="email" className="form-label">e-mail</label>
                            <input type="email"
                                name="email"
                                placeholder='tu e-mail@dominio.com'
                                onChange={handleChange}
                                className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password"
                                name="password"
                                placeholder="Password"
                                id="passwd"
                                onChange={handleChange}
                                className="form-control" />
                        </div>
                        <div className="d-grid">
                            <button className="btn btn-primary" name="login">Login</button>
                        </div>
                        <div >
                            {/* Si hay error (en la interacción con 
                                la API de Firebase en handleSubmit())
                                => lo muestro. */}
                            {error && <p className="text-center">{error}</p>}
                            {!error && <p> </p>}
                        </div>
                    </form>
                    <div className="d-grid">
                        <button onClick={handleRegister} className="d-grid btn btn-primary mt-4" name="register">Register</button>
                    </div>
                </div>
            </div>
            </div>
    )
}
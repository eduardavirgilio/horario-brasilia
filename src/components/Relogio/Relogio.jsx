import { useState, useEffect } from "react";
import styles from "./Relogio.module.css";

function Relogio (){
    const [horaAtual, setHoraAtual] = useState(new Date());

    useEffect(() => {
        const intervalo = setInterval(() => {
            setHoraAtual(new Date());
        }, 1000);

        return () => clearInterval(intervalo);
    }, []);

    return (
        <div className={styles.relogioContainer}>
            <h1>Componente React</h1>
            
            <p className={styles.hora}>{horaAtual.toLocaleTimeString()}</p>

            <p className={styles.data}>{horaAtual.toLocaleDateString('pt-br', 
                {weekday: 'long', 
                day: '2-digit', 
                month: 'long', 
                year: 'numeric'})}</p>
        </div>
    );
}

export default Relogio;
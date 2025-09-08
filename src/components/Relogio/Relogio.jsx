import { useState, useState } from "react";
import styles from "./Relogio.module.css";
import { useEffect } from "react";

function Relogio (){
    const [horaAtual, setHoraAtual] = useState(new Date());

    useEffect(() => {
        const intervalo = setInterval(() => {
            setHoraAtual(new Date());
        }, 1000);

        return () => clearInterval(intervalo);
    }, []);

    return (

    );
}

export default Relogio;
import { useState } from 'react';
import styles from './Formulario.module.css';


const Formulario = ()=>{

    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const classificacao = ['abaixo do peso', 'normal', 'sobrepeso', 'obesidade'];
   
    const resultado = ()=>{
        const imc = Math.round(peso / (altura * altura));
    
        if(!peso || !altura){
            return
        }
        if(imc > 30){
           
            return {
                imc: imc,
                classificacao: classificacao[3]
            }
        }
        if(imc > 25){ 
            return {
                imc: imc,
                classificacao: classificacao[2]
            }
        }
        if(imc > 18.5){
            return {
                imc: imc,
                classificacao: classificacao[1]
            }
        }
        if(imc < 18.5){
            return {
                imc: imc,
                classificacao: classificacao[0]
            }
        }
    }

    return (
    <>

        <div className='container'>
        <div className={styles.formularioContainer}>
            <h1>Calculadora de IMC</h1>
            <form action="" className={styles.formularioContainer__form}  >
                <input className={styles.formularioContainer__form__peso} onBlur={e=> setPeso(Number(e.target.value))}  type="number" placeholder="Digite seu peso"/>
                <input  className={styles.formularioContainer__form__altura}  onBlur={e=> setAltura(Number(e.target.value))}   type="number" placeholder="Digite sua Altura em metros"/>
            </form>
            {resultado() &&(
                <div className={styles.resultado}>
                    <p>Seu Imc é de: <span>{resultado().imc}</span></p>
                    <p>Seu Resultado  é de:
                    {resultado().classificacao == 'normal' ? (
                        <span className={styles.good}>{resultado().classificacao}</span>
                    ): (
                        <span className={styles.bad}>{resultado().classificacao}</span> 
                    )}                      
                    </p>
              </div>
            )}
          
        </div>
        
    </div>
    </>
    )
}

export default Formulario
import './Formulario.css'
import CampoTexto from '../Banner/CampoTexto/CampoTexto.js'
import ListaSuspensa from '../ListaSuspensa/index.js'
import Botao from '../Botao/index.js'
import { useState } from 'react'

const Formulario = (props) =>{
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

const aoSalvar = (evento) =>{
    evento.preventDefault()
    props.aoCadastrar({
        nome,
        cargo,
        imagem,
        time
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
}

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    required={true}
                    label="Nome"
                    placeholder ="Digite o seu nome"
                    valor={nome}
                    aoAlterar = {valor => setNome(valor)}
                    />
                <CampoTexto
                    required={true}
                    label="Cargo"
                    placeholder ="Digite o seu cargo"
                    valor ={cargo}
                    aoAlterar = {valor => setCargo(valor)}
                    />
                <CampoTexto
                    label="Imagem"
                    placeholder ="Digite o endereço da imagem"
                    valor = {imagem}
                    aoAlterar = {valor => setImagem(valor)}
                    />
                <ListaSuspensa
                    required={true}
                    label="Time"
                    itens={props.times}
                    valor ={time}
                    aoAlterar = {valor => setTime(valor)}
                    />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario
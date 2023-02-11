import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {


	const [nome, setNome] = useState('') 
	const [cargo, setCargo] = useState('') 
	const [gitUser, setGitUser] = useState('') 
	const [time, setTime] = useState('')

	const aoSalvar = (evento) => {
		evento.preventDefault()

		props.aoColaboradorCadastrado({
			nome,
			cargo,
			gitUser,
			time
		})

		setNome('')
		setCargo('')
		setGitUser('')
		setTime('')
	}

	return (
		<section className="formulario">
			<form onSubmit={aoSalvar}>
				<h2>Preencha os Dados para criar o card do colaborador</h2>
				<CampoTexto 
					obrigatorio={true}
					label="Nome"
					placeholder="Informe o Nome"
					valor={nome}
					aoAlterado = {valor => setNome(valor)}
				/>
				<CampoTexto 
					obrigatorio={true} 
					label="Cargo"
					placeholder="Informe o Cargo"
					valor={cargo}
					aoAlterado={cargo =>setCargo(cargo)}
				/>
				<CampoTexto 
					label="Usuario Git" 
					placeholder="Informe o Usuario do Github" 
					valor={gitUser}
					aoAlterado={gitUser => setGitUser(gitUser)}
				/>
				<ListaSuspensa 
					obrigatorio={true} 
					label={'Time'}
					itens={props.times} 
					valor={time}
					aoAlterado={valor =>setTime(valor)}
				/>
				<Botao texto={'Criar Card'}>
				Criar Card
				</Botao>
			</form>
		</section>
  	);
};

export default Formulario;

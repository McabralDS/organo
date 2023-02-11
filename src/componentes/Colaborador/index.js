import './Colaborador.css'

const Colaborador = ({nome, gitUser, cargo, corDeFundo}) => {

	return(
		<div className="colaborador">
			<div className='cabecalho' style={{backgroundColor: corDeFundo}}>
				<img src={`http://github.com/${gitUser}.png`} alt={nome} />
			</div>
			<div className='rodape'>
				<h4>{nome}</h4>
				<h5>{cargo}</h5>
			</div>
		</div>
	)

} 

export default Colaborador
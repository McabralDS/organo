import './Rodape.css'

const Rodape = () => {
	
	const background = `url(http://localhost:3000/imagens/fundo.png')`;

	return (
		<footer className='footer' style={{backgroundImage: background}}>
			
			<div className='redes-sociais'>
				<img className='logo' src='imagens/fb.png' alt='fb'/>
				<img className='logo' src='imagens/tw.png' alt='tw'/>
				<img className='logo' src='imagens/ig.png' alt='ig'/>
			</div>
			<div className='logo'>
				<img src='imagens/logo.png' alt='logo'/>
			</div>
			<div className='desenvolvedor'>
				<h4>Desenvolvido por Mateus Cabral dos Santos</h4>
			</div>
		</footer>
	)
}

export default Rodape
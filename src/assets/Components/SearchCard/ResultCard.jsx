/* eslint-disable no-mixed-spaces-and-tabs */
import './ResultCard.css'

const ResultCard = ({ name, image, image2, height, weight, health, attack, defense, sp, sd, speed, type }) => {
	function toTitleCase(word) {
		if (word) return word[0].toUpperCase() + word.slice(1).toLowerCase()
	}
	const pokemonName = toTitleCase(name)

	if (type) var decoratorColorID = type[0].type.name // this will get the first type's id.

	return (
		<div className="card-container">
			<div className="preview">
				<div
					className="decorator"
					id={decoratorColorID ? decoratorColorID : 'fighting'}
					style={
						name
							? {
									'--clip-path': 'polygon(100% 0, 0 0, 0 100%, 0 100%)',
									'--clip-path-mobile': 'polygon(100% 0%, 0% 0%, 0% 10%, 100% 15%)',
							  }
							: {
									'--clip-path': 'polygon(100% 0, 0 0%, 0 100%, 100% 100%)',
									'--clip-path-mobile': 'polygon(100% 0, 0 0%, 0 100%, 100% 0%)',
							  }
					}
				></div>{' '}
				{/* Applying the style of whatever decorator color got */}
				<div className="header">
					<div className="title" id={decoratorColorID ? decoratorColorID : 'fighting'}>
						{pokemonName}
					</div>
					<div className="type-list">
						{' '}
						{/* Lists out all the type list provided from props. All poke types have a styling applied by their ID.*/}
						{type?.map((type) => {
							return (
								<div key={type.type.name} className="type" id={type.type.name}>
									{toTitleCase(type.type.name)}
								</div>
							)
						})}
					</div>
				</div>
				<div className="card-image">
					<img src={image} alt="" />
				</div>
			</div>

			<span
				className="pokeball"
				data-scale={name ? '1.5' : '1'}
				data-scale-mobile={name ? '1' : '0.5'}
				style={
					name
						? {
								'--transform': 'translate(-5%, -32.25%)',
								'--transform-mobile': 'translate(-5%, -32.25%)',

								opacity: '0.5',
								'--scale': '1.5',
								'--scale-mobile': '1',
						  }
						: {
								'--transform': 'translate(-49.5%, -49.5%)',
								'--transform-mobile': 'translate(-110.5%, -110.5%)',
								opacity: '1',
								'--scale': '1',
								'--scale-mobile': '0.45',
						  }
				}
			>
				<img src="./pokeball.svg" alt="" />
			</span>
			<span
				className="pokemon-bg"
				style={
					name
						? {
								'--pokemonbg-transform': 'translate(20%, -10%)',
								'--pokemonbg-transform-mobile': 'translate(0%, -5%)',
								'--pokemonbg-scale': '3',
								'--pokemonbg-scale-mobile': '1.5',
								opacity: '0.2',
						  }
						: { opacity: '0' }
				}
			>
				<img src={image2} alt="" />
			</span>

			<div id="info">
				<div className="header">
					{/* Header */}
					<div
						className="title"
						style={
							name
								? { opacity: '1', transform: 'translateY(0px)' }
								: { opacity: '0', transform: 'translateY(50px)' }
						}
					>
						About
					</div>
				</div>
				<div
					className="content"
					style={
						name
							? { opacity: '1', transform: 'translateY(0px)' }
							: { opacity: '0', transform: 'translateY(50px)' }
					}
				>
					<div id="physical-stats">
						<div id="height">
							<img src="https://img.icons8.com/?size=100&id=7790&format=png&color=FC405C" alt="" />
							Height: {height}cm
						</div>

						<div className="vertical-divider"></div>

						<div id="weight">
							<img src="https://img.icons8.com/?size=100&id=4880&format=png&color=FC405C" alt="" />
							Weight: {weight}kg
						</div>
					</div>

					<div id="other-stats">
						<div className="stat" id="health">
							<span>
								<img src="https://img.icons8.com/?size=100&id=59805&format=png&color=FC405C" alt="" />
								Health: {health}
							</span>
							<div className="bar" style={{ width: `100%` }}>
								<div
									className="progress"
									style={{ width: `${Math.max(0, Math.min(health, 100))}%` }}
								></div>
							</div>
						</div>

						<div className="stat" id="attack">
							<span>
								<img
									src="https://img.icons8.com/?size=100&id=cOlYVArn39ae&format=png&color=FC405C"
									alt=""
								/>
								Attack: {attack}
							</span>
							<div className="bar" style={{ width: `100%` }}>
								<div
									className="progress"
									style={{ width: `${Math.max(0, Math.min(attack, 100))}%` }}
								></div>
							</div>
						</div>

						<div className="stat" id="defense">
							<span>
								<img src="https://img.icons8.com/?size=100&id=87404&format=png&color=FC405C" alt="" />
								Defense: {defense}
							</span>
							<div className="bar" style={{ width: `100%` }}>
								<div
									className="progress"
									style={{ width: `${Math.max(0, Math.min(defense, 100))}%` }}
								></div>
							</div>
						</div>

						<div className="stat" id="special-attack">
							<span>
								<img src="https://img.icons8.com/?size=100&id=10535&format=png&color=FC405C" alt="" />
								Special Attack: {sp}
							</span>
							<div className="bar" style={{ width: `100%` }}>
								<div className="progress" style={{ width: `${Math.max(0, Math.min(sp, 100))}%` }}></div>
							</div>
						</div>
						<div className="stat" id="special-defense">
							<span>
								<img src="https://img.icons8.com/?size=100&id=79928&format=png&color=FC405C" alt="" />
								Special Defense: {sd}
							</span>
							<div className="bar" style={{ width: `100%` }}>
								<div className="progress" style={{ width: `${Math.max(0, Math.min(sd, 100))}%` }}></div>
							</div>
						</div>
						<div className="stat" id="speed">
							<span>
								<img src="https://img.icons8.com/?size=100&id=9806&format=png&color=FC405C" alt="" />
								Speed: {speed}
							</span>
							<div className="bar" style={{ width: `100%` }}>
								<div
									className="progress"
									style={{ width: `${Math.max(0, Math.min(speed, 100))}%` }}
								></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ResultCard

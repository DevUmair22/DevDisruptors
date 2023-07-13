import { useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import * as React from 'react'
import { useState } from 'react'

const ModalBox = ({ item }) => {
	const [open, setOpen] = useState(false)
	const handleClose = () => setOpen(false)
	const handleOpen = () => setOpen(true)
	const theme = useTheme()
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'))
	const isMidScreen = useMediaQuery(theme.breakpoints.down('md'))

	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: '80%',
		height: isSmallScreen ? '100%' : '95%' || isMidScreen ? '100%' : '95%',
		bgcolor: 'background.paper',
		overflow: 'scroll',
		border: '2px solid #000',
		borderRadius: '1rem',
		boxShadow: 24,
		py: isSmallScreen ? '1rem' : '1.5rem',
		px: isSmallScreen ? '2rem ' : ' 5rem',
		fontSize: isSmallScreen
			? '0.6rem'
			: '1rem' || isMidScreen
			? '0.8rem'
			: '1rem',
	}

	return (
		<div>
			<button
				name="submit"
				type="submit"
				value="Submit"
				className="site-button button"
				style={{ borderRadius: '10px', margin:"10px" }}
				onClick={handleOpen}
			>
				{' '}
				<span >Read more</span>
			</button>
			<Modal open={open} onClose={handleClose}>
				<Box sx={style}>
					<div className="row justify-content-center">
						<p
							style={{
								fontWeight: '800',
								fontSize: isSmallScreen
									? '1rem'
									: '1.5rem' || isMidScreen
									? '1.2rem'
									: '1.5rem',
								color: 'black',
							}}
						>
							{item.name}
						</p>
					</div>
					<div
						className="row "
						style={{
							padding: isSmallScreen
								? '0px'
								: '8px 4px' || isMidScreen
								? '0px 4px'
								: '8px 4px',
							marginBottom: isSmallScreen ? '0px' : '1px',
						}}
					>
						<p
							style={{
								fontWeight: '600',
								fontSize: isSmallScreen
									? '0.7rem'
									: '1.2rem' || isMidScreen
									? '1rem'
									: '1.2rem',
								color: 'black',
								marginBottom: isSmallScreen ? '0px ' : '1px',
							}}
							className="pr-3"
						>
							Industry:
						</p>
						<p
							style={{
								marginBottom: isSmallScreen ? '0px' : '1px',
							}}
						>
							{item.industry}
						</p>
					</div>

					<div
						className="row "
						style={{ padding: isSmallScreen ? '0px' : '8px 4px' }}
					>
						<p
							style={{
								fontWeight: '600',
								fontSize: isSmallScreen
									? '0.7rem'
									: '1.2rem' || isMidScreen
									? '1rem'
									: '1.2rem',
								color: 'black',
								marginBottom: isSmallScreen ? '0px ' : '1px',
							}}
						>
							Project Description:
						</p>
						<p
							className="pr-1 pr-lg-5 text-lg-left text-justified"
							style={{
								lineHeight: isSmallScreen ? '12px' : '1.5rem',
							}}
						>
							{item.projectDescription}
						</p>
					</div>
					<div
						className="row py-2"
						style={{
							height: '100%',
							marginTop: '-20px',
							borderRadius: '1rem',
							boxShadow: 'gray 0px 0px 10px 1px',
						}}
					>
						<div
							className="col-lg-4 col-sm-12 col-md-6 pt-4 pt-sm-1  pb-lg-4 pb-sm-0 px-0 px-lg-3 px-md-3 px-sm-2 mx-auto overflow-hidden "
							style={{ maxHeight: '1rem' }}
						>
							<h5
								className="px-3"
								style={{
									fontSize: isSmallScreen
										? '0.8rem'
										: '1rem' || isMidScreen
										? '0.9rem'
										: '1rem',
								}}
							>
								Services Provided:
							</h5>
							<ul
								className="list-angle-right pl-3 row"
								style={{ width: '25rem' }}
							>
								{item.servicesProvided?.map((item, index) => (
									<li
										className="col-12"
										key={index}
										style={{
											lineHeight: isSmallScreen ? '5px' : '10px',
											fontSize: isSmallScreen
												? '0.6rem'
												: '1rem' || isMidScreen
												? '0.8rem'
												: '1rem',
										}}
									>
										{item}
									</li>
								))}
							</ul>
						</div>

						<div className="col-lg-4 col-sm-12 col-md-6 pt-4 pt-sm-1  pb-lg-4 pb-sm-0 px-0 px-lg-3 px-md-3 px-sm-2 mx-auto overflow-hidden ">
							<h5
								className="px-3"
								style={{
									fontSize: isSmallScreen
										? '0.8rem'
										: '1rem' || isMidScreen
										? '0.9rem'
										: '1rem',
								}}
							>
								{' '}
								Technologies Used:
							</h5>
							<ul className="list-angle-right pl-3 " style={{ width: '20rem' }}>
								{item.technologiesUsed?.map((itemm, index) => (
									<li
										key={index}
										style={{
											width: '100%',
											lineHeight: isSmallScreen ? '5px' : '10px',
											fontSize: isSmallScreen
												? '0.6rem'
												: '1rem' || isMidScreen
												? '0.8rem'
												: '1rem',
										}}
									>
										{itemm}
									</li>
								))}
							</ul>
						</div>
					</div>
				</Box>
			</Modal>
		</div>
	)
}

export default ModalBox

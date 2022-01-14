import { Worker, Viewer } from '@react-pdf-viewer/core';
import { prefix } from '../utils/prefix.js';
import styled from 'styled-components'

import '@react-pdf-viewer/core/lib/styles/index.css';

const Center = styled.div`
	width: 100%;
`
const Container = styled.div`
	height: 700px;
	width: 90%;
	margin: 0 auto;
	border: 2px solid blue;

	@media screen and (min-height: 600px) {
		height: 500px;
		width: 100%;
	}
`

const Pdf = ({file}) => {
	return(
	<Center>
		<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
			<Container>
				<Viewer fileUrl={`${prefix}/${file}`}/>
			</Container>
		</Worker>
	</Center>
	)
}

export default Pdf

import "./App.css";
import React from "react";
import Slide from "react-reveal/Slide";
import styled from "styled-components";
import Zoom from "react-reveal/Zoom";

const info = [
	{
		id: 1,
		q: "In which direction does the sunrise?",
		a: "East",
		isOpen: false,
	},
	{
		id: 2,
		q: "How many months of the year have 31 days?",
		a: "7 (January, March, May, July, August, October and December)",
		isOpen: false,
	},
	{
		id: 3,
		q: "Which are the colors in a rainbow?",
		a: "Violet, Indigo, Blue, Green, Yellow, Orange, Red",
		isOpen: false,
	},
];

function App() {
	const [accordion, setAccordion] = React.useState([...info]);

	const setOpen = id => {
		setAccordion(
			accordion.map(item =>
				item.id !== id
					? { ...item, isOpen: false }
					: { ...item, isOpen: !item.isOpen }
			)
		);
	};

	return (
		<Body>
			{accordion.map(item => {
				return (
					<Container key={item.id} onClick={() => setOpen(item.id)}>
						<Question>
							<h2>{item.q}</h2>
							<h2
								style={{
									color: "#40E0D0",
								}}
							>
								{item.isOpen ? "-" : "+"}
							</h2>
						</Question>
						{item.isOpen && (
							<Zoom left>
								<AnswerContainer>
									<Answer>{item.a}</Answer>
								</AnswerContainer>
							</Zoom>
						)}
					</Container>
				);
			})}
		</Body>
	);
}

export default App;

const Body = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #40e0d0;
	transition: all 0.3s ease-in-out;
`;

const Container = styled.div`
	display: flex;
	width: 80vw;
	flex-direction: column;
	background-color: #333;
	justify-content: center;
	align-items: center;
	border: 1px solid rgba(0, 0, 0, 0.3);
	transition: all 0.3s ease-in-out;

	h2 {
		color: white;
		transition: all 0.3s ease-in-out;
	}
`;

const Question = styled.div`
	width: 80%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	transition: all 0.3s ease-in-out;
`;

const Answer = styled.h2`
	transition: all 0.3s ease-in-out;
`;

const AnswerContainer = styled.div`
	width: 79vw;
	display: flex;
	justify-content: center;

	border-radius: 10px;
	transition: all 0.3s ease-in-out;

	h2 {
		padding: 0 10px;
		word-break: break-all;
		color: #40e0d0;
		transition: all 0.3s ease-in-out;
	}
`;

import React from 'react';
import styled from 'styled-components';

const Button = props => (
	<ButtonContainer
		onPress= {props.funcao}
		backgroundColor={props.backgroundColor}
	>
		<ButtonText textColor={props.textColor}>{props.text}</ButtonText>
	</ButtonContainer>
);

export default Button;

const ButtonContainer = styled.TouchableOpacity`
	width: 80%;
	height: 50px;
	text-align:center;
	margin:2%;
	margin-left:10%;
	margin-right:10%;
	padding: 12px;
	border-radius: 10px;
	background-color: ${props => props.backgroundColor};
`;

const ButtonText = styled.Text`
	font-size: 15px;
	color: ${props => props.textColor};
	text-align: center;
`;
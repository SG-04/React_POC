import styled from "styled-components";


export const Form = styled.form`
	max-width: 500px;
	margin: 0 auto;
	 background: #0e101c;
`;

export const FormGroup = styled.div`
	color: white;
    display: block;
	width: 300px;
	margin: 20px auto;
`;


export const Label = styled.label`
	line-height: 2;
  text-align: left;
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
  color: white;
  font-size: 14px;
  font-weight: 200;
`;

export const Input = styled.input`
	display: block;
	box - sizing: border - box;
	width: 100 %;
	border - radius: 4px;
	border: 1px solid white;
	padding: 10px 15px;
	margin - bottom: 10px;
	font - size: 14px;
`;



export const Field1 = styled.input`
	display: block;
	box - sizing: border - box;
	width: 100 %;
	border - radius: 4px;
	border: 1px solid white;
	padding: 10px 15px;
	margin - bottom: 10px;
	font - size: 14px;
	color:#1E90FF;
`;

export const Message = styled.label`
	margin-bottom: 0.5em;
	color: red;
    display: block;
`;

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "#1E90FF" : "white"};
  color: ${props => props.primary ? "white" : "#1E90FF"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #1E90FF;
  border-radius: 3px;
`;



/*padding: 0.5em;
color: black;
background: #DCDCDC;
border: none;
border - radius: 3px;
width: 100 %;
margin - bottom: 0.5em; inp*/

/*margin - bottom: 0.5em;
color:  #1E90FF;
display: block; label*/
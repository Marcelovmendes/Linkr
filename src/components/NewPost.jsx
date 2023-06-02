import styled from "styled-components";


export default function Post() {
    return (
        <>
        <PublishContainer>
            <img/>
         <ContainerForm>
         <Question>What are you going to share today?</Question>
         <Form onSubmit={(e) => e.preventDefault()}>
            <Url placeholder="https://..." name="url" required/>
            <Textarea type="text" placeholder="Awesome article about #javascript" name="text"/>
            <StyledButton type="submit">Publish</StyledButton>
         </Form>
         </ContainerForm>
        </PublishContainer>
        </>
    )
}

const PublishContainer = styled.div`
display: flex;
justify-content: space-between;
margin-top: 100px;
width: 610px;
height: 210px;
border-radius: 15px;
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
img{
    width: 50px;
    height: 50px;
    border-radius: 26.5px;
   }
`

const ContainerForm = styled.div`
    width: 100%;
    max-width: 500px;
    margin-right: 15px;

`
const Question = styled.div`
  font-family: "Lato", sans-serif;
  font-weight: 300;
  line-height: 24px;
  font-size: 20px;
  color: #707070;
  margin-bottom: 10px;
`
const Form = styled.form`
display :flex;
flex-direction: column; 
align-items: flex-end;
`


const Url = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 6px;
  background-color: #efefef;
  border-radius: 5px;
  border: none;
  outline: none;
  &:focus{
    outline:none;
  }
  &::placeholder{
    color:#949494;
  }
`;
const Textarea = styled.textarea`
  width: 100%;
  height: 66px;
  background: #EFEFEF;
  border-radius: 5px;
  border:none;
  outline: none;
  margin-top:10px;
  color:#949494;`

const StyledButton = styled.button`
height: 31px;
width: 112px;
border-radius: 5px;
cursor: pointer;
background-color: #1877F2;
border:none;
outline:none;
color:white;
margin-top: 10px;

`
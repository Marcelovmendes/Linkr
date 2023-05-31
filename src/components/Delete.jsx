import React, { useState,useContext } from "react";
import styled from "styled-components";
import { FaTrash } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function DeletePost() {
    const [show, setShow] = useState(false);
   // const {token} = useContext();
  
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
  /*const config= {
    headers:{
      authorization: `Bearer ${token} `
    }
  }*/
    const deleteRequisition = async() => {
    try{
      axios.delete(`http://localhost:8000/api/posts/${id}`)

    }catch(err){
     console.log(err)
    }

    }
    return (
      <>
        {show && <Overlay onClick={handleClose} />}
        <ModalWrapper>
          <StyledFaTrash onClick={handleShow} />
          <StyledModal show={show} onHide={handleClose} transparent={true} centered>
            <StyledModalBody>
              Are you sure you want to delete this post?
            </StyledModalBody>
            <StyledModalFooter>
              <StyledButton onClick={handleClose} variant="light">
                No, go back
              </StyledButton>
              <StyledButton onClick={deleteRequisition}  variant="primary">
                Yes, delete it
              </StyledButton>
            </StyledModalFooter>
          </StyledModal>
        </ModalWrapper>
      </>
    );
  }
  
const StyledFaTrash = styled(FaTrash)`
  cursor: pointer;
  height: 14px;
  width: 14px;
  border-radius: 0px;
`;

const StyledModal = styled(Modal)`
  & .modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 262px;
    width: 597px;
    border-radius: 50px;
    background-color: #333333;
    color: white;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 41px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledModalBody = styled(Modal.Body)`
  height: 82px;
  width: 338px;
`;

const StyledModalFooter = styled(Modal.Footer)`
  display: flex;
  align-items: start;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  height: 37px;
  width: 134px;
  border-radius: 5px;
  border:none;
  margin:25px;
  text-decoration: none;
  font-size:18px;
  cursor:pointer;
  background-color: ${props =>
    props.variant === "light" ? "white" : "#1877F2"};
  color: ${props => (props.variant === "light" ? "#1877F2" : "white")};
`;

const ModalWrapper = styled.div`
position: relative;     
z-index: 1000;
`
import styled from "styled-components"

export default function TextGroup() {
    return (
        <TextContainer>
            <h1>linkr</h1>
            <h2>
                save, share and discover the<br />
                best links on the web
            </h2>
        </TextContainer>
    )
}

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 144px;
    height: 100vh;
    width: 63.29%;
    color: #FFFFFF;

    h1 {
        font-family: 'Passion One';
        font-size: 106px;
        font-weight: 700;
        text-align: left;
    }
    h2 {
        font-family: 'Oswald';
        font-size: 43px;
        font-weight: 700;
        text-align: left;
    }
`

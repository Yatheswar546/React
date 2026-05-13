import styled from "styled-components";

const Heading = styled.h1`
    color: white;
    background-color: teal;
    padding: 20px;
    margin-top: 15px;
    text-align: center;
`;

export default function StyledComponent() {

    return (
        <>
            <Heading>
                Styled Components
            </Heading>
        </>
    );
}
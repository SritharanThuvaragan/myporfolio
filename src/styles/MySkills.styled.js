import styled from "styled-components";

export const SkillsCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two cards in one row */
  grid-gap: 2rem;
  padding: 0 5%;
 
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
    padding: 0;
  }
`;

export const SkillsCard = styled.div`
    width: 230px;
    border: 1px solid #fff;
    padding: 3rem 0;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primary_light }; 

    @media(max-width: ${({ theme })=> theme.breakpoints.mobile}){
        width: 100%;
        margin: 2rem;
    }
`
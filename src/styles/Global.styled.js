import styled from "styled-components";

export const MainBody = styled.div`
background-color: ${({theme}) => theme.colors.primary};
`

export const Container = styled.div`
width: 90%;
max-width: 1280px;
margin: auto;
`

export const PaddingContainer = styled.div`
padding-top: ${({ top }) => top};
padding-bottom: ${({ bottom }) => bottom};
padding-left: ${({ left }) => left };
padding-right: ${({ right }) => right};

@media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    padding-top: ${({ responsivetop }) => responsivetop};
    padding-bottom: ${({ responsiveBottom }) => responsiveBottom};
    padding-left: ${({ responsiveleft }) => responsiveleft };
    padding-right: ${({ responsiveright }) => responsiveright};
}
`

export const FlexContainer = styled.div`
display: flex;
justify-content: ${({ justify }) => justify};
allign-items: ${({ align }) => align};
gap: ${({ gap }) => gap};
flex-direction: ${({ direction }) => direction};

& > div {
    flex: ${({ fullwidthchild }) => fullwidthchild && 1}
}
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
        display: ${({ responsiveflex }) => 
        responsiveflex ? 'flex': 'block'};

        flex-direction: ${({ responsivedirection }) => responsivedirection};
    }
`

export const Heading = styled(PaddingContainer)`
    color: ${({ theme }) => theme.colors.white};
    text-align: ${({ align }) => align};
    font-size: ${({ size }) => {
            switch(size){
                case 'h1':
                    return '4.5rem';

                case 'h2':
                    return '3rem';

                case 'h3':
                    return '2rem';

                case 'h4':
                    return '1.2 rem';

                default:
                    return;
            }
    }};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}){
            font-size: ${({ size }) => {
            switch(size){
                case 'h1':
                    return '2.5rem';

                case 'h2':
                    return '2rem';

                case 'h3':
                    return '1.5rem';

                case 'h4':
                    return '1rem';

                default:
                    return;
            }
    }};
    }
`

export const BlueText = styled.span`
    color: ${({ theme }) => theme.colors.secondary};
`

export const ParaText = styled(PaddingContainer)`
    color: ${({ theme }) => theme.colors.para_text_colors};
    line-height: 2rem;
`

export const IconContainer = styled.div`
    font-size: ${({ size }) => size};
    cursor: Pointer;
    color: ${({ color, theme}) => {
        switch(color){
            case 'white':
                return theme.colors.white;

            case 'blue':
                return theme.colors.secondary;

            default:
                return;
        }
    }};
`

export const Button = styled.a`
display: inline-block;
width: max-content;
padding: 1rem 2rem;
color: ${({ theme }) => theme.colors.white};
background-color: ${({ theme }) => theme.colors.primary_light};
border: 1px solid ${({ theme }) => theme.colors.gray};
border-radius: 5px;
cursor: pointer;
transition: all 0.3s ease;

&:hover{
    color: ${({ theme }) => theme.colors.primary_light};
    background-color: ${({ theme }) => theme.colors.white}; 
}
`

export const FadeImage = styled.img`
    position: absolute;
    top:${({top})=>top};
    right: ${({right})=> right};
    left: ${({left})=> left};
    bottom:${({bottom})=>bottom};
    z-index:0;

    @media(max-width:${({ theme }) => theme.breakpoints.mobile}) {
        display:none;
    }

`
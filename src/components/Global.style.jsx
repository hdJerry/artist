import tw, { styled } from 'twin.macro';


export const Container = styled.div`
    max-width: 1440px;
    @media (min-width: 1024px){
        margin-right: auto;
        margin-left: auto;
     }

`;
export const Wrapper = styled.div`
    ${tw `mt-20`}
    height: 100vh;
    position: relative;
   

    
    @media (min-width:1024px){
        height: 80vh;
    }

`;

export const LoaderOverlay = styled.div`
     ${tw`flex justify-center items-center absolute top-0 right-0 left-0 bottom-0 z-10 bg-black opacity-40`};
`;

import tw, { styled } from 'twin.macro';


export const PostMessage = styled.textarea`
    height: 150px;
    resize: none;
    padding: 10px;
`;


export const PostMessagePlaceHolder = styled.p`
    position: absolute;
    top: 50%;
    margin-top: -25px;
    left: 50%;
  margin-left: -50px;
    color: #FFF;
    opacity: 0.1;
    font-size: 1.6rem;
    foont-weight: bold;
    text-transform: uppercase;

`;

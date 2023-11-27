import styled, { css } from "styled-components"

export const SearchBtn = styled.button`
    background-color: #A238FF;
    color: #FDFCFE;
    font-weight: 600;
    font-size: 0.875rem;
    margin: 0 0 0 16px;
    padding: 12px 26px;
    border: 2px solid #A238FF;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        color: #F5F2F8;
        background: #9333E8;
    }
`

export const Button = styled.button`
    position:absolute;
    padding: 5px 7px 5px 10px;
    border-radius: 100%;
    border: 1px solid #A238FF;
    color: #A238FF;
    font-size:24px;
    background: rgba(255,255,255, 0.7);
    cursor: pointer;
    width: 60px;
    height: 60px;
    transition: all 0.3s ease;
    margin-right: 15px;
    z-index: 1;
    bottom: 15px;
    left: 5px;
    &:hover {
        background: #A238FF;
        border: 1px solid #fff;
        color: #fff;
    }
    
    ${(props) =>
    (props.type === "reset" &&
        css`
		    border: 1px solid #d7433e;
            color: #d9534f;
            background: rgba(255,255,255, 0.7);
            padding: 5px 7px 5px 9px;
            left: 70px;

            &:hover{
                background: #d9534f;
            }
	      `)}

`
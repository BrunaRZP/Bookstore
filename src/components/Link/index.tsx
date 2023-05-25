// import "./styles.css";
import { Link as LinkRoute } from "react-router-dom";
import { StyleSheetManagerProps, StyledComponent, StyledComponentBase, StyledComponentInnerComponent, StyledConfig } from "styled-components";

interface LinkProps {
    texto: string;
    redirect: string;
    className?:string;
}

export default function Link(props: LinkProps) {

    return (
        <LinkRoute className={props.className}
        to={props.redirect}    
        rel="noreferrer">
            {props.texto}
        </LinkRoute>
        );
    }
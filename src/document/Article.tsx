import React, {ReactNode} from "react";
import "./Article.css";
export interface ArticleProps{
    title: string,
    content: string,
    numberOfTokens: number

}

export default function Article(props:ArticleProps){
    return (
        <div className="article-wrapper">
            <h4 className="article-title">
                {props.title}</h4>

            <div className="article-content" dangerouslySetInnerHTML={{
    __html: props.content
}}/>
            <div className="article-token-count">
                <span className="token-count-value">Number of tokens: {props.numberOfTokens}</span>
            </div>
        </div>)
}
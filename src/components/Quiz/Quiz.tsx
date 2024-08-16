import React, { ReactElement, useEffect, useState } from "react";
import * as S from "./styled"
import { IAnswer, IQuestion } from "../../types";

interface IQuizProps {
    questions: IQuestion[]
}

export const Quiz: React.FC<IQuizProps> = (props) => {
    const [count, setCount] = useState<number>(1);
    const [isActive, setIsActive] = useState<boolean>(true);
    const [isCorrect, setIsCorrect] = useState<boolean | null | undefined | string>();
    const [selectedAnswer, setSelectedAnswer] = useState<null | number>(null);
    const [checkCircles, setCheckCircles] = useState<boolean[]>([]);
    
    useEffect(() => {
        if (props.questions.length <= count) {
            setIsActive(false)
        }
    }, [count, props.questions.length])

    return (
        <S.Container>
            <S.QuestionNumber>Question {count} of {props.questions.length}</S.QuestionNumber>
            {props.questions.map((question: IQuestion, number: number): ReactElement => {
                if(++number === count) {
                    return(
                        <div key={number}>
                            <S.Question>{question.question}</S.Question>
                            <div>
                                {question.answers.map((answer: IAnswer, key: number): ReactElement => {
                                    return(
                                        <S.Answer  
                                            key={number}
                                            answerKey={key}
                                            selectedAnswer={selectedAnswer}
                                            isCorrect={isCorrect}
                                            onClick={() => {
                                                if (selectedAnswer === null) {
                                                    setSelectedAnswer(key)
                                                    if (answer.isCorrect) {
                                                        setIsCorrect(true)
                                                        setCheckCircles(checkCircles => [...checkCircles,true]) 
                                                    } else {
                                                        setIsCorrect(false)
                                                        setCheckCircles(checkCircles => [...checkCircles,false])
                                                    }
                                                }
                                            }}
                                        >{answer.text}</S.Answer>
                                    )
                                })}
                            </div>
                        </div>
                        
                    )
                } else {
                    return <></>;
                }
            })}
            <S.Button 
                selectedAnswer={selectedAnswer} 
                isActive={isActive} 
                onClick={() => {
                    if (selectedAnswer !== null && isActive) {
                        setIsCorrect(null)
                        setSelectedAnswer(null)
                        setCount(count + 1)
                    }
                }}
            >
                Next
            </S.Button>
            <S.ChecboxContainer>
                {props.questions.map((_question, number: number): ReactElement => {
                    return (
                        <S.Checkbox 
                            key={number}
                            number={number}
                            checkCircles={checkCircles}
                        ></S.Checkbox>
                    )
                })}
            </S.ChecboxContainer>
        </S.Container>
    );
};

export default Quiz;
import styled from 'styled-components'

export const Container = styled.div`
    min-width: 30em;
    margin: 15em;
    padding: 1em;
    border-radius: 5px;
    background-color: #ffff;
`

export const QuestionNumber = styled.p`
    padding-bottom: 5px;
    font-weight: bold;
    color: #429E9D;
    border-bottom: 1px solid #C0C0C0;
    margin-bottom: 5px;
`

export const Question = styled.p`
    margin: 0px 0px 20px 0px;
    font-size: 25px;
    font-weight: bold;
`

export const ChecboxContainer = styled.div`
    display: flex;
`

export const Button = styled.p<{ selectedAnswer: null | number, isActive: boolean }>`
    width: fit-content;
    padding: 5px 20px;
    border-radius: 5px;
    color: #ffff;
    cursor: pointer;
    background-color: ${(props) => props.selectedAnswer!== null && props.isActive ? '#429E9D' : '#C0C0C0'};
`

export const Answer = styled.p<{ selectedAnswer: null | number, answerKey: number, isCorrect: boolean | null | undefined | string }>`
    margin: 10px 0px;
    padding: 10px;
    border-radius: 5px;
    background-color: #C0C0C0;
    ${(props) => props.selectedAnswer === props.answerKey ?
        props.isCorrect ? `
            background-color: #008000;
            color: #ffff;
        ` : `
            background-color: #FF0000;
            color: #ffff;
        `
        : ``
    }
`

export const Checkbox = styled.div<{ number: number, checkCircles: boolean[] }>`
    padding: 15px;
    margin-right: 5px;
    border-radius: 50%;
    position: relative;
    background-color: #C0C0C0;
    ${(props) => props.number in props.checkCircles ?
        props.checkCircles[props.number] ? `
            background-color: #008000;
            &:after {
                position: absolute;
                top: 10%;
                left: 30%;
                content: '\\2713';
                display: inline-block;
                color: #ffff;
            }
        ` : `
            background-color: #FF0000;
            &:after {
                position: absolute;
                top: 10%;
                left: 35%;
                content: 'X';
                color: #ffff;
            }
        `
        : ``
    }
`
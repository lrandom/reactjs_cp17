import React from 'react';
import './QuizTest.css';
class QuizTest extends React.Component {
    constructor(props) {
        super(props);
        this.questions = [
            {
                question: "Ngôn ngữ nào sau đây là strong type language",
                answers:[
                    "PHP",
                    "Java",
                    "JS",
                    "HTML"
                ],
                correct_answer_index:1
            },
            {
                question: "Ngôn ngữ nào sau đây là loose type language",
                answers:[
                    "PHP",
                    "Java",
                    "C++",
                    "HTML"
                ],
                correct_answer_index:0
            }
        ];
        this.state={
            questionIndex:0,
            score:0
        }
    }

    handleClickAnswer(index){
        if(index == this.questions[this.state.questionIndex].correct_answer_index){
            //trả lời đúng
            //tải câu hỏi tiếp theo
            alert("Bạn đã trả lời đúng");
            if(this.state.questionIndex<this.questions.length-1){
                this.setState({
                    questionIndex: this.state.questionIndex+1,
                    score:this.state.score+10
                });    
            }else{
                alert("Số điểm của bạn là "+(parseInt(this.state.score)+10));
            }
        }else{
            //trả lời sai 
            alert("Bạn đã trả lời sai");
            alert("Số điểm của bạn là "+this.state.score);
        }
    }

    render(){
        return <div className="wrapper">
            <div className="question">{this.questions[this.state.questionIndex].question}</div>
            <div className="answers">
                {this.questions[this.state.questionIndex].answers.map((answer,index)=>{
                    return ( <div onClick={this.handleClickAnswer.bind(this,index)} key={index}>{answer}</div>)
                })}
            </div>
        </div>
    }    
}

export default QuizTest;
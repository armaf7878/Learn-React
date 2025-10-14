import React  from "react";

const Results = ({score, totalQuestion}) => {
    return(
        <div>
            <h2>KẾT QUẢ</h2>
            <p className="result">Bạn trả lời đúng {score}/{totalQuestion}</p>
            <div className="resultButtonsContainer">
                <button className="result-button">Xem lại</button>
                <button className="result-button">Làm lại</button>
            </div>
        </div>
    )
}

export default Results
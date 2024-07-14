import {useState , useEffect} from "react";
import { Link } from 'react-router-dom';
import "../../stylesheet/pagesStyle/balanced.css";
import { AiOutlinePercentage } from 'react-icons/ai';
import {AlertRed} from '../../components/alerts'; 
export default function Balanced() {
    const [schoolMark, setSchoolMark] = useState("");
    const [qudratMark, setQudratMark] = useState("");
    const [tahsileMark, setTahsileMark] = useState("");
    const [schoolPercen, setSchoolPercen] = useState("");
    const [qudratPercen, setQudratPercen] = useState("");
    const [tahsilePercen, setTahsilePercen] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);




   


    const calculateBalanced = () => {

        const schoolMarkValue = schoolMark.trim() === "" ? 0 : parseFloat(schoolMark);
        const qudratMarkValue = qudratMark.trim() === "" ? 0 : parseFloat(qudratMark);
        const tahsileMarkValue = tahsileMark.trim() === "" ? 0 : parseFloat(tahsileMark);
      
        const schoolPercenValue = schoolPercen.trim() === "" ? 0 : parseFloat(schoolPercen);
        const qudratPercenValue = qudratPercen.trim() === "" ? 0 : parseFloat(qudratPercen);
        const tahsilePercenValue = tahsilePercen.trim() === "" ? 0 : parseFloat(tahsilePercen);
          
        if(schoolPercenValue + qudratPercenValue + tahsilePercenValue !== 100) {
            setError('مجموع النسب المئوية يجب ان يكون 100%');
            setResult(null); 
            return; 
        }
        let total = 0; 
        if (!isNaN(schoolMarkValue) && !isNaN(schoolPercenValue)) {
            total += (schoolMarkValue * schoolPercenValue) / 100;
          }
          if (!isNaN(qudratMarkValue) && !isNaN(qudratPercenValue)) {
            total += (qudratMarkValue * qudratPercenValue) / 100;
          }
          if (!isNaN(tahsileMarkValue) && !isNaN(tahsilePercenValue)) {
            total += (tahsileMarkValue * tahsilePercenValue) / 100;
          }
        setResult(total.toFixed(3));
        setError(null); 

    }
    
    return (
        <div className="balanced_div">
            <div className="balanced">
                <div className="balanced_text">
                    <h1>حساب النسبة الموزونة</h1>
                    <p>حساب النسبة الموزونة لخريجي الصف الثالث الثانوي المكونة من القدرات والتحصيلي والثانوية</p>
                    <p style={{fontWeight:"bold"}}>((اذا لم تطلب احدى الخانات فااتركه فارغاً))</p>

                </div>
                <div className="balanced_form">
                    <div className="balanced_form_inputs"  id="balanced_inputs_1">
                        <div className="input_group">
                            <label htmlFor="school_mark">درجة الثانوي</label>
                            <input autocomplete="off" type="text" id="school_mark" maxLength={6} value={schoolMark} onChange={(e) => {
                                setSchoolMark(e.target.value)
                            }}/>
                        </div>
                        <div className="input_group">
                            <label htmlFor="qudrat_mark">درجة القدرات</label>
                            <input autocomplete="off" type="text" id="qudrat_mark" maxLength={3} value={qudratMark} onChange={(e) => {
                                setQudratMark(e.target.value)
                            }}/>
                        </div>
                        <div className="input_group">
                            <label htmlFor="tahsile_mark">درجة التحصيلي</label>
                            <input autocomplete="off" type="text" id="tahsile_mark" maxLength={3} value={tahsileMark} onChange={(e) => {
                                setTahsileMark(e.target.value)
                            }}/>
                        </div>
                    </div>
                    <div className="balanced_form_inputs" id="balanced_inputs_2">
                        <div className="input_group">
                            <label htmlFor="school_percen">معيار الثانوي</label>
                            <input autocomplete="off"value={"%" + schoolPercen}type="text" id="school_percen" maxLength={3} onChange={(e) => {
                                setSchoolPercen(e.target.value.substring(1))
                            }}/>
                        </div>
                        <div className="input_group">
                            <label htmlFor="qudrat_percen">معيار القدرات</label>
                            <input autocomplete="off" value={"%" + qudratPercen}type="text" id="qudrat_percen" maxLength={3} onChange={(e) => {
                                setQudratPercen(e.target.value.substring(1))
                            }} />
                        </div>
                        <div className="input_group">
                            <label htmlFor="tahsile_percen">معيار التحصيلي</label>
                            <input autocomplete="off" value={"%" + tahsilePercen} type="text" id="tahsile_percen" maxLength={3} onChange={(e) => {
                                setTahsilePercen(e.target.value.substring(1))
                            }}/>
                        </div>
                    </div>
                </div>
                <div className="balanced_form_submit">
                <button onClick={calculateBalanced}>احسب </button>
                </div>
                <br/>
                {error && (
                <AlertRed alert_text={error} />
                )}
                <div className="balanced_result">
                    
                    <div className="balanced_result_div">
                        <a>{result !== null && <a>%{result}</a>}</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

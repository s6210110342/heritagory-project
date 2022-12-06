import React, { useState } from 'react'
import Dropdown from 'react-dropdown';
// import {InputLabel, MenuItem, Select, FormControl} from '@mui/material';




import 'react-dropdown/style.css';
import './Calc.css';

function Calc(){

        // const [comment, setComment] = useState(""); //old
        // const [comments, setComments] = useState([]); //new
        const [inputarr, setInputarr] = useState([]);
        const [inputdata, setInputdata] = useState({
            dropdowns:"",
            numbers:"",
            
        });

        //change of text
        // const onClickHandler = () => {
        //      [...inputdata, setInputdata]) 
        // };

        function onChangeHandler(e) {
            setInputdata({
                ...inputdata, 
                [e.target.name]:e.target.value
            })
        }

        let {dropdowns,numbers} = inputdata;
        
        function onClickHandler(){
            setInputarr([...inputarr,{dropdowns,numbers}])
            console.log(inputarr)
            console.log(inputdata)
            setInputdata({dropdowns:"", numbers: ""})
        }

      

    const options1 = [
        'บุตรชาย','หลานชาย','บิดา','ปู่(บิดาของบิดา)','พี่ชายหรือน้องชาย(ร่วมบิดา-มารดา)','พี่ชายหรือน้องชาย(ร่วมแต่บิดา)','พี่ชายหรือน้องชาย(ร่วมแต่มารดา)',
        'บุตรชายของพี่น้อง(ร่วมบิดา-มารดา)','บุตรชายของพี่น้อง(ร่วมแต่บิดา)','พี่ชายหรือน้องชายของบิดา(ร่วมแต่มารดา)','พี่ชายหรือน้องชายของบิด(ร่วมแต่บิดา)',
        'บุตรชายของพี่ชายหรือน้องชายของบิดา(ร่วมบิดา-มารดา)','บุตรชายของพี่ชายหรือน้องชายของบิดา(ร่วมแต่บิดา)','สามี','นายที่ปล่อยทาสให้เป็นไท',
        'บุตรสาว','หลานสาว(บุตรสาวของบุตรชาย)','มารดา','ยาย(มารดาของมารดา)','ย่า(มารดาของบิดา)',
        'พี่สาวหรือน้องสาว(ร่วมบิดา-มารดา)','พี่สาวหรือน้องสาว(ร่วมแต่บิดา)','พี่สาวหรือน้องสาว(ร่วมแต่มารดา)','ภรรยา','นายหญิงที่ปล่อยทาสเป็นไท' 
    ];

    // const defaultOption = options1['placeholder'];

        
        return (
            <div>
                <br></br>
                <h2>คำนวณส่วนแบ่งมรดกอิสลาม</h2>
                    <div className='Drop1'>
                        <Dropdown id="Drop2 "
                        options={options1} 
                        value={`${inputdata.dropdowns}`} 
                        onChange={onChangeHandler}
                        name='dropdowns'
                        placeholder="ทายาท"
                        // autoComplete='off'
                        />
                    </div>

                    <div className='Cal'>
                        <br></br>
                        <span>จำนวน: &nbsp;&nbsp;</span>
                        <input onChange={onChangeHandler} value={inputdata.name} type='number' name='numbers' class="int btn-light" placeholder='0' autoComplete='off' style={{padding: 5}}></input>
                        <span>&nbsp;&nbsp; คน</span>
                        <br></br>
                        {<button onClick={onClickHandler}  type='button' className='button' style={{margin: 5}}>เพิ่ม</button> }

                    </div>
                {/* </form> */}
                <div className='Cal'>
                    <br></br>
                    <span>จำนวนเงิน:&nbsp;&nbsp; </span>
                    <input type='number' class='int btn-light' placeholder='0' style={{padding: 5}}></input>
                    <span>&nbsp;&nbsp; บาท</span>
                    <br></br>
                    <button type='button' className='button' style={{margin: 5}}>คำนวณ</button>
                    <button type='button' className='button-reset' style={{margin: 5}}>ลบข้อมูล</button>
                </div>
                <br></br><br></br><br></br><br></br><br></br><br></br>
                    
                <div className='result'>
                    <ins>ส่วนแบ่งที่ได้:</ins>
                </div>
                
                <table className='table' width='30%' border={1} cellPadding={10}>
                    <tbody>
                    <tr>
                        <td>ทายาท</td>
                        <td>จำนวน</td> 
                    </tr>
                        {
                           inputarr.map(
                                (info, ind) => {
                                    return(
                                        <tr key={ind}>
                                            <td>{info.numbers}</td>
                                            <td>{info.dropdowns}</td>
                                        </tr>
                                    )
                                }
                           )
                        }
                    </tbody>
                </table>                
            </div>
        )
     }
// }

export default Calc;
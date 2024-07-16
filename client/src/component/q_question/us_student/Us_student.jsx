import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Us_student() {

  const [asnwer, setAnswer] = useState({

    basic_science_coursework: null,
    basic_science_foundation: '',
    usmle_date: null,
    uworld_subscription: null,

  });

  let navigate=useNavigate();

  function getAnswer(e) {

    let myAnswer = { ...asnwer };
    myAnswer[e.target.name] = e.target.value;
    setAnswer(myAnswer)
    console.log(asnwer);


  };

  async function submit(e) {
    e.preventDefault();

  
      try {
        const headers = {
          token:localStorage.getItem('userToken')
        };

        let {data} = await axios.post('http://localhost:5000/arena/v1/us_student/answer',asnwer,{headers});

        if (data.message ==="done") {

          console.log('done');
          navigate('/home');

        }

        
      } catch (err) {

        console.log(err);
      };
    }

  return (
    <div className="container w-100 h-100 mb-5">

      <form>


        <div className="p-3 mb-3">
          <p>Have you finished the basic science coursework in medical school? </p>

          <div className="form-check">
            <input onChange={getAnswer} type="radio" className='form-check-input' name='basic_science_coursework' value={true} id='b_s_c' />
            <label className='form-check-label' htmlFor="b_s_c">yes</label>
          </div>


          <div className="form-check">
            <input onChange={getAnswer} type="radio" className='form-check-input' name='basic_science_coursework' value={false} id='b_s_c' />
            <label className='form-check-label' htmlFor="b_s_c">no</label>
          </div>
        </div>


        <div className="p-3 mb-3">
          <p>What do you think of your basic science foundation? </p>

          <div className="form-check">
            <input onChange={getAnswer} type="radio" className='form-check-input' name='basic_science_foundation' value='weak' id='b_s_f' />
            <label className='form-check-label' htmlFor="b_s_f">Weak</label>
          </div>


          <div className="form-check">
            <input onChange={getAnswer} type="radio" className='form-check-input' name='basic_science_foundation' value='fair' id='b_s_f' />
            <label className='form-check-label' htmlFor="b_s_f">Fair</label>
          </div>
          <div className="form-check">
            <input onChange={getAnswer} type="radio" className='form-check-input' name='basic_science_foundation' value='good' id='b_s_f' />
            <label className='form-check-label' htmlFor="b_s_f">Good</label>
          </div>


          <div className="form-check">
            <input onChange={getAnswer} type="radio" className='form-check-input' name='basic_science_foundation' value='expert' id='b_s_f' />
            <label className='form-check-label' htmlFor="b_s_f">Expert</label>
          </div>
        </div>



        <div className="p-3 mb-3">
          <p>Expected USMLE exam date </p>

       <input onChange={getAnswer} type='date' className='m-1' name='usmle_date'  id='usmle_date'/> 
       </div>



        <div className="p-3 mb-3">
          <p> Do you have a UWorld subscription ?</p>

          <div className="form-check">
            <input onChange={getAnswer} type="radio" className='form-check-input' name='uworld_subscription' value={true} id='uworld' />
            <label className='form-check-label' htmlFor="uworld">yes</label>
          </div>


          <div className="form-check">
            <input onChange={getAnswer} type="radio" className='form-check-input' name='uworld_subscription' value={false} id='uworld' />
            <label className='form-check-label' htmlFor="uworld">no</label>
          </div>
        </div>

        <button onClick={submit} type='submit' className='mb-5 b-2 btn btn-danger'>
          send
        </button>


      </form>
    </div>
  )
}
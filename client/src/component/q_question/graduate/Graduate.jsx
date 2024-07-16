import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Graduate() {
  const [asnwer, setAnswer] = useState({

    Year_of_graduation: null,
    study_medicine_well: '',
    basic_science_foundation:'',
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

        let {data} = await axios.post('http://localhost:5000/arena/v1/graduate/answer',asnwer,{headers});

        if (data.message ==="done") {
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
          <p>year of graduate</p>

       <input onChange={getAnswer} type='date' className='m-1' name='Year_of_graduation'  id='graduate_date'/> 
       </div>


        <div className="p-3 mb-3">
          <p>Do you feel that you know how to study medicine well? </p>

          <div className="form-check">
            <input onChange={getAnswer} type="radio" className='form-check-input' name='study_medicine_well' value='yes' id='feel1' />
            <label className='form-check-label' htmlFor="feel1">Yes</label>
          </div>


          <div className="form-check">
            <input onChange={getAnswer} type="radio" className='form-check-input' name='study_medicine_well' value='no' id='feel2' />
            <label className='form-check-label' htmlFor="feel2">No</label>
          </div>
          <div className="form-check">
            <input onChange={getAnswer} type="radio" className='form-check-input' name='study_medicine_well' value='not_really' id='feel3' />
            <label className='form-check-label' htmlFor="feel3">Not really</label>
          </div>

        </div>

        <div className="p-3 mb-3">
          <p>What do you think of your basic science foundation? </p>

          <div className="form-check">
            <input onChange={getAnswer} type="radio" className='form-check-input' name='basic_science_foundation' value='weak' id='b_s_f1' />
            <label className='form-check-label' htmlFor="b_s_f1">Weak</label>
          </div>


          <div className="form-check">
            <input onChange={getAnswer} type="radio" className='form-check-input' name='basic_science_foundation' value='fair' id='b_s_f2' />
            <label className='form-check-label' htmlFor="b_s_f2">Fair</label>
          </div>
          <div className="form-check">
            <input onChange={getAnswer} type="radio" className='form-check-input' name='basic_science_foundation' value='good' id='b_s_f3' />
            <label className='form-check-label' htmlFor="b_s_f3">Good</label>
          </div>


          <div className="form-check">
            <input onChange={getAnswer} type="radio" className='form-check-input' name='basic_science_foundation' value='expert' id='b_s_f4' />
            <label className='form-check-label' htmlFor="b_s_f4">Expert</label>
          </div>
        </div>




        <div className="p-3 mb-3">
          <p>Expected USMLE exam date </p>

       <input onChange={getAnswer} type='date' className='m-1' name='usmle_date'  id='usmle_date'/> 
       </div>



        <div className="p-3 mb-3">
          <p> Do you have a UWorld subscription ?</p>

          <div className="form-check">
            <input onChange={getAnswer} type="radio" className='form-check-input' name='uworld_subscription' value={true} id='uworld1' />
            <label className='form-check-label' htmlFor="uworld1">yes</label>
          </div>


          <div className="form-check">
            <input onChange={getAnswer} type="radio" className='form-check-input' name='uworld_subscription' value={false} id='uworld2' />
            <label className='form-check-label' htmlFor="uworld2">no</label>
          </div>
        </div>

        <button onClick={submit} type='submit' className='mb-5 b-2 btn btn-danger'>
          send
        </button>


      </form>
    </div>
  )
}

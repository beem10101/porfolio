import React from 'react';
import {FaFileImage} from 'react-icons/fa';

const Gpx = () => {
  return (
  <div class="card ">
    <div class="card-body">
    <h2 class="card-title">grade</h2>
      <ul class="list-group">
        <li class="list-group-item border-top-0 border-left-0 border-right-0">
          <div class='row'>
            <div class='col-12 col-md-8'>
              <h5 class='font-weight-bold '> Gpx </h5>
            </div>
            <div class='col-6 col-md-4 text-primary'>
              <h5 class='font-weight-bold text-primary'> 3.5 </h5>
            </div>
          </div>
        </li>
        <li class="list-group-item border-top-0 border-left-0 border-right-0">
          <div class='row'>
            <div class='col-12 col-md-8'>
              <h5> a </h5>
            </div>
            <div class='col-6 col-md-4'>
              <h5 class='text-primary'> 3.5 </h5>
            </div>
          </div>
        </li>
        <li class="list-group-item border-top-0 border-left-0 border-right-0">
          <div class='row'>
            <div class='col-12 col-md-8'>
              <h5> math </h5>
            </div>
            <div class='col-6 col-md-4'>
              <h5 class='text-primary'> 3.5 </h5>
            </div>
          </div>
        </li>
        <li class="list-group-item border-top-0 border-left-0 border-right-0">
          <div class='row'>
            <div class='col-12 col-md-8'>
              <h5> thai </h5>
            </div>
            <div class='col-6 col-md-4'>
              <h5 class='text-primary'> 3.5 </h5>
            </div>
          </div>
        </li>
        <a className='icon' target='blank'href='https://github.com/beem10101/porfolio'><FaFileImage/></a>
      </ul>
    </div>
  </div>
  )
}

export default Gpx
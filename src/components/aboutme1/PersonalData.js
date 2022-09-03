import React from 'react'
import Radarchart from '../chart/Radarchart'

const PersonalData = () => {
  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
         <div class="row">
            <div class='col-12 col-md-6'>
            <Radarchart/>
            </div>
            <div class='col-6 col-md-4 mt-5'>
                <ul class="list-group">
                    <li class="list-group-item">Cras justo odio</li>
                    <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Morbi leo risus</li>
                    <li class="list-group-item">Porta ac consectetur ac</li>
                    <li class="list-group-item">Vestibulum at eros</li>
                </ul>
            </div>
         </div>
      </div>
    </div>
  )
}

export default PersonalData
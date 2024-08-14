import React from 'react'
                              
const Content = () => {
  return (
    <div>
      <table className='text-center container w-50 my-5'>
        <tr>
          <th>S.NO</th>
          <th>Name</th>
          <th>Register Number</th>
          <th>Department</th>
          <th>Section</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Raja</td>
          <td>91</td>
          <td>CSE</td>
          <td>B</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Kabil</td>
          <td>97</td>
          <td>CSE</td>
          <td>B</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Sudhan</td>
          <td>88</td>
          <td>CSE</td>
          <td>B</td>
        </tr> <tr>
          <td>4</td>
          <td>Hesventh</td>
          <td>89</td>
          <td>CSE</td>
          <td>B</td>
        </tr>
      </table>
      <form className='container form w-50 border p-4 shadow rounded  '>
        <label className='form-label'>UserName</label>
        <input className='form-control'></input>
        <label className='form-label mt-3'>Password</label>
        <input className='form-control'></input>
        <button className='btn btn-success my-4 w-100'>Login</button>
      </form>
    </div>
  )
}

export default Content
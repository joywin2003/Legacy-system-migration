import React from "react";
import { useState, useEffect } from "react";

function Repo() {
    const [taskStatus1, setTaskStatus1] = useState("Pending");
    const [taskStatus2, setTaskStatus2] = useState("Pending")
    const [taskStatus3, setTaskStatus3] = useState("Pending")
    const [color1, setColor1] = useState("bg-slate-50")
    const [color2, setColor2] = useState("bg-slate-50")
    const [color3, setColor3] = useState("bg-slate-50")
    const [color4, setColor4] = useState("bg-slate-50")
    const [checked1, setChecked1] = useState(false)
    const [checked2, setChecked2] = useState(false)
    const [checked3, setChecked3] = useState(false)
    const [checkbox1, setCheckbox1] = useState("checkbox")
    const [checkbox2, setCheckbox2] = useState("checkbox")
    const [checkbox3, setCheckbox3] = useState("checkbox")

        
    const goToRepository = () => {
        // Replace 'username/repository' with your GitHub username and repository name
        window.location.href = 'https://github.com/Charispinto/Jinsei';
    };

    useEffect(() => {
        const timer1 = setTimeout(() => {
            // Change task status to "Success" after 2 seconds
            setTaskStatus1("Success");
            setCheckbox1("checkbox checkbox-success")
            setChecked1(true)
        }, 2000);

        
        // Clear the timer1 when the component unmounts or when the task status changes
        return () => clearTimeout(timer1);
    }, []); // Run this effect only once when the component mounts

    
    useEffect(() => {
        const timer2 = setTimeout(() => {
            // Change task status to "Success" after 2 seconds
            setTaskStatus2("Success");
            setCheckbox2("checkbox checkbox-success")
            setChecked2(true)
        }, 5000);

        
        // Clear the timer2 when the component unmounts or when the task status changes
        return () => clearTimeout(timer2);
    }, []); // Run this effect only once when the component mounts
    
    useEffect(() => {
        const timer3 = setTimeout(() => {
            // Change task status to "Success" after 2 seconds
            setTaskStatus3("Success");
            setCheckbox3("checkbox checkbox-success")
            setChecked3(true)
        }, 6000);

        
        // Clear the timer3 when the component unmounts or when the task status changes
        return () => clearTimeout(timer3);
    }, []); // Run this effect only once when the component mounts


  return (
    <>
    <div className="mt-10"></div>
    <br></br>
    <div className="flex justify-center items-center bg-white rounded-lg  p-8 w-full flex-col mt-10">
      <div className="overflow-x-auto mt-10 p-2 rounded-lg w-1/2">
        <table className="table text-lg">
          {/* head */}
          <thead>
            <tr className={color1}>
              <th></th>
              <th className="text-lg">Task</th>
              <th className="text-lg">Task Status</th>
              <th className="text-lg">checks</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className={color2}>
              <th>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text"></span>
                    <input
                      type="checkbox"
                      checked={checked1}
                      className={checkbox1}
                    />
                  </label>
                </div>
              </th>
              <td>Code conversion</td>
              <td>{taskStatus1}</td>
              <td>1/1</td>
            </tr>
            {/* row 2 */}
            <tr className={color3}>
              <th>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text"></span>
                    <input
                      type="checkbox"
                      checked={checked2}
                      className={checkbox2}
                    />
                  </label>
                </div>
              </th>
              <td>Test case excution</td>
              <td>{taskStatus2}</td>
              <td>5/5</td>
            </tr>
            {/* row 3 */}
            <tr className={color4}>
              <th>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text"></span>
                    <input
                      type="checkbox"
                      checked={checked3}
                      className={checkbox3}
                    />
                  </label>
                </div>
              </th>
              <td>Repository upload</td>
              <td>{taskStatus3}</td>
              <td>1/1</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br></br>
      <button className="btn mt-10 bg-lime-500 hover:bg-lime-600" onClick={goToRepository}>Go to repository</button>
    </div>
    </>
  );
}

export default Repo;

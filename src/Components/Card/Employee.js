import '../Card/Employee.css';


const Emp = (props) => {
  return (
    <div className="card">
      <img src={props.img} className="img" />
      <h3 className='id'> Id : {props.eid}</h3>
      <h3> Name : {props.ename}</h3>
      <h3> City : {props.ecity}</h3>
      <h3> Age : {props.eage}</h3>
    </div>
  );
}

const Employee = () => {
  return (
    <>
      <h2 className='wel'><i>Welcome to my Card</i></h2>
      <Emp img='./Image2/1.jpg' eid="01" ename="Jack" ecity="Noida" eage="25" />
      
      <Emp img='./Image2/2.jpg' eid="02" ename="Peter" ecity="Kanpur" eage="22" />
      <Emp img='./Image2/3.jpg' eid="03" ename="Max" ecity="Allahabad" eage="20" />
      <Emp img='./Image2/4.jpg' eid="04" ename="Sam" ecity="Lucknow" eage="26" />
      <Emp img='./Image2/5.jpg' eid="05" ename="Pankaj Maurya" ecity="Noida" eage="25" />
      <Emp img='./Image2/6.jpg' eid="06" ename="Deepak Maurya" ecity="Kanpur" eage="22" />
      <Emp img='./Image2/7.jpg' eid="07" ename="Abhishek " ecity="Allahabad" eage="20" />
      <Emp img='./Image2/8.jpg' eid="08" ename="Dara Patel" ecity="Lucknow" eage="26" />
      <Emp img='./Image2/9.jpg' eid="09" ename="Vipin" ecity="Noida" eage="25" />
      <Emp img='./Image2/10.jpg' eid="10" ename="Ashish yadav" ecity="Kanpur" eage="22" />
      <Emp img='./Image2/9.jpg' eid="11" ename="Abhi" ecity="Allahabad" eage="20" />
      <Emp img='./Image2/10.jpg' eid="12" ename="Anurag" ecity="Lucknow" eage="26" />

    </>
  );
}

export default Employee;
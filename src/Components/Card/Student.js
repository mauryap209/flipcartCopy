import '../Card/Student.css';

 
const Stdata = [
    {
        image: './Img/pm.jpg',
        id: 1,
        name: "Pankaj Maurya",
        course: "PHP Training",
        trainer: "Shakti Srivastav",

    },
    {
        image: './Image2/code.jpg',
        id: 2,
        name: "Dara Patel",
        course: "PHP Training",
        trainer: "Shakti Srivastav",

    },
    {
        image: './Image2/dark.jpeg',
        id: 3,
        name: "Abhishek Dwivedi",
        course: "PHP Training",
        trainer: "Shakti Srivastav",
    },
    {
        image: './Image2/clock.jpeg',
        id: 4,
        name: "Prashant Srivastav",
        course: "PHP Training",
        trainer: "Shakti Srivastav",
    },
    {
        image: './Image2/code.jpg',
        id: 5,
        name: "Sibbu",
        course: "PHP Training",
        trainer: "Shakti Srivastav",
    },
   
    {
        image: './Image2/code.jpg',
        id: 6,
        name: "Asutosh",
        course: "PHP Training",
        trainer: "Shakti Srivastav",
        
    },
   
]

const Stu = ({ image, id, name, course,trainer }) => {
    return (
         <div className='card1'>
             <div className='head'>Arudan Tech. Pvt. Ltd.</div>
            <img src={image} className="img1" />
            <h5>id : <i>{id}</i></h5>
            <h5>Name : <i>{name}</i></h5>
            <h5>Course : <i>{course}</i></h5>
            <h5>Trainer :<i className='col'> {trainer }</i></h5>
        </div>  
    );
}

const Student = () => {
    return (
        <>
            {
                Stdata.map((st) => <Stu {...st} key={st.id} />)
            }
        </>
    );
}

export default Student;
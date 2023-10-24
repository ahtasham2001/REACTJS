import React from "react";
import Card from './Card';

const Cards = (props)=>{
    let courses = props.courses

    function getCourses() {
        let allCourses = [];
        Object.values(courses).forEach(array=>{
            array.forEach(courseData=>{
                allCourses.push(courseData)
            })
        })
        
    }
    return(
        <div>
            {
                getCourses().map((course)=>{
                    return <Card course = {course} key={props.courses.id}/>
                })
            }
        </div>
    )
}



export default Cards
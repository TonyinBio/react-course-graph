import React from 'react'

function checkValid({programSchedule, waives});
/*
Purpose:
    checks if each course in programSchedule has their requisites satisfied

Extra functionality:
    takes into account course waives
*/

export default function algorithm({graph, programSchedule, termsAvailable}) {
    /*
    Args:
        graph: graph of courses and requisites
        programSchedule: 2d matrix for each semester (rows), and course (elements in row),
            programSchedule.length <= userTermLimit = 8
            row.length <= userCourseLoad = 5
            some cells contain wanted courses.
        termsAvailable:
            the semesters that can still be changed

    Purpose:
        fill out programSchedule with required prereqs
    
    Note:
        If user wants to have a specific requisite at a specific semester, user can simply add that to programSchedule before calling this function

    Special Cases:
        multiple paths exist to a certain cell/course:
            default to: shortest path (will highlight cells where multiple paths exist)
        impossible to make a valid course (path length > termsAvailable):
            will return updated programSchedule that is as complete as possible
            will return problematic wanted course and shortest path that still can't fit
    */



  return (
    <div>algorithm</div>
  )
}
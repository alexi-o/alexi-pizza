import {useState, useEffect, useRef} from 'react';

export default function Skills(){
    var skillsArray = [

    ];
    for (var i = 1; i < 5; i++) {
        skillsArray.push('down');
    };
    
    const [skills, setSkills] = useState(skillsArray);
    
    
    const handleClick = (e) => {
      e.preventDefault();
      
      let newArray = skillsArray;
      if (e.target.innerHTML === 'up') {
        newArray.splice(e.target.id, 1, 'down');
      } else {
        newArray.splice(e.target.id, 1, 'up');
      };
      setSkills(newArray)
    };
    
    return (
      <table>
        <tbody>
          <tr>
            {skills.map((val, i) => (
              <td onClick={handleClick} id={i} key={i} style={{backgroundColor: 'white', padding:'50px'}}>{val}</td>
            ))}
          </tr>
        </tbody>
        </table>
    );
  }
import React from 'react'
import {Bookmark} from 'lucide-react'




const cards = [
  {
    company: "Amazon",
    role: "Senior UI/UX Designer",
    type: "Part Time",
    level: "Senior Level",
    salary: "$120/hr",
    location: "Mumbai, India",
    img: "https://tse2.mm.bing.net/th/id/OIP.qWOzHLmRCs0WdNB0VUL6TAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    company: "Google",
    role: "Frontend Developer",
    type: "Full Time",
    level: "Mid Level",
    salary: "$100/hr",
    location: "Bangalore, India",
    img: "https://tse3.mm.bing.net/th/id/OIP.ode8w2My1Q00bcGOiGeEGwHaDq?r=0&w=1280&h=632&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    company: "Microsoft",
    role: "Software Engineer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$110/hr",
    location: "Hyderabad, India",
    img: "https://th.bing.com/th/id/R.5b7f69b943b3471cb00863cbed921e0b?rik=pHb%2biYjM7FdE3g&riu=http%3a%2f%2fsds.parsons.edu%2fdesignmanagement%2ffiles%2f2024%2f07%2fvecteezy_microsoft-logo-png-microsoft-icon-transparent-png_27127592.png&ehk=ob8PoX8oj1F7JVivXZUpV25qVc3It9ZWRMDCmD0S6CQ%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    company: "Apple",
    role: "Product Designer",
    type: "Full Time",
    level: "Mid Level",
    salary: "$130/hr",
    location: "Bangalore, India",
    img: "https://applescoop.org/image/story/76316045115487008-10311484136811093.jpeg",
  },
  {
    company: "Meta",
    role: "React Developer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$125/hr",
    location: "Gurgaon, India",
    img: "https://tse4.mm.bing.net/th/id/OIP._T2JS8WKRn9-2vtuQWZVNwHaGM?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    company: "Netflix",
    role: "UI Designer",
    type: "Part Time",
    level: "Mid Level",
    salary: "$115/hr",
    location: "Mumbai, India",
    img: "https://static.vecteezy.com/system/resources/previews/017/396/814/original/netflix-mobile-application-logo-free-png.png",
  },
  {
    company: "Adobe",
    role: "UX Researcher",
    type: "Full Time",
    level: "Senior Level",
    salary: "$105/hr",
    location: "Noida, India",
    img: "https://tse3.mm.bing.net/th/id/OIP.Xc79egD4HYqtOXjTgq_4fwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    company: "Spotify",
    role: "Frontend Engineer",
    type: "Full Time",
    level: "Mid Level",
    salary: "$95/hr",
    location: "Bangalore, India",
    img: "https://th.bing.com/th/id/OIP.liLMsgG5p-A7lHBoMdV4bQHaEc?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    company: "Tesla",
    role: "Product Designer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$140/hr",
    location: "Pune, India",
    img: "https://th.bing.com/th/id/R.0287303cf91f9e6d6786fe4882e31858?rik=xSXlauk7GzxACA&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2018%2f02%2fEmblem-Tesla.jpg&ehk=gMHjZwBGHhQ9vu4Kmx2NRRNlRiZSpmEvaDe38qIxXw8%3d&risl=&pid=ImgRaw&r=0",
  },

];

const Card = () => {
  return (
    <div className="parent">
      {cards.map((card, index) => (
        <div className="card" key={index}>

          <div className="top">
            <img src={card.img} alt={card.company} />

            <button>
              Save <Bookmark size={18} />
            </button>
          </div>

          <div className="center">
            <h3>{card.company}</h3>

            <h1>{card.role}</h1>

            <h5>{card.type}</h5>

            <h5>{card.level}</h5>
          </div>

          <div className="botom">
            <h1>{card.salary}</h1>

            <h4>{card.location}</h4>
            <button>
              <h4 className='apply'>Apply</h4>
            </button>
          </div>

        </div>
      ))}
    </div>
  );
};

export default Card;
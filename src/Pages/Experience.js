import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from '@mui/icons-material/School';
 
function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon/>}
            >
              <h3 className="vertical-timeline-element-title">Sri Mahaveer jain school,Thiruvottriyur,Chennai</h3>
              <p>SSLC</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon/>}
            >
              <h3 className="vertical-timeline-element-title">Revoor Padmanabha Chety's school,Thiruvottriyur,Chennai</h3>
              <p>HSC</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon/>}
            >
              <h3 className="vertical-timeline-element-title">Jeppiaar Engineering College,Semmancheri,Chennai</h3>
              <p>B.E in Computer Science</p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  )
}

export default Experience
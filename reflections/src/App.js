import './App.css';

import { useState } from 'react';

const App = () => {

  const [section, setSection] = useState("Reflective Presentation");
  const [nextSection, setNextSection] = useState("");
  const [opacity, setOpacity] = useState(1.0);

  const sections = {
    "Reflective Presentation": [
      "Hi everyone! My name is Devin Arena and as a Software Engineer, this was the coolest idea I had for a Reflective Presentation!",
      "Click the button on the sides to view each section.",
      "I should note: I didn't have time to develop media queries for mobile, so this site is really only designed for use on a PC, though it should work regardless."
    ],
    "Teaching and Learning": [
      "Throughout the semester, my views of teaching and learning have changed significantly. I started the semester thinking of teaching and learning as kind of a one-dimensional topic. Students learn and teachers teach. In reality, teachers can learn just as much from their students as students can from them.",
      "I've learned a lot about what it means to be a good teacher, and a lot of this information has really impacted me both as an LA and as a student.",
      "Though it woul dbe too much to describe all here, some of the key takeaways I've had involving teaching and learning come from a few of the different modules we've discussed.",
      "For example, I learned a lot about how we think and how this can be applied to both teaching and learning through our metacognition and mental models units.",
      "I learned about how teaching and learning styles can differ and the science behind how students actually learn.",
      "I also discovered important techniques to teaching and how we can utilize them, such as formative assessment.",
      "Overall, my view of teaching has significantly changed. I no longer see it as someone more knowledgeable simply giving information to those without that knowledge. I see it as a way for teachers to guide students through the learning process even learning a bit on the way.",
      "My view of learning has also changed. After learning all the science behind it, I'm more confident in my abilities to learn, and I've developed some great strategies for learning myself."
    ],
    "My Practices": [
      "My practices have also developed and changed throughout this semester, some significant changes, and some not.",
      "One greatly significant change I've had is in my teaching style. I'm a TA for General Physics II, and at the beginning of the semester, I more or less walked students through the material. Now my teaching style has changed to guide students to the solution on their own, using the methods of learning we talked about in class.",
      "I've learned the importance of getting feedback from students on my teaching styles, and it has helped me improve myself as a teacher.",
      "I learned to frequently ask students questions to help them consider material from other perspectives, which has helped me lead students to some aha moments.",
      "Even my learning practices have developed. I've noticed my study habits have become stronger, and knowing how to approach material from multiple angles is hugely beneficial.",
    ],
    "Influential Readings and Assignments": [
      "The lesson about metacognition was likely the most influential on both my teaching and learning styles.",
      "This unit really helped me to consider not just the material I'm learning, but how I'm learning it. It's also helped me consider now just what I'm teaching, but how I'm teaching it.",
      "Similarly, the reading 'Memory, Retention, and Learning from \"How the Brain Learns\"' also taught me a great deal and influenced my learning and teaching styles, strengthening both.",
      "Some of the most helpful assignments in class were the ones we did in breakout rooms, which helped me solidify my understanding of the current material we were presented. The material we learned in class was often the most influential towards my changes in practice.",
      "Easily the biggest and most influential assignment for me was the Create a Lesson Project, which you can see a lot more about in the designated tab. This project really taught me a lot not just about the material I covered in it, but what it really means to be a teacher. It was my first hands-on experience teaching to a class rather than being an LA in a small group setting."
    ],
    "Create A Lesson": [
      "The Create A Lesson project was both a nerve-wracking and enjoyable assignment. It really opened my eyes to how difficult and rewarding it can be to be a teacher.",
      "My Create A Lesson project, which I accomplished with the assistance of McKenzie Brady and Ruben Rosado, was on mental models.",
      "Some of the questions we posted included: What are mental models? Why are mental models important? How can we use mental models as LAs and students?",
      "For our project, we created a Prezzi with information regarding mental models in the form of a slideshow. We presented what mental models are, examples, case studies, and the importance of mental models to the class. We also included an interactive component in the form of a post-assessment kahoot, which I felt was a fun and interesting way to end the presentation.",
      "From the Create A Lesson project, I feel like I learned a lot. I learned about teaching and even got some hands on experience teaching to a larger group. I also learned and strengthened my teamwork and cooperation skills, working with other LAs I hadn't yet had the opportunity to work with. And of course, I learned about mental models and how we can apply them to our own teaching styles.",
      "Overall, I felt it was a fun and rewarding experience, and it was my favorite assignment of the semester."
    ],
  };

  const transition = (e) => {
    if (e.target.style.opacity === "0") {
      setOpacity(1);
      setSection(nextSection);
      setNextSection("");
    }
  }

  return (
    <div className="App">
      <ul className="SectionPicker">
        {
          Object.keys(sections).map((section, idx) => {
            return (
              <li key={idx}>
                <button type="button" onClick={
                  () => {
                    setNextSection(section);
                    setOpacity(0);
                  }
                }>
                  {section}
                </button>
              </li>
            );
          })
        }
      </ul>
      <div className="Section" style={{ "opacity": opacity }} onTransitionEnd={e => transition(e)}>
        <h1>{section}</h1>
        {
          sections[section].map((text, idx) => {
            return (
              <p key={idx}>{text}</p>
            );
          })
        }
        {section === "Reflective Presentation" &&
          <p>I built this site using ReactJS and pure CSS. For my fellow dorks, you can view the site source code <a href='https://github.com/devinarena/'>here</a>.</p>}
      </div>
    </div>
  );
}

export default App;

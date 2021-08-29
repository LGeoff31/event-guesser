import runnersImage0 from "./runners/runner0.jpeg";
import runnersImage1 from "./runners/runner1.jpeg";
import runnersImage2 from "./runners/runner2.jpeg";
import runnersImage3 from "./runners/runner3.jpeg";
import runnersImage4 from "./runners/runner4.jpeg";
import runnersImage5 from "./runners/runner5.jpeg";
import runnersImage6 from "./runners/runner6.jpeg";
import runnersImage7 from "./runners/runner7.jpeg";
import runnersImage8 from "./runners/runner8.jpeg";
import runnersImage9 from "./runners/runner9.jpeg";
import runnersImageAnswer0 from "./answers/runner0answer.jpeg";
import runnersImageAnswer1 from "./answers/runner1answer.jpeg";
import runnersImageAnswer2 from "./answers/runner2answer.jpeg";
import runnersImageAnswer3 from "./answers/runner3answer.jpeg";
import runnersImageAnswer4 from "./answers/runner4answer.jpeg";
import runnersImageAnswer5 from "./answers/runner5answer.jpeg";
import runnersImageAnswer6 from "./answers/runner6answer.jpeg";
import runnersImageAnswer7 from "./answers/runner7answer.jpeg";
import runnersImageAnswer8 from "./answers/runner8answer.jpeg";
import runnersImageAnswer9 from "./answers/runner9answer.jpeg";


const level0 = {
    "name": "Ryan Crouser",
    "image": runnersImage3, 
    "answerImage": runnersImageAnswer3,
    "options": ["Javelin", "Shot Put", "Hammer Throw", "Discus Throw"], 
    "correctIndex": 1
};

const level1 = {
    "name": "Eliud Kipchoge", 
    "image": runnersImage1, 
    "answerImage": runnersImageAnswer1,
    "options": ["3000m", "5000m", "10000m", "Marathon"], 
    "correctIndex": 3
};
const level2 = {
    "name": "Justin Gatlin",
    "image": runnersImage2, 
    "answerImage": runnersImageAnswer2,
    "options": ["100m", "200m", "400m", "800m"], 
    "correctIndex": 0
};
const level3 = {
    "name": "Nick Symmonds",
    "image": runnersImage0, 
    "answerImage": runnersImageAnswer0,
    "options": ["200m", "400m", "800m", "1600m"], 
    "correctIndex": 2
};
const level4 = {
    "name": "Greg Rutherford",
    "image": runnersImage4, 
    "answerImage": runnersImageAnswer4,
    "options": ["Triple Jump", "100m", "400m", "Long Jump"], 
    "correctIndex": 3
};
const level5 = {
    "name": "Andre De Grasse",
    "image": runnersImage5, 
    "answerImage": runnersImageAnswer5,
    "options": ["100m", "200m", "400m", "400m Hurdles"], 
    "correctIndex": 1
};
const level6 = {
    "name": "Christian Taylor",
    "image": runnersImage6, 
    "answerImage": runnersImageAnswer6,
    "options": ["Triple Jump", "High Jump", "Pole Vault", "Long Jump"], 
    "correctIndex": 0
};
const level7 = {
    "name": "David Akerman",
    "image": runnersImage7, 
    "answerImage": runnersImageAnswer7,
    "options": ["200m", "800m", "1500m", "5000m"], 
    "correctIndex": 1
};
const level8 = {
    "name": "Armand Duplantis",
    "image": runnersImage8, 
    "answerImage": runnersImageAnswer8,
    "options": ["110m Hurdles", "Pole Vault", "800m", "High Jump"], 
    "correctIndex": 1
};
const level9 = {
    "name": "Karsten Warholm",
    "image": runnersImage9, 
    "answerImage": runnersImageAnswer9,
    "options": ["400m", "110m Hurdles", "200m", "400m Hurdles"], 
    "correctIndex": 3
};


const levels = [level0, level1, level2, level3, level4, level5, level6, level7, level8, level9]
export default levels;
import React from 'react'

import './About.css'

export default function About() {
    return (
        <div className="about-container">
            <h1 className="about-heading">About</h1>
            <div className="about-main">
                <p className="about-content">
                    This is an realtime AI based Yoga Trainer which detects your pose how well you are doing.
                    I created this as my final year project
                    This AI first predicts keypoints or coordinates of different parts of the body(basically where
                    they are present in an image) and then it use another classification model to classify the poses if 
                    someone is doing a pose and if AI detects that pose more than 95% probability and then it will notify you are 
                    doing correctly(by making virtual skeleton green). I have used Tensorflow pretrained Movenet Model To Predict the 
                    Keypoints and building a neural network top of that which uses these coordinates and classify a yoga pose.

                    I have trained the model in python because of tensorflowJS we can leverage the support of browser so I converted 
                    the keras/tensorflow model to tensorflowJS.
                </p>
                <div className="developer-info">
                    <h4>About Developer</h4>
                    <p className="about-content">Hello this is Shivam Thakur! I'm a 3rd-year computer engineering student pursuing my BE degree at Thakur College under Mumbai University. My passion lies in the fields of Data Science, Artificial Intelligence, and Machine Learning. I thrive on exploring the latest AI discoveries and tackling challenges in DS and ML. Let's connect and collaborate to push the boundaries of AI together! 
                    </p>
                    <h4>Contact</h4>
                    <a href="https://www.linkedin.com/in/shivam-thakur-59b79b254/"><p className="about-content">LinkedIn</p></a>
                    <a href="https://github.com/07shivamthakur"><p  className="about-content">GitHub</p></a>
                </div>
            </div>
        </div>
    )
}

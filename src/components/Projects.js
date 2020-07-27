import React from 'react';
import { Typography, Container } from '@material-ui/core';
import Header from './typographic/Header';
import Subheader from './typographic/Subheader';
import BodyText from './typographic/BodyText';
import Project from './display/Project';

const Projects = () => {

    return (
        <Container>
            <Header>
                Student-Led Projects
            </Header>
            <Project name="Algorithmic Trading Team">
                This applied AI project’s goal is to model stock market trends and create a decision-making bot that leverages that info for automated trading. The project features opportunities to work on and learn more about feature-mining, database management, NLP & text-analysis, change-point detection, time-series forecasting, deep learning, and reinforcement learning. Highly motivated students may take part in leading one of these subgroups.
                Time-Commitment: 3 hours/week
                Contact Info: @Chris Endemann (Slack), endemann@wisc.edu
                Prereqs: Anyone with some basic coding experience is welcome to join the team! If you’re more experienced, I am actively seeking subgroup leaders for NLP, reinforcement learning and deep learning components of the project.
                Meeting time/location: Tuesdays @6:30pm
            </Project>
            <Project name="Engr-Auto Team">
                The engr-auto group is an exciting new collaboration between the Formula SAE Autonomous team and AI@UW! Project members will have the opportunity to use state-of-the-art computer vision algorithms to detect obstacles and generate a path for a ⅓ scale Formula style race car to drive at the 2021 Formula Student Germany competition. Experience developed over the course of the project will include convolutional neural networks, algorithm implementation, ROS, localization, and data collection. If you are interested in using AI to solve the real-world engineering problem of autonomous driving, join the #engr-auto group on Slack for future updates!
                Time-Commitment: 3 hours/week
                Contact Info:@Alex Vesel (Slack), @Adam Shedivy (slack), @Declan (slack)
                Prereqs: Anyone with some basic coding experience is welcome to join the team! Knowledge of basic neural networks, python or tensorFlow is recommended
                Meeting time/location: Sundays @12pm
            </Project>
            <Project name="MelodiCoding Team">
                This team will be developing an application (MelodiCode) that uses artificial intelligence to take on the complex task of musical composition. To create complex, beautiful music we will incorporate various elements of music (pitch, dynamics, tempo, chord progressions, etc.) into the training and song creation by implementing machine learning algorithms and neural networks. This project is an opportunity to gain experience in deep learning, supervised classification, time-series analysis, Markov chain algorithms, and user interface in collaboration with others who share a passion for music and machine learning. Join the #engr-melodicoding-team group on Slack for future updates!
                Time-Commitment: 1.5 hours/week
                Contact Info: @Atulya Reddy (Slack), @Levi Redlin (Slack)
                Prereqs: Anyone with basic knowledge of Java is welcome to join the team!
                Meeting time/location: TBD
            </Project>
            <br></br>
            <Header>
                For Credit/Pay Projects
            </Header>
            <Project name="Application of Machine Learning to Analyze Molecular Dynamics Simulations">
                We are currently developing machine learning methods to predict the thermodynamic properties of interfaces in liquid-phase environments. Our datasets consist of hundreds of thousands of atomic positions obtained from classical molecular dynamics (MD) simulations. An MD simulation predicts the motion of atoms and molecules at molecular length and timescales (nm and ps respectively). Typically, simulation data are analyzed using techniques based on statistical mechanics, but we have demonstrated that machine learning can drastically reduce the simulation time required to make predictions of one particular thermodynamic property that is critical for predicting interfacial hydrophobicity – the hydration free energy - which is relevant to the design of biological materials. In our present work, we have used LeNet5, a 2D convolutional neural network architecture developed by LeCun et al. The project would involve using already curated datasets and testing the effect of different machine learning algorithms on prediction accuracy. Students are also free to extend the scope of the project and try other machine learning models, such as 3-D CNNs or graph neural networks, which would require modification of the input data representation.

                <ul>
                    <li>AI/ML Methods & Tools: Supervised classification; Deep Learning; Linear Regression; Dimensionality Reduction (e.g. PCA, diffusion map embedding)</li>
                    <li>Department: Chemical and Biological Engineering</li>
                    <li>Prereqs: Proficiency in Python is required. Some machine learning experience with toolboxes like Tensorflow/PyTorch is preferred. Courses in physical chemistry or thermodynamics are preferred but not necessary.</li>
                    <li>Number of Open Positions: 2 to 4</li>
                    <li>Time-Commitment: 10 hrs / week (for credits)</li>
                    <li>Contact Info: Reid Van Lehn, vanlehn@wisc.edu</li>
                </ul>
            </Project>
            <Project name="Exploring the Neural Basis of Consciousness">
                We seek to identify changes in brain activity and connectivity that underlie changes in arousal state using imaging and electrophysiology data recorded from neurosurgical patients. In this project, students will use machine learning tools to track the dynamics of brain network configuration with the goals of (a) identifying subsets of network configurations that associate with specific arousal states (wake, sleep, anesthesia), (b) building Markov models to identify and quantify state transitions, (c) developing analgorithm to predict arousal state in real-time, and (d) developing and applying matrix-completion algorithms to facilitate summarizing data across subjects.

                <ul>
                    <li>AI/ML Methods & Tools: Supervised classification; Unsupervised classification (e.g.clustering); Time-Series Analysis; Deep Learning; Linear Regression; Markov Models; Dimensionality Reduction (e.g. PCA, diffusion map embedding)</li>
                    <li>Department: Anesthesiology & Neuroscience</li>
                    <li>Prereqs: Proficiency in Python and/ or Matlab is required. Some signal processing background is desirable.</li>
                    <li>Number of Open Positions: 2</li>
                    <li>Time-Commitment: 10 hrs/week minimum (either for credits or wage)</li>
                    <li>Contact Info: Matthew Banks,​​ mibanks@wisc.edu</li>
                </ul>
            </Project>
            <Project name="Building an Automated Machine Learning Algorithm for Characterization of Anxiety-related Vocalizations in Non-human Primates">
                Anxiety disorders (ADs) are among the most common psychiatric illnesses in the world and cause significant psychosocial, emotional, and physical distress. ADs typically emerge early in childhood and follow a chronic course. A primary interest of the Kalin Lab is to characterize the neurodevelopmental origins of anxiety, both in human andmonkey models. Due to their extensive behavioral and neuroanatomical similarities to humans, primate models play a critical role in psychopathology research. Specifically, they allow for mechanistic studies of underlying alterations in neural circuitry. Primates display a variety of behaviors when exposed to threatening stimuli, many of which contribute to an anxious temperament. Of these, a key indicator of an anxious phenotype is the frequency and quality of vocalizations. In a large sample of preadolescent monkeys, we hope to build and train an unsupervised ML algorithm that can detect and differentiate a range of anxiety-related vocal events.

                <ul>
                    <li>AI/ML Methods & Tools: Supervised classification; Unsupervised classification (e.g.clustering); Deep Learning</li>
                    <li>Department: Psychiatry, SMPH</li>
                    <li>Prereqs: Proficiency in Python/Git and/ or familiarity with R is required. Experience with bash/command line is also required. Some machine learning experience with Tensorflow and audio processing is preferred.</li>
                    <li>Number of Open Positions: 1 to 2</li>
                    <li>Time-Commitment: 10 hrs / week (for credits)</li>
                    <li>Contact Info: Rachel Puralewski,​​ puralewski@wisc.edu</li>
                </ul>
            </Project>
            <Project name="Identifying Active Extravasation on Arteriograms using Machine Learning">
                Interventional radiologists perform angiograms to identify bleeding before embolization. Bleeding on angiograms is mimicked by artifacts and can be difficult to recognize. This project pairs experts in interventional radiology with experts in computer science and engineering, in order to develop deep learning machine learning tools to identify sites of bleeding on angiograms. We use supervised learning trained on a database of labeled images with bleed sites identified. We have already used ResNet-152 as the first stage classifier and Faster R-CNN as the second stage object detector, and we evaluated images rather than series. We subsequently explored the CNN YOLO with multi-channel preprocessing using time-weighted image aggregation and difference image aggregation to infuse temporal information to emphasize the sites of bleeding. We propose to use more advanced deep learning models in our next stage of modeling development. The first approach will use “attention” to help the object detection model focus on the bleeding region that is of interest, an approach used effectively in similar problems. The second approach will use temporal object detection neural networks that can extract temporal and spatial relation between bleeding sites automatically. We will also explore using machine learning techniques with un-subtracted series, which we suspect will increase our accuracy as machine learning techniques are not limited by human contrast perceptual issues and the raw images avoid motion artifacts associated with subtraction.

                <ul>
                    <li>Contact: Dane Morgan, PhD (UW MS&E, ddmorgan@wisc.edu)</li>
                    <li>Team leads: Mark Kleedehn, MD (UW Radiology, mkleedehn@uwhealth.org), Dane Morgan, PhD (UW MS&E, ddmorgan@wisc.edu), Mingren Shen (UW, Graduate Student, mshen32@wisc.edu).</li>
                    <li>Positions: 4-8 UG students</li>
                    <li>Funding: None at present. Can work for credits.</li>
                    <li>Requirements: 10h/wk.</li>
                </ul>
            </Project>
            <Project name="Application of Machine Learning to CT Characterization of Renal Cell Carcinoma">
                Characterization of renal cell carcinoma (RCC) using classical radiomics has shown association with pathologic features. This project applies advanced machine-learning analysis or deep learning models to tumor segmentations with pathologic data to identify clinically relevant associations. The models will be tested/refined on ex vivo RCC specimens with direct radiologic-pathologic correlation. We have data on approximately 150 RCCs and about 300 radiomics features (anatomic, texture) from each. This imaging data has previously demonstrated some association with pathologic features (e.g. histologic subtype) with basic statistical analysis but we were unable to identify aggressive tumors (nuclear grade 3-4, +sarcomatoid features). We have a second group of segmented tumors from a sarcomatoid rich cohort (approximately 95 patients, with size matched controls) where we were also unable to identify a consistent imaging signature using a classical radiomics approach. These problems may be dramatically improved by application of machine or deep-learning-based methods due to their strong ability to learn the hierarchical latent features of complex data in high dimensional space. We will explore cluster analysis and Random Forest modeling on the present set of radiomics features. Then we will build a deep learning to build a tumor nuclear grade classifier system for CT images. Tumor nuclear grade consists of discrete values 1,2,3,4 and unknown if not applicable. A similar study has been conducted in staging liver fibrosis but no robust demonstration of a deep learning system for classifying tumor nuclear grades in renal masses currently exists. We plan to use U-Net architecture to segment the tumor from the input CT images and then the segmented tumors will be put into a 3D Convolutional Neural Network (CNN) to generate the final tumor nuclear grades for each tumor. We will also consider attention and CNNs to directly link tumor CT images to nuclear grades.

                <ul>
                    <li>Contact: Dane Morgan, PhD (UW MS&E, ddmorgan@wisc.edu)</li>
                    <li>Team leads: Meghan G. Lubner, MD (UW Radiology, mlubner@uwhealth.org), Dane Morgan, PhD (UW MS&E, ddmorgan@wisc.edu), Mingren Shen (UW, Graduate Student, mshen32@wisc.edu).</li>
                    <li>Positions: 4-8 UG students</li>
                    <li>Funding: None at present. Can work for credits.</li>
                    <li>Requirements: 10h/wk.</li>
                </ul>
            </Project>
            <Project name="Categorizing Dendritic Spine Morphology">
                We seek to use the machine learning or AI to categorize dendritic spine morphology as a measure of synapse maturity. Since we have just begun discussing how ML/AI might be incorporated into our project aims, we are open to new ideas.

                <ul>
                    <li>AI/ML Methods & Tools: Supervised classification; Unsupervised classification (e.g.clustering); Categorizing Dendritic Spine Morphology (Neuroscience)</li>
                    <li>Department: Neuroscience</li>
                    <li>Prereqs: ​Anyone with a strong knowledge of Machine Learning is desirable.</li>
                    <li>Number of Open Positions: 1 to 2 </li>
                    <li>Time-Commitment: 5 hrs / credit (for credits) </li>
                    <li> Contact Info: Erik Dent P.I., ​​tenpas@wisc.edu </li>
                </ul>
            </Project>
            <Project name="Exploring Error and Model Domains in Materials Machine Learning">
                I am interested in working with public data and models with natural error estimation methods (e.g., Bayesian approaches like Gaussian Process Regression or ensembles of neural networks) to explore their accuracy. The detailed approaches are not yet worked out and would be part of the team's initial activities.

                <ul>
                    <li>Department: MS &amp; E</li>
                    <li>Prereqs: No background necessary but some machine learning experience preferred.</li>
                    <li>Number of open positions: 4-8</li>
                    <li>Requirements: 10 hrs per week (for credits)</li>
                    <li>Contact: Dane Morgan, PhD (UW MS &amp; E, ddmorgan@wisc.edu)</li>
                </ul>
            </Project>
        </Container>
    );
}

export default Projects;
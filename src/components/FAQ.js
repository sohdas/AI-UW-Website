import React from 'react';
import { Typography, Container } from '@material-ui/core';
import Header from './typographic/Header';
import Subheader from './typographic/Subheader';
import BodyText from './typographic/BodyText';

const FAQ = () => {

    return (
        <Container>
            <Header>
                Frequently Asked Questions
            </Header>

            <Subheader>I am a Freshman in CS. Is this club for me?</Subheader>
            <BodyText>Absolutely! We jump-start freshmen into their AI careers by providing workshops, tutorials, and hands-on learning opportunities.
                 This school year will be new for all of us, so we encourage freshmen to join our Slack at <a href="https://wisconsinai.slack.com" target="_blank"> wisconsinai.slack.com </a> to stay in the loop on upcoming workshops and other virtual events.
            </BodyText>
            
            <Subheader>When are the meetings?</Subheader>
            <BodyText>Our intent is for individual groups (i.e. study groups &amp; project groups) to set up their own regular meeting times. Contact <a href="leadership.html">group leaders</a> for their regular meeting schedule. In addition to these meetings, we have org-wide meetings scheduled every month, socials, and occassional guest speakers that give tech talks (if you want a platform to present your ideas/research, let us know and we might be able to arrange something). Be sure to check out our website’s ‘calendar’ tab for event details. There’s an option to add the calendar to your current Google Calendar on that page (click the plus button).</BodyText>
            
            <Subheader>How do I join AI@UW’s official mailing list?</Subheader>
            <BodyText>Our email list is moderated through Slack &mdash; If you’d like to receive emails regarding club events and projects, please join the Slack group (see the 'Contact' section)!</BodyText>
            
            <Subheader>How much are dues? How do I pay them?</Subheader>
            <BodyText><p style={{'color':'#9a0400'}}> Due to the circumstances surrounding COVID-19, dues will be waived until further notice.</p></BodyText>
            
            <Subheader>I am an AI@UW Alumni. How do I stay in touch?</Subheader>
            <BodyText>Join our Alumni network on <a href="https://www.linkedin.com/groups/13562652/">LinkedIn</a>.</BodyText>

            <Subheader>If I have a project idea, how can I find people to help me?</Subheader>
            <BodyText>The best way to get your project off the ground is to email us a week or two before the semester starts. This way, we can help you create a couple of slides to pitch your project at our kickoff meeting. If you want to start a project mid-semester, you can try to find support for your idea via describing it in our #group-ideas channel on Slack.</BodyText>
            
            <Subheader>How much time per week should I expect to spend on the project or the study groups? (Is every meeting mandatory? )</Subheader>
            <BodyText>It depends on which groups you are in. Generally speaking, if you are in study groups, the expected time commitment would be 2-3 hours weekly (if there is a programming assignment, you might expect to spend more time working on that). However, project groups might be slightly more time-consuming. We don’t recommend getting involved in more than two groups in a given semester</BodyText>
            
            <Subheader>How do I know if I am qualified to join in the project groups? </Subheader>
            <BodyText>Project groups will be advertised in our newsletters at the start of each semester as well as during our kickoff meetings. In addition, we try to keep our website up-to-date with all ongoing projects. Prerequisites will be listed next to each project description (on newsletter/website/kickoff slides).</BodyText>
            
            <Subheader>If I missed the first several meetings, can I still join in the groups? (Can I join in the groups halfway through the semester?)</Subheader>
            <BodyText>You should message the group leader to find out. Some groups progress in content, while some have meetings which act as standalone events (and don’t depend on past meetings).</BodyText>
            
            <Subheader>Can I join multiple groups?</Subheader>
            <BodyText>We strongly recommend students do not attempt to be involved with more than two project groups.</BodyText>
            
        </Container>
    );
}

export default FAQ;
import React, { useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import ReactModal from 'react-modal';
import BlogCard from '../../components/BlogCard';
import Button from '../../components/elements/Button';
import CommunityStoriesData from './_community_stories.json';

export default function CommunityStories() {
    const [communityStories] = useState(CommunityStoriesData);
    const [shareExperiencePopupRef, setShareExperiencePopup] = useState(false);
    const [experienceStepsDescription] = useState(
        "We accept blogs and written content for the community through github. If you have a blog that you' love to feature on our website then you can raise an issue on the website repository on github at "
    );
    return (
        <React.Fragment>
            <div className="community-stories-page">
                <div className="community-stories-page-content-wrapper content-center"
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '90%',
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        marginTop: '3.8rem',
                        paddingTop: '2.4rem',
                        paddingBottom: '2.4rem'
                    }}
                >
                    <img 
                        src="https://images.unsplash.com/photo-1638913660106-73b4bac0db09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
                        alt="developer-image"
                        style={{ width: '540px', height: 'auto', borderRadius: '16px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)' }}
                    />
                    <div className="hero-section-content-wrapper">
                        <h1 className="hero-section-title" style={{ fontSize: '46px' }}>
                            Some documented stories <br />and experiences from <br />our community
                        </h1>
                        <p className="hero-section-description" style={{ fontSize: '18px', fontWeight: '600', marginTop: '0.4rem' }}>
                            You can also share a blog or video content sharing your experiences
                        </p>
                        <div className="hero-section-cta-buttons-wrapper" style={{ marginTop: '1.2rem' }}>
                            <Button style={{ width: '100%' }}
                                onClick={() => setShareExperiencePopup(true)}
                            >Share your experiences</Button>
                        </div>
                    </div>
                </div>
                {/* starting: blogs */}
                <div className="community-stories-blogs-wrapper content-center" style={{
                    marginTop: '4.8rem',
                    padding: '0.6rem 1.2rem'
                }}>
                    <h2 style={{ textAlign: 'center' }}>Blogs and Experiences</h2>
                    <div className="community-stories-card-wrapper"
                        style={{
                            marginTop: '2.4rem',
                            display: 'grid',
                            gridTemplateColumns: 'auto auto',
                            alignItems: 'flex-start',
                            justifyContent: 'space-between',
                            rowGap: '2rem'
                        }}
                    >
                        {communityStories.map((story, index) => (
                            <BlogCard key={index}
                                title={story.title}
                                description={story.description}
                                author={story.author}
                                blogURL={story.url}
                            />
                        ))}
                    </div>
                </div>
                {/* ending: blogs */}
            </div>
            <ReactModal
                isOpen={shareExperiencePopupRef}
                onRequestClose={() => setShareExperiencePopup(false)}
                style={{
                    overlay: {
                        background: 'rgba(0, 0, 0, 0.125)',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    content: {
                        width: 'fit-content',
                        height: 'fit-content',
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        marginTop: 'auto',
                        marginBottom: 'auto',
                        border: 'transparent',
                        fontFamily: 'inherit',
                        borderRadius: '16px',
                        padding: '28px'
                    }
                }}
            >
                <h2 className="share-experience-modal-steps" style={{ textAlign: 'center' }}>We love to see people sharing their learnings with people</h2>
                <div className="steps-wrapper" style={{ textAlign: 'center' }}>
                    <p className="steps-description" style={{
                        fontWeight: '600',
                        fontSize: '18px',
                        marginTop: '2rem',
                        lineHeight: '1.3',
                        width: '56ch',
                        marginRight: 'auto',
                        marginLeft: 'auto'
                    }}>
                        {experienceStepsDescription} 
                        <a href="https://github.com/Supsource/LeetQuestion" target="_blank" rel="website">
                        https://github.com/Supsource/LeetQuestion
                        </a>
                    </p>
                    <div className='close-button-container' style={{ marginTop: '1.2rem' }}>
                        <Button style={{ backgroundColor: 'red', marginLeft: 'auto' }}
                            onClick={() => setShareExperiencePopup(false)}
                        >Close</Button>
                    </div>
                </div>
            </ReactModal>
        </React.Fragment>
    )
}
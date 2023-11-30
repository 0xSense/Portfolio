import React from 'react';

const Resume = () => {
    return(
        <div className="ResumeWrapper">
            <h1>Resume</h1>

            <object 
                type="application/pdf"
                data="src/assets/Nicholas_Ashley_Resume_Software_Developer.pdf"
                width="600"
                height="800"
                className="ResumePDF"
            >
            </object>
        </div>
    );
};

export default Resume;
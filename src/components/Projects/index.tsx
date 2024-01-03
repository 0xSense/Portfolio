import Card from "../Card";
import { bannerElements } from "../../constants";
import './index.scss';
import { BannerButtons } from "../../types";
import React from "react";

const Projects = () => {
    return (
        <div>
            <h1>Projects</h1>
            <div className="ProjectCardWrapper">
                {bannerElements.map((element: BannerButtons) => (
                    <Card 
                        title={element.title}
                        key={element.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
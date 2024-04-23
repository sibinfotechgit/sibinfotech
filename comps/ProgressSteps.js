import React, { useState } from "react";

export default function ProgressSteps() {
    const [progressWidth, setProgressWidth] = useState("12%");
    const [activeStep, setActiveStep] = useState("discovery");

    const handleStepClick = (step, width) => {
      setProgressWidth(width);
      setActiveStep(step);
    };
  return (
    <div>
        <div  className="position-relative">
            <div id="line-progress">
                <div className="progressBar" style={{ width: progressWidth }}></div>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <div className={`step step01 ${activeStep === "discovery" ? "active" : ""}`} onClick={() => handleStepClick("discovery", "12%")}>
                    STAGE 1
                </div>
                <div className={`step step02 ${activeStep === "strategy" ? "active" : ""}`} onClick={() => handleStepClick("strategy", "37%")}>
                    STAGE 2
                </div>
                <div className={`step step03 ${activeStep === "creative" ? "active" : ""}`} onClick={() => handleStepClick("creative", "64%")}>
                    STAGE 3
                </div>
                <div className={`step step04 ${activeStep === "production" ? "active" : ""}`} onClick={() => handleStepClick("production", "100%")}>
                    STAGE 4
                </div>
            </div>
            <div className="taBpro">
                <div className={activeStep === "discovery" ? "discovery active" : "discovery"}>
                    <div className="section-content">
                        <h3 className="customHeading text-center">
                            <span className="text_red">Analysis</span></h3>
                        <div className="row mt-4">
                            <div className="col-lg-6">
                                <h4 className="text-center">
                                    On-Page Analysis</h4>
                                <ul>
                                    <li className="customText">
                                        Study and inspection of current website structure</li>
                                    <li className="customText">
                                        Analyzing inbound and outbound links</li>
                                    <li className="customText">
                                        Internal linking flow check</li>
                                    <li className="customText">
                                        Analyzing header and meta tags</li>
                                    <li className="customText">
                                        Determining hurdles</li>
                                    <li className="customText">
                                        Content review</li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <h4  className="text-center">
                                    Off-Page Analysis</h4>
                                <ul>
                                    <li className="customText">
                                        Analyzing the ranking of existing keywords</li>
                                    <li className="customText">
                                        Competitor study</li>
                                    <li className="customText">
                                        Age determination of the domain</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={activeStep === "strategy" ? "strategy active" : "strategy"}>
                    <div className="section-content">
                        <h3 className="customHeading">
                            <span className="text_red">Planning</span> and <span className="text_red">Developing</span> the strategy</h3>
                        <div className="row mt-4">
                            <div className="col-lg-12">
                                <ul>
                                    <li className="customText">
                                        Identifying popular and relevant keywords</li>
                                    <li className="customText">
                                        Website evaluation and determining the necessary changes in the structure such as backlinks, headings, content, etc.</li>
                                    <li className="customText">
                                        Content analysis and update or addition as per relevance and requirements</li>
                                    <li className="customText">
                                        Strong link building via the guest posts, outreach, and competitive link analysis</li>
                                    <li className="customText">
                                        Finalizing the SEO campaign</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={activeStep === "creative" ? "creative active" : "creative"}>
                    <div className="section-content">
                        <h3 className="customHeading"><span className="text_red">Implementation</span></h3>
                        <div className="row mt-4">
                            <div className="col-lg-12">
                                <ul>
                                    <li className="customText">Finalize the target keywords</li>
                                    <li className="customText">Implementation of the finalized strategy</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={activeStep === "production" ? "production active" : "production"}>
                    <div className="section-content">
                        <h3 className="customHeading"><span className="text_red">Management</span></h3>
                        <div className="row mt-4">
                            <div className="col-lg-12">
                                <ul>
                                    <li className="customText">Weekly updates along with the campaign task performance list</li>
                                    <li className="customText">Dedicated account manager for 27*7*365 support</li>
                                    <li className="customText">Status reports and statistics of organic traffic, rank improvement, returning visitors and other progress measurement factors</li>
                                    <li className="customText">Monthly call for discussing current and future goals</li>
                                    <li className="customText">Regular updates via secure project management tools</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

"use client";

import { useState } from "react";

interface CalculatorData {
    subscribers: number | "";
    totalVideos: number | "";
    sponsoredVideos: number | "";
}

interface CalculationResults {
    sponsorshipRate: number;
    revenueFromSponsored: number;
    adSpendValue: number;
    totalAdSpend: number;
    averageViews: number;
}

interface StepConfig {
    number: number;
    requiresResults: boolean;
    requiredField?: keyof CalculatorData;
}

const STEP_CONFIGURATIONS: StepConfig[] = [
    { number: 1, requiresResults: false },
    { number: 2, requiresResults: false, requiredField: "subscribers" },
    { number: 3, requiresResults: false, requiredField: "totalVideos" },
    { number: 4, requiresResults: true },
];

export default function MonetizationSection() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<CalculatorData>({
        subscribers: "",
        totalVideos: "",
        sponsoredVideos: "",
    });
    const [results, setResults] = useState<CalculationResults | null>(null);

    const handleInputChange = (field: keyof CalculatorData, value: string) => {
        if (value === "") {
            setFormData((prev) => ({ ...prev, [field]: "" }));
        } else {
            const numValue = Number(value);
            if (!isNaN(numValue) && numValue >= 0) {
                setFormData((prev) => ({ ...prev, [field]: numValue }));
            }
        }
    };

    const goToStep = (stepNumber: number) => {
        const stepConfig = STEP_CONFIGURATIONS.find((step) => step.number === stepNumber);
        
        if (!stepConfig) {
            return;
        }

        if (stepConfig.requiresResults && !results) {
            return;
        }

        if (stepConfig.requiredField && !formData[stepConfig.requiredField]) {
            alert("Please fill out all fields before proceeding.");
            return;
        }

        setCurrentStep(stepNumber);
    };

    const nextStep = (step: number) => {
        const currentStepConfig = STEP_CONFIGURATIONS.find((config) => config.number === step);
        
        if (!currentStepConfig) {
            return;
        }

        if (currentStepConfig.requiredField && !formData[currentStepConfig.requiredField]) {
            alert("Please fill out all fields before proceeding.");
            return;
        }

        const nextStepNumber = step + 1;
        const nextStepConfig = STEP_CONFIGURATIONS.find((config) => config.number === nextStepNumber);
        
        if (!nextStepConfig) {
            return;
        }

        setCurrentStep(nextStepNumber);
    };

    const validateAndShowResults = () => {
        if (!formData.subscribers || !formData.totalVideos || !formData.sponsoredVideos) {
            alert("Please fill out all fields before proceeding.");
            return;
        }

        const subscribers = Number(formData.subscribers);
        const totalVideos = Number(formData.totalVideos);
        const sponsoredVideos = Number(formData.sponsoredVideos);

        const baseSubscribers = 30000;
        const baseSponsorshipRate = 300;
        const sponsorshipRate = (subscribers / baseSubscribers) * baseSponsorshipRate;
        const revenueFromSponsored = sponsoredVideos * sponsorshipRate;
        const adSpendRatePerSubscriber = 100 / 30000;
        const adSpendValue = adSpendRatePerSubscriber * subscribers;
        const totalAdSpend = subscribers * adSpendRatePerSubscriber * totalVideos;
        const averageViews = subscribers;

        setResults({
            sponsorshipRate,
            revenueFromSponsored,
            adSpendValue,
            totalAdSpend,
            averageViews,
        });

        setCurrentStep(4);
    };

    const formatCurrency = (value: number) => {
        return value.toFixed(2);
    };

    const formatNumber = (value: number) => {
        return value.toLocaleString();
    };

    return (
        <div
            className="elementor-element elementor-element-f7eaf1a e-flex e-con-boxed e-con"
            data-id="f7eaf1a"
            data-element_type="container"
            data-settings='{"content_width":"boxed"}'
        >
            <div className="e-con-inner">
                <div
                    className="elementor-element elementor-element-e4d8164 elementor-widget__width-initial elementor-widget elementor-widget-heading"
                    data-id="e4d8164"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                >
                    <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">
                            How Much Can I Make From <b> YouTube™ Monetization?</b>
                        </h2>
                    </div>
                </div>
                <div
                    className="elementor-element elementor-element-e5e621d elementor-widget__width-initial elementor-widget elementor-widget-text-editor"
                    data-id="e5e621d"
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                >
                    <div className="elementor-widget-container">
                        <p>
                            Let’s crunch some numbers. Use our calculator to see what
                            you could make from sponsorships and ad revenue each
                            month.
                        </p>
                    </div>
                </div>
                <div
                    className="elementor-element elementor-element-5f5ad18 e-flex e-con-boxed e-con"
                    data-id="5f5ad18"
                    data-element_type="container"
                    data-settings='{"background_background":"classic","content_width":"boxed"}'
                >
                    <div className="e-con-inner">
                        <div
                            className="elementor-element elementor-element-976ce07 elementor-widget elementor-widget-image"
                            data-id="976ce07"
                            data-element_type="widget"
                            data-widget_type="image.default"
                        >
                            <div className="elementor-widget-container">
                                <img
                                    decoding="async"
                                    width={266}
                                    height={73}
                                    src="assets/tubekarma.png"
                                    className="attachment-large size-large wp-image-1786092"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-bda9fd4 elementor-widget elementor-widget-html"
                            data-id="bda9fd4"
                            data-element_type="widget"
                            data-widget_type="html.default"
                        >
                            <div className="elementor-widget-container">
                                <div id="calculator-container">
                                    {/* Step Navigation */}
                                    <div className="steps-nav">
                                        {STEP_CONFIGURATIONS.map((stepConfig) => {
                                            const isActive = currentStep === stepConfig.number;
                                            const isDisabled = stepConfig.requiresResults && !results;
                                            
                                            return (
                                                <div
                                                    key={stepConfig.number}
                                                    className={`${isActive ? "active-step" : ""} ${isDisabled ? "disabled" : ""}`}
                                                    onClick={() => goToStep(stepConfig.number)}
                                                >
                                                    <span>{stepConfig.number}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    {/* Step 1: Subscriber Count */}
                                    <div className={`step ${currentStep === 1 ? "active" : ""}`}>
                                        <div className="input-group">
                                            <label htmlFor="subscribers">
                                                How many subscribers do you have?
                                            </label>
                                            <input
                                                type="number"
                                                id="subscribers"
                                                min={0}
                                                required={true}
                                                value={formData.subscribers === "" ? "" : formData.subscribers}
                                                onChange={(e) => handleInputChange("subscribers", e.target.value)}
                                            />
                                        </div>
                                        <button
                                            className="next-btn"
                                            onClick={() => nextStep(1)}
                                        >
                                            Next Step
                                        </button>
                                    </div>
                                    {/* Step 2: Video Posts Per Month */}
                                    <div className={`step ${currentStep === 2 ? "active" : ""}`}>
                                        <div className="input-group">
                                            <label htmlFor="totalVideos">
                                                How many video posts per month do you have?
                                            </label>
                                            <input
                                                type="number"
                                                id="totalVideos"
                                                min={0}
                                                required={true}
                                                value={formData.totalVideos === "" ? "" : formData.totalVideos}
                                                onChange={(e) => handleInputChange("totalVideos", e.target.value)}
                                            />
                                        </div>
                                        <button
                                            className="next-btn"
                                            onClick={() => nextStep(2)}
                                        >
                                            Next Step
                                        </button>
                                    </div>
                                    {/* Step 3: Sponsored Videos */}
                                    <div className={`step ${currentStep === 3 ? "active" : ""}`}>
                                        <div className="input-group">
                                            <label htmlFor="sponsoredVideos">
                                                How many of them are sponsored?
                                            </label>
                                            <input
                                                type="number"
                                                id="sponsoredVideos"
                                                min={0}
                                                required={true}
                                                value={formData.sponsoredVideos === "" ? "" : formData.sponsoredVideos}
                                                onChange={(e) => handleInputChange("sponsoredVideos", e.target.value)}
                                            />
                                        </div>
                                        <button
                                            className="next-btn"
                                            onClick={() => validateAndShowResults()}
                                        >
                                            Next Step
                                        </button>
                                    </div>
                                    {/* Step 4: Results Display */}
                                    {results && (
                                        <div className={`step ${currentStep === 4 ? "active" : ""}`}>
                                            <div className="result-container">
                                                <h3 id="resultsTitle" className="result-title">
                                                    Monthly Profit from a{" "}
                                                    <span className="subscriberCount">
                                                        {formatNumber(Number(formData.subscribers))}
                                                    </span>{" "}
                                                    Subscriber Channel:
                                                </h3>
                                                <div className="earnings-cont">
                                                    {/* Revenue from Sponsored Videos Section */}
                                                    <div className="result-section revenue">
                                                        <h4>Revenue from shoutouts:</h4>
                                                        <p>
                                                            With{" "}
                                                            <span className="subscriberCount">
                                                                {formatNumber(Number(formData.subscribers))}
                                                            </span>{" "}
                                                            subscribers, brands will pay you an average
                                                            of{" "}
                                                            <span className="brandPayRate">
                                                                ${formatCurrency(results.sponsorshipRate)}
                                                            </span>{" "}
                                                            per sponsored video.
                                                        </p>
                                                        <div className="total-cont">
                                                            <span className="result-value">
                                                                Earnings:
                                                            </span>{" "}
                                                            $
                                                            <span className="revenueFromSponsored">
                                                                {formatCurrency(results.revenueFromSponsored)}
                                                            </span>{" "}
                                                            <span className="month">/ month</span>
                                                        </div>
                                                    </div>
                                                    {/* Ad Spend Section */}
                                                    <div className="result-section ad-spend">
                                                        <h4>Adspend value from videos:</h4>
                                                        <p>
                                                            With{" "}
                                                            <span className="subscriberCount">
                                                                {formatNumber(Number(formData.subscribers))}
                                                            </span>{" "}
                                                            subscribers, each video will have an average
                                                            of{" "}
                                                            <span className="averageViews">
                                                                {formatNumber(results.averageViews)}
                                                            </span>{" "}
                                                            views, equivalent to{" "}
                                                            <span className="adSpendValue">
                                                                ${formatCurrency(results.adSpendValue)}
                                                            </span>{" "}
                                                            in adspend.
                                                        </p>
                                                        <div className="total-cont">
                                                            <span className="result-value">
                                                                Earnings:
                                                            </span>{" "}
                                                            $
                                                            <span className="totalAdSpend">
                                                                {formatCurrency(results.totalAdSpend)}
                                                            </span>{" "}
                                                            <span className="month">/ month</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button className="start-btn" onClick={() => { window.location.href = "#pricing" }}>
                                                    Start My 3 Day Free Trial
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <style
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            "\n                          #calculator-container {\n                            font-family: Montserrat;\n                            padding: 20px;\n                            color: #fff;\n                          }\n\n                          #calculator-container .input-group {\n                            position: relative;\n                            display: flex;\n                            flex-flow: column;\n                            margin-bottom: 20px;\n                          }\n\n                          #calculator-container label {\n                            display: block;\n                            margin-bottom: 15px;\n                            font-family: Montserrat;\n                            font-size: 20px;\n                            font-weight: 600;\n                            line-height: 24px;\n                            text-align: center;\n\n                          }\n\n                          #calculator-container input[type=\"number\"] {\n                            font-weight: 500;\n                          }\n\n                          #calculator-container input[type=\"number\"],\n                          #calculator-container button {\n                            width: 100%;\n                            padding: 15px 20px;\n                            margin-top: 5px;\n                            border-radius: 16px;\n                            border: none;\n                            font-size: 20px;\n                            background-color: #fff;\n                            font-family: Nunito;\n                            max-width: 403px;\n                            margin-left: auto;\n                            margin-right: auto;\n                            display: block;\n\n                          }\n\n                          #calculator-container button {\n                            cursor: pointer;\n                            font-weight: bold;\n                            background: linear-gradient(134.88deg, #FFD600 25.05%, #9D7C08 99.89%);\n                            color: #000;\n                          }\n\n                          #calculator-container .next-btn {\n                            display: flex;\n                            align-items: center;\n                            justify-content: center;\n                          }\n\n                          #calculator-container .next-btn::after {\n                            content: '';\n                            background-image: url(\"data:image/svg+xml,%3Csvg width='25' height='15' viewBox='0 0 25 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M24.7071 8.20711C25.0976 7.81658 25.0976 7.18342 24.7071 6.79289L18.3431 0.428932C17.9526 0.0384078 17.3195 0.0384078 16.9289 0.428932C16.5384 0.819457 16.5384 1.45262 16.9289 1.84315L22.5858 7.5L16.9289 13.1569C16.5384 13.5474 16.5384 14.1805 16.9289 14.5711C17.3195 14.9616 17.9526 14.9616 18.3431 14.5711L24.7071 8.20711ZM0 8.5H24V6.5H0V8.5Z' fill='black'/%3E%3C/svg%3E%0A\");\n                            background-size: contain;\n                            background-repeat: no-repeat;\n                            background-position: center;\n                            height: 1em;\n                            width: 1.2em;\n                            margin-left: 10px;\n                          }\n\n                          #calculator-container .step {\n                            display: none;\n                          }\n\n                          #calculator-container .step.active {\n                            display: block;\n                          }\n\n                          #calculator-container .steps-nav {\n                            display: flex;\n                            justify-content: space-between;\n                            margin-bottom: 50px;\n                            max-width: 515px;\n                            margin-left: auto;\n                            margin-right: auto;\n                            gap: 60px;\n                          }\n\n                          #calculator-container .steps-nav div {\n                            cursor: pointer;\n                            padding: 0.2em 0.45em;\n                            text-align: center;\n                            font-family: Nunito;\n                            font-size: 30px;\n                            font-weight: 700;\n                            line-height: 1em;\n                            border: solid 3px #fff;\n                            border-radius: 100%;\n                            position: relative;\n                          }\n\n                          #calculator-container .steps-nav div:not(:last-child)::after {\n                            content: '';\n                            position: absolute;\n                            right: 0;\n                            left: calc(100% + 30px);\n                            border-top: 3px dashed #fff;\n                            width: 48px;\n                            height: 0;\n                            top: 0;\n                            bottom: 0;\n                            margin: auto;\n\n                          }\n\n                          #calculator-container .steps-nav .active-step {\n                            font-weight: bold;\n                            background-color: #fff;\n                          }\n\n                          #calculator-container .steps-nav .active-step span {\n                            background: linear-gradient(134.88deg, #D11111 25.05%, #000000 99.89%);\n                            -webkit-background-clip: text;\n                            -webkit-text-fill-color: transparent;\n                            background-clip: text;\n                            color: transparent;\n                          }\n\n                          #calculator-container .steps-nav div.disabled {\n                            cursor: not-allowed;\n                          }\n\n                          #calculator-container .result-container {\n                            margin-top: 20px;\n                          }\n\n                          #calculator-container .earnings-cont {\n                            display: flex;\n                            gap: 20px;\n                            max-width: 730px;\n                            margin-left: auto;\n                            margin-right: auto;\n                            width: 100%;\n                          }\n\n                          #calculator-container .result-section {\n                            margin-bottom: 15px;\n                            background-color: #fff;\n                            border-radius: 16px;\n                            padding: 15px 15px;\n                            width: 50%;\n                          }\n\n                          #calculator-container .result-value {\n                            font-weight: bold;\n                          }\n\n                          #calculator-container #resultsTitle {\n                            font-family: Montserrat;\n                            font-size: 20px;\n                            font-weight: 600;\n                            color: #fff;\n                            text-align: center;\n                            margin-bottom: 20px;\n                          }\n\n                          #calculator-container .earnings-cont h4 {\n                            margin-top: 0;\n                            font-size: 20px;\n                            font-weight: 500;\n                            font-family: Montserrat;\n                            color: #000;\n                            line-height: 1.1em;\n                            display: flex;\n                            align-items: center;\n                          }\n\n                          #calculator-container .revenue h4::before,\n                          #calculator-container .ad-spend h4::before {\n                            content: '';\n                            width: 1.5em;\n                            height: 1.5em;\n                            background-size: contain;\n                            background-position: center;\n                            background-repeat: no-repeat;\n                            display: inline-block;\n                            vertical-align: middle;\n                            margin-right: 10px;\n                          }\n\n                          #calculator-container .revenue h4::before {\n                            background-image: url(\"data:image/svg+xml,%3Csvg width='28' height='22' viewBox='0 0 28 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.125 15.1123V19.7498C2.125 20.7811 2.96875 21.6248 4 21.6248C5.03125 21.6248 5.875 20.7811 5.875 19.7498V15.3748C9.275 15.3748 12.525 16.8248 14.8 19.3498L16.275 20.9873C17.4 22.2873 19.6625 21.4311 19.625 19.6998V2.29357C19.6563 0.568572 17.4063 -0.300177 16.275 1.00607L14.8 2.64357C12.525 5.17482 9.275 6.62482 5.875 6.62482H3.375C1.65 6.62482 0.25 8.02482 0.25 9.74982V12.2498C0.25 13.5311 1.025 14.6248 2.125 15.1123ZM4.625 19.7498C4.61875 20.5686 3.38125 20.5686 3.375 19.7498V15.3748H4.625V19.7498ZM15.725 3.48732L17.2 1.84982C17.5875 1.39357 18.3938 1.69982 18.3688 2.29982V19.7061C18.3875 20.3061 17.5875 20.6123 17.1938 20.1561L15.7188 18.5186C13.35 15.8873 10.0125 14.3123 6.49375 14.1436V7.86232C10.025 7.69357 13.3563 6.11857 15.725 3.48732ZM1.5 9.74982C1.5 8.71857 2.34375 7.87482 3.375 7.87482H5.25V14.1248H3.375C2.34375 14.1248 1.5 13.2811 1.5 12.2498V9.74982Z' fill='black'/%3E%3Cpath d='M2.125 15.1123V19.7498C2.125 20.7811 2.96875 21.6248 4 21.6248C5.03125 21.6248 5.875 20.7811 5.875 19.7498V15.3748C9.275 15.3748 12.525 16.8248 14.8 19.3498L16.275 20.9873C17.4 22.2873 19.6625 21.4311 19.625 19.6998V2.29357C19.6563 0.568572 17.4063 -0.300177 16.275 1.00607L14.8 2.64357C12.525 5.17482 9.275 6.62482 5.875 6.62482H3.375C1.65 6.62482 0.25 8.02482 0.25 9.74982V12.2498C0.25 13.5311 1.025 14.6248 2.125 15.1123ZM4.625 19.7498C4.61875 20.5686 3.38125 20.5686 3.375 19.7498V15.3748H4.625V19.7498ZM15.725 3.48732L17.2 1.84982C17.5875 1.39357 18.3938 1.69982 18.3688 2.29982V19.7061C18.3875 20.3061 17.5875 20.6123 17.1938 20.1561L15.7188 18.5186C13.35 15.8873 10.0125 14.3123 6.49375 14.1436V7.86232C10.025 7.69357 13.3563 6.11857 15.725 3.48732ZM1.5 9.74982C1.5 8.71857 2.34375 7.87482 3.375 7.87482H5.25V14.1248H3.375C2.34375 14.1248 1.5 13.2811 1.5 12.2498V9.74982Z' fill='url(%23paint0_linear_133_121)'/%3E%3Cpath d='M22.75 11C22.75 11.3438 23.0312 11.625 23.375 11.625H27.125C27.4688 11.625 27.75 11.3438 27.75 11C27.75 10.6562 27.4688 10.375 27.125 10.375H23.375C23.0312 10.375 22.75 10.6562 22.75 11Z' fill='black'/%3E%3Cpath d='M22.75 11C22.75 11.3438 23.0312 11.625 23.375 11.625H27.125C27.4688 11.625 27.75 11.3438 27.75 11C27.75 10.6562 27.4688 10.375 27.125 10.375H23.375C23.0312 10.375 22.75 10.6562 22.75 11Z' fill='url(%23paint1_linear_133_121)'/%3E%3Cpath d='M24.1813 18.3185C24.7626 18.8935 25.6438 18.0122 25.0626 17.4372L23.1876 15.5622C22.9438 15.3185 22.5501 15.3185 22.3063 15.5622C22.0626 15.806 22.0626 16.1997 22.3063 16.4435L24.1813 18.3185Z' fill='black'/%3E%3Cpath d='M24.1813 18.3185C24.7626 18.8935 25.6438 18.0122 25.0626 17.4372L23.1876 15.5622C22.9438 15.3185 22.5501 15.3185 22.3063 15.5622C22.0626 15.806 22.0626 16.1997 22.3063 16.4435L24.1813 18.3185Z' fill='url(%23paint2_linear_133_121)'/%3E%3Cpath d='M24.1813 3.68123C24.7626 3.10623 25.6438 3.98748 25.0626 4.56248L23.1876 6.43748C22.9438 6.68123 22.5501 6.68123 22.3063 6.43748C22.0626 6.19373 22.0626 5.79998 22.3063 5.55623L24.1813 3.68123Z' fill='black'/%3E%3Cpath d='M24.1813 3.68123C24.7626 3.10623 25.6438 3.98748 25.0626 4.56248L23.1876 6.43748C22.9438 6.68123 22.5501 6.68123 22.3063 6.43748C22.0626 6.19373 22.0626 5.79998 22.3063 5.55623L24.1813 3.68123Z' fill='url(%23paint3_linear_133_121)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_133_121' x1='0.25' y1='0.42143' x2='21.4003' y2='19.6245' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0.25' stop-color='%23D11111'/%3E%3Cstop offset='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear_133_121' x1='22.75' y1='10.3777' x2='23.3405' y2='12.7294' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0.25' stop-color='%23D11111'/%3E%3Cstop offset='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint2_linear_133_121' x1='22.1235' y1='15.3861' x2='25.2497' y2='18.5022' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0.25' stop-color='%23D11111'/%3E%3Cstop offset='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint3_linear_133_121' x1='22.1235' y1='3.50083' x2='25.2497' y2='6.61692' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0.25' stop-color='%23D11111'/%3E%3Cstop offset='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A\");\n                          }\n\n                          #calculator-container .ad-spend h4::before {\n                            background-image: url(\"data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_133_127)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15 28.5C22.4558 28.5 28.5 22.456 28.5 15C28.5 7.54416 22.456 1.49997 15 1.49997C7.54416 1.49997 1.49997 7.54416 1.49997 15C1.49997 22.4558 7.54416 28.5 15 28.5ZM15 30C23.2842 30 30 23.2842 30 15C30 6.71567 23.2842 0 15 0C6.71567 0 0 6.71567 0 15C0 23.2842 6.71567 30 15 30Z' fill='black'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15 28.5C22.4558 28.5 28.5 22.456 28.5 15C28.5 7.54416 22.456 1.49997 15 1.49997C7.54416 1.49997 1.49997 7.54416 1.49997 15C1.49997 22.4558 7.54416 28.5 15 28.5ZM15 30C23.2842 30 30 23.2842 30 15C30 6.71567 23.2842 0 15 0C6.71567 0 0 6.71567 0 15C0 23.2842 6.71567 30 15 30Z' fill='url(%23paint0_linear_133_127)'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18.8977 14.9999L11.9999 10.4014V19.5986L18.8977 14.9999ZM20.2913 14.1263C20.9148 14.542 20.9148 15.458 20.2913 15.8737L12.1322 21.3132C11.4345 21.7784 10.4998 21.278 10.4998 20.4394V9.56053C10.4998 8.7219 11.4345 8.2217 12.1322 8.68692L20.2913 14.1263Z' fill='black'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18.8977 14.9999L11.9999 10.4014V19.5986L18.8977 14.9999ZM20.2913 14.1263C20.9148 14.542 20.9148 15.458 20.2913 15.8737L12.1322 21.3132C11.4345 21.7784 10.4998 21.278 10.4998 20.4394V9.56053C10.4998 8.7219 11.4345 8.2217 12.1322 8.68692L20.2913 14.1263Z' fill='url(%23paint1_linear_133_127)'/%3E%3C/g%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_133_127' x1='1.74209e-07' y1='0.0641732' x2='30' y2='29.9358' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0.25' stop-color='%23D11111'/%3E%3Cstop offset='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear_133_127' x1='10.4998' y1='8.53656' x2='23.1181' y2='18.4653' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0.25' stop-color='%23D11111'/%3E%3Cstop offset='1'/%3E%3C/linearGradient%3E%3CclipPath id='clip0_133_127'%3E%3Crect width='30' height='30' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A\");\n                          }\n\n                          #calculator-container .result-section p {\n                            font-size: 13px;\n                            color: #000;\n                            font-weight: 300;\n                            line-height: 1.3em;\n                          }\n\n                          #calculator-container .total-cont {\n                            font-size: 20px;\n                            color: #000;\n                            font-weight: 600;\n                            border-top: solid 1px #808080;\n                            margin-top: 15px !important;\n                            padding-top: 10px;\n                            display: flex;\n                            align-items: baseline;\n                          }\n\n                          #calculator-container .total-cont .result-value {\n                            font-weight: 500;\n                            font-size: 20px;\n                            margin-right: auto;\n                            padding-right: 10px;\n                          }\n\n                          #calculator-container .total-cont .month {\n                            font-size: 12px;\n                            padding-left: 5px;\n                          }\n\n                          @media only screen and (max-width:767px) {\n                            #calculator-container {\n                              padding: 0;\n                            }\n\n                            #calculator-container .steps-nav div {\n                              font-size: 15px;\n                              border: solid 2px #fff;\n                              padding: 0.6em 0.8em;\n                            }\n\n                            #calculator-container .steps-nav {\n                              margin-bottom: 30px;\n                              gap: 30px;\n                              max-width: 266px;\n                            }\n\n                            #calculator-container .steps-nav div:not(:last-child)::after {\n                              left: calc(100% + 10px);\n                              width: 24px;\n                            }\n\n                            #calculator-container .input-group {\n                              margin-bottom: 10px;\n                            }\n\n                            #calculator-container label {\n                              margin-bottom: 10px;\n                              font-size: 14px;\n                            }\n\n                            #calculator-container input[type=\"number\"],\n                            #calculator-container button {\n                              padding: 13px 15px;\n                              margin-top: 5px;\n                              border-radius: 12px;\n                              font-size: 14px;\n                            }\n\n                            #calculator-container .result-section {\n                              width: 100%;\n                            }\n\n                            #calculator-container .earnings-cont {\n                              flex-flow: column;\n                              gap: 0;\n                            }\n\n                            #calculator-container .earnings-cont h4 {\n                              font-size: 14px;\n                            }\n\n                            #calculator-container .total-cont .result-value {\n                              font-size: 14px;\n                            }\n\n                            #calculator-container .total-cont {\n                              font-size: 14px;\n                            }\n\n                            #calculator-container .total-cont .month {\n                              font-size: 10px;\n                            }\n                          }\n                        "
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
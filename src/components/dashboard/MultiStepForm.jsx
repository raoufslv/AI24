"use client";

import { Step, Stepper, useStepper } from "@/components/ui/stepper";
import { Button } from "@/components/ui/button";


const Step1 = (
  <div className="h-40 flex items-center justify-center my-2 text-primary rounded-md">
    <h1 className="text-xl">Step s1</h1>
  </div>
);

const Step2 = (
  <div className="h-40 flex items-center justify-center my-2 text-primary rounded-md">
    <h1 className="text-xl">Step 2</h1>
  </div>
);

const Step3 = (
  <div className="h-40 flex items-center justify-center my-2 text-primary rounded-md">
    <h1 className="text-xl">Step 3</h1>
  </div>
);
const steps = [
  {
    label: "Basic info",
    //optional: false,
    //isCompleted: false,
    //isSkipped: false,
    //isCurrent: false,
    //isDisabled: false,
    //isLast: false,
    //index: 0,
    content: Step1,
  },
  { label: "advanced info", content: Step2 },
  { label: "Shop info", content: Step3 },
];

export default function MultiStepForm() {
  return (
    <form className="flex w-full flex-col gap-4">
      <Stepper initialStep={0} steps={steps}>
        {steps.map(({ label, content }, index) => {
          return (
            <Step key={index} label={label}>
              <div className="h-40 flex items-center justify-center my-2 text-primary rounded-md">
                <h1 className="text-xl">{content}</h1>
              </div>
            </Step>
          );
        })}
        <Footer />
      </Stepper>
    </form>
  );
}

const Footer = () => {
  const {
    nextStep,
    prevStep,
    resetSteps,
    isDisabledStep,
    hasCompletedAllSteps,
    isLastStep,
    isOptionalStep,
  } = useStepper();
  return (
    <>
      {hasCompletedAllSteps && (
        <div className="h-40 flex items-center justify-center my-2 border bg-secondary text-primary rounded-md">
          <h1 className="text-xl">Woohoo! All steps completed! 🎉</h1>
        </div>
      )}
      <div className="w-full flex justify-end gap-2">
        {hasCompletedAllSteps ? (
          <Button size="sm" onClick={resetSteps}>
            Reset
          </Button>
        ) : (
          <>
            <Button
              disabled={isDisabledStep}
              onClick={prevStep}
              size="sm"
              variant="secondary"
            >
              Prev
            </Button>
            <Button size="sm" onClick={nextStep}>
              {isLastStep ? "Finish" : isOptionalStep ? "Skip" : "Next"}
            </Button>
          </>
        )}
      </div>
    </>
  );
};

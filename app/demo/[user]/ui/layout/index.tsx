import AssessmentComponent from "../assessment";
import PTMModule from "../ptm";
import QuizModule from "../quiz";
import TermDetailsComponent from "../term";
import WorkBookComponent from "../workbook";

function TabContentLayout({
  componentIdentifier,
}: {
  componentIdentifier: React.ReactNode;
}) {
  return (
    <>
      {componentIdentifier === "AssessmentComponent" && <AssessmentComponent />}
      {componentIdentifier === "PTMModule" && <PTMModule />}
      {componentIdentifier === "QuizModule" && <QuizModule />}
      {componentIdentifier === "TermDetailComponent" && (
        <TermDetailsComponent />
      )}
      {componentIdentifier === "WorkbookComponent" && <WorkBookComponent />}
    </>
  );
}

export default TabContentLayout;

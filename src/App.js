import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';
import Landing from './routes/Landing';
import LogIn from './routes/LogIn';
import MyResumes from './routes/MyResumes';
import HelpCenter from './routes/HelpCenter';
import ResumeContent from './routes/ResumeContent';
import SelectTemplate from './routes/SelectTemplate';
import ContactInformation from './routes/ContactInformation';
import WorkExperience from './routes/WorkExperience';
import AreasExpertise from './routes/AreasExpertise';
import EducationTraining from './routes/EducationTraining';
import VolunteerExperience from './routes/VolunteerExperience';
import CareerSummary from './routes/CareerSummary';
import { initialValues } from './formik/initialValues';

function App() {
  return (
    <BrowserRouter>
      <SiteHeader />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='log-in' element={<LogIn />} />
        <Route path='my-resumes' element={<MyResumes />} />
        <Route path='help-center' element={<HelpCenter />} />
        <Route path='resume-content' element={<ResumeContent />} />
        <Route path='select-template' element={<SelectTemplate />} />
        <Route path='career-summary' element={<CareerSummary />} />
        <Route path='contact-information' element={<ContactInformation />} />
        <Route path='work-experience' element={<WorkExperience />} />
        <Route path='areas-expertise' element={<AreasExpertise />} />
        <Route path='education-training' element={<EducationTraining />} />
        <Route path='volunteer-experience' element={<VolunteerExperience />} />
      </Routes>
      <SiteFooter />
    </BrowserRouter>
  );
}

export default App;

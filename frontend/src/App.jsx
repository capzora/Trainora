import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
import Support from "./components/Support/Support";



// Lazy load pages
const ErrorBoundary = lazy(() =>
  import("./components/ErrorBoundary/ErrorBoundary")
);
const LoadingSpinner = lazy(() =>
  import("./components/LoadingComponents/LoadingComponents")
);

const Layout = lazy(() => import("./components/Layout/Layout"));
const Home = lazy(() => import("./page/Home/page"));
const About = lazy(() => import("./page/About Us/page"));
const Contact = lazy(() => import("./page/Contact Us/page"));
const CareerOutcomes = lazy(() => import("./page/CareerOutcomes/page"));
const More = lazy(() => import("./page/More/page"));

const Programs = lazy(() => import("./page/Programs/page"));
const DataScience = lazy(() => import("./page/DataScience/page"));
const DataAnalytics = lazy(() => import("./page/DataAnalytics/page"));
const MERNStack = lazy(() => import("./page/MernStack/page"));
const JavaFullStack = lazy(() => import("./page/JavaFullStack/page"));
const DevOpsEngineering = lazy(() => import("./page/DevOpsEngineering/page"));
const UIUXDesign = lazy(() => import("./page/UIUXDesign/page"));
const Refer = lazy(() => import("./page/Refer & Earn/page"));
const Services = lazy(() => import("./page/Services/page"));
const Who = lazy(() => import("./page/Who We Are/page"));
const NotFound = lazy(() => import("./page/NotFound/page"));
const PaymentPage = lazy(() => import("./page/Payment/page"));
const ResetPassword = lazy(() => import("./page/ResetPassword/Page"));
const ScrollToTop = lazy(()=> import("./components/Common/ScrollToTop"))


const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>
        <ScrollToTop/>
          <Routes>
            {/* Layout handles Navbar & Footer */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />}></Route>
              <Route path="home" element={<Home />}></Route>
              <Route path="about" element={<About />}></Route>

              {/* All Programs */}
              <Route path="programs" element={<Programs />}></Route>
              <Route path="data-science-ai" element={<DataScience />}></Route>
              <Route path="data-analytics" element={<DataAnalytics />}></Route>
              <Route path="mern-stack" element={<MERNStack />}></Route>
              <Route path="java-full-stack" element={<JavaFullStack />}></Route>
              <Route
                path="devops-engineering"
                element={<DevOpsEngineering />}
              ></Route>
              <Route path="ui-ux-designer" element={<UIUXDesign />}></Route>

              <Route path="contact" element={<Contact />}></Route>
              <Route path="career-outcomes" element={<CareerOutcomes />}></Route>

              <Route path="more" element={<More />}></Route>
              <Route path="refer-earn" element={<Refer />}></Route>
              <Route path="services" element={<Services />}></Route>
              <Route path="who-we-are" element={<Who />}></Route>
              <Route path="support" element={<Support/>}></Route>
               <Route path="payment/:courseId" element={<PaymentPage />} />
               <Route path="resetpassword" element={<ResetPassword />} />
              <Route path="*" element={<NotFound />} />
             
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;

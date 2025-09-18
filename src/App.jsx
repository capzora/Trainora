import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";

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
const Internship = lazy(() => import("./page/Internship/page"));
const LeadGeneration = lazy(() => import("./page/Lead Generation/page"));
const More = lazy(() => import("./page/More/page"));

const Programs = lazy(() => import("./page/Programs/page"));
const DataScience = lazy(() => import("./page/DataScience/page"));
const DataAnalytics = lazy(() => import("./page/DataAnalytics/page"));
const MERNStack = lazy(() => import("./page/MERNStack/page"));

const JavaFullStack = lazy(() => import("./page/JavaFullStack/page"));
const DevOpsEngineering = lazy(() => import("./page/DevOpsEngineering/page"));
const UIUXDesign = lazy(() => import("./page/UIUXDesign/page"));

const Refer = lazy(() => import("./page/Refer & Earn/page"));
const Services = lazy(() => import("./page/Services/page"));
const Who = lazy(() => import("./page/Who We Are/page"));
const NotFound = lazy(() => import("./page/NotFound/page"));

const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* Layout handles Navbar & Footer */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />}></Route>
              <Route path="home" element={<Home />}></Route>
              <Route path="about" element={<About />}></Route>

              {/* All Programs */}
              <Route path="programs" element={<Programs />}></Route>
              <Route path="datascience" element={<DataScience />}></Route>
              <Route path="dataanalytics" element={<DataAnalytics />}></Route>
              <Route path="mernstack" element={<MERNStack />}></Route>
              <Route path="javafullstack" element={<JavaFullStack />}></Route>
              <Route
                path="devOpsengineering"
                element={<DevOpsEngineering />}
              ></Route>
              <Route path="uiuxdesiner" element={<UIUXDesign />}></Route>

              <Route path="contact" element={<Contact />}></Route>
              <Route path="internship" element={<Internship />}></Route>
              <Route
                path="lead/generation"
                element={<LeadGeneration />}
              ></Route>
              <Route path="more" element={<More />}></Route>
              <Route path="refer/earn" element={<Refer />}></Route>
              <Route path="services" element={<Services />}></Route>
              <Route path="who" element={<Who />}></Route>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;

// Dependencies
import React, { useState, useEffect } from 'react';

// Components
import { Layout } from '../components/Layout';
import { LeftSection } from '../components/LeftSection';
import { Page } from '../components/Page';
// import { Resume } from '../components/Resume';
import { RitghSection } from '../components/RightSection';

// Utils
import { getData } from '../utils/getData';

const Index = () => {
  const [resumeInfo, setResumeInfo] = useState(null);
  useEffect(() => {
    setTimeout(() => setResumeInfo(getData()), 1000);
  }, []);

  return (
    <Layout>
      {!resumeInfo ? null : (
        <>
          <Page>
            <LeftSection resumeInfo={resumeInfo} />
            <RitghSection resumeInfo={resumeInfo} />
          </Page>
        </>
      )}
    </Layout>
  );
};

export default Index;

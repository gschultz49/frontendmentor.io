import GetJobListingData from "../services/joblistings/getJobListings";
import CSSHead from "../challenges/jobListings/src/components/head";
import Navigation from "../challenges/jobListings/src/components/navigation";
import JobListingContainer from "../challenges/jobListings/src/components/joblistings-container";

const App = (props) => {
  return (
    <>
      <CSSHead />
      <Navigation />
      <JobListingContainer joblistings={props.joblistings} />
      {/* <h1>Job Listings: {JSON.stringify(props.joblistings)}</h1> */}
      <style></style>
      <style jsx global>
        {`
          :root {
            --Desaturated-Dark-Cyan: hsl(180, 29%, 50%);

            --Light-Grayish-Cyan-Background: hsl(180, 52%, 96%);
            --Light-Grayish-Cyan-Filter-Tablets: hsl(180, 31%, 95%);
            --Dark-Grayish-Cyan: hsl(180, 8%, 52%);
            --Very-Dark-Grayish Cyan: hsl(180, 14%, 20%);

            --Font-Size: 15px;
          }
          body{
            font-family: 'Spartan', sans-serif;
            background-color: var(--Light-Grayish-Cyan-Background);
          }
        `}
      </style>
    </>
  );
};

export async function getStaticProps() {
  const joblistings = await GetJobListingData();
  const payload = {
    props: {
      joblistings: joblistings,
    },
  };
  return payload;
}

export default App;

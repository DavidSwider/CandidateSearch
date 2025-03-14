import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import  Candidate from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';
interface CandidateSearchResults {
  login: string;
}
const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate>({
    name: null,
    login: null,
    location: null,
    avatar_url: null,
    email: null,
    html_url: null,
    company: null,
  });



  useEffect(() => {
    const searchForGithubUsers = async () => {
      const userList: CandidateSearchResults[] = await searchGithub();
      const user = await searchGithubUser(userList[0]?.login);
      setCandidate(user);
      console.log(candidate);
    };
    searchForGithubUsers();
  }, []);

  // const [results, setresults] = useState<Candidate[]>([]);
  // const [index, setIndex] = useState<number>(0);

  // const searchForGithubUsers = async () => {
  //   const userList: Candidate[] = await searchGithub();
  //  setresults(userList);
  //  await searchGithubUser(userList[0].username);
  // };

  // const selectCandidate = async (isSelected: boolean) => {
  //   if(isSelected){
  //     let parsedCandidates :Candidate[] = []
  //     const savedCandidates = localStorage.getItem('candidates');
  //     if(typeof savedCandidates === 'string'){
  //       parsedCandidates = JSON.parse(savedCandidates);
  //     }
  //     parsedCandidates.push(candidate);
  //     localStorage.setItem('candidates', JSON.stringify(parsedCandidates));
  //     if(index < results.length - 1){
  //       setIndex(index + 1);
  //       await searchSpecificGithubUser(results[index + 1].username);
  //     }else{
  //       setIndex(0);
  //       await searchSpecificGithubUser(results[0].username);
  //     }
  //   }
  
  // };

  // const searchSpecificGithubUser = async (username: string) => {
  //   const user = await searchGithubUser(username);
  //   setCandidate(user);
  // };

  return (
    <>
      <section id='searchSection'>
      <h1>CandidateSearch</h1>;
      </section>
      <CandidateCard
        currentCandidate={candidate}
        // addToWatchList={addToWatchList}
        // addToSeenItList={addToSeenItList}
      />
    </>
  );
};

export default CandidateSearch;

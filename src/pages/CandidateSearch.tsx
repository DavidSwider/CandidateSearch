import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import type {Candidate} from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate>({
    name: null,
    username: null,
    location: null,
    avatar: null,
    email: null,
    html_url: null,
    company: null,
  });
  const [results, setresults] = useState<Candidate[]>([]);
  const [index, setIndex] = useState<number>(0);

  const searchForGithubUsers = async () => {
    let userList: Candidate[] = await searchGithub();
   setresults(userList);
   await searchGithubUser(userList[0].username);
  };

  const selectCandidate = async (isSelected: boolean) => {
    if(isSelected){
      let parsedCandidates :Candidate[] = []
      const savedCandidates = localStorage.getItem('candidates');
      if(typeof savedCandidates === 'string'){
        parsedCandidates = JSON.parse(savedCandidates);
      }
      parsedCandidates.push(candidate);
      localStorage.setItem('candidates', JSON.stringify(parsedCandidates));
      if(index < results.length - 1){
        setIndex(index + 1);
        await searchSpecificGithubUser(results[index + 1].username);
      }else{
        setIndex(0);
        await searchSpecificGithubUser(results[0].username);
      }
    }
  
  };

  const searchSpecificGithubUser = async (username: string) => {
    const user = await searchGithubUser(username);
    setCandidate(user);
  };

  return (
    <>
      <section id='searchSection'>
      <h1>CandidateSearch</h1>;
      </section>
      <CandidateCard
        currentFilm={currentFilm}
        addToWatchList={addToWatchList}
        addToSeenItList={addToSeenItList}
      />
    </>
  );
};

export default CandidateSearch;

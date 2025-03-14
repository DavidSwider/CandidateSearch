import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
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

  const [results, setResults] = useState<CandidateSearchResults[]>([]);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const searchForGithubUsers = async () => {
      const userList: CandidateSearchResults[] = await searchGithub();
      if (userList.length > 0) {
        const user = await searchGithubUser(userList[0]?.login);
        setCandidate(user);
        setResults(userList.map(user => ({ login: user.login }))); // Adjust this line based on your actual data structure
      }
    };
    searchForGithubUsers();
  }, []);

  const selectCandidate = async (isSelected: boolean) => {
    if (isSelected) {
      let parsedCandidates: Candidate[] = [];
      const savedCandidates = localStorage.getItem('candidates');
      if (typeof savedCandidates === 'string') {
        parsedCandidates = JSON.parse(savedCandidates);
      }
      parsedCandidates.push(candidate);
      localStorage.setItem('candidates', JSON.stringify(parsedCandidates));
      if (index < results.length - 1) {
        setIndex(index + 1);
        await searchSpecificGithubUser(results[index + 1].login);
      } else {
        setIndex(0);
        await searchSpecificGithubUser(results[0].login);
      }
    }
  };

  const skipCandidate = async () => {
    if (index < results.length - 1) {
      setIndex(index + 1);
      await searchSpecificGithubUser(results[index + 1].login);
    } else {
      setIndex(0);
      await searchSpecificGithubUser(results[0].login);
    }
  };

  const searchSpecificGithubUser = async (username: string) => {
    const user = await searchGithubUser(username);
    setCandidate(user);
  };

  return (
    <>
      <section id='searchSection'>
        <h1>CandidateSearch</h1>
        {results.length > 0 ? (
          <>
            <button onClick={() => selectCandidate(true)} className="icon-button save-button">
              <i className="fas fa-plus"></i>
            </button>
            <button onClick={skipCandidate} className="icon-button skip-button">
              <i className="fas fa-minus"></i>
            </button>
            <CandidateCard
              currentCandidate={candidate}
              // addToWatchList={addToWatchList}
              // addToSeenItList={addToSeenItList}
            />
          </>
        ) : (
          <p>No more candidates available.</p>
        )}
      </section>
    </>
  );
};

export default CandidateSearch;

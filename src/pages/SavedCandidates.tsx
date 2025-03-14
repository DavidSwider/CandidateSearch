import { useState, useEffect } from 'react';
import Candidate from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const savedCandidates = localStorage.getItem('candidates');
    if (savedCandidates) {
      setSavedCandidates(JSON.parse(savedCandidates));
    }
  }, []);

  const removeCandidate = (login: string) => {
    const updatedCandidates = savedCandidates.filter(candidate => candidate.login !== login);
    setSavedCandidates(updatedCandidates);
    localStorage.setItem('candidates', JSON.stringify(updatedCandidates));
  };

  return (
    <>
      <h1>Potential Candidates</h1>
      {savedCandidates.length > 0 ? (
        savedCandidates.map((candidate, index) => (
          <CandidateCard key={index} currentCandidate={candidate} removeCandidate={removeCandidate} />
        ))
      ) : (
        <p>No Candidates Have Been Accepted.</p>
      )}
    </>
  );
};

export default SavedCandidates;

import type React from 'react';
import type {Candidate} from '../interfaces/Candidate.interface';
import { IoEyeOutline } from 'react-icons/io5';
import { ImCross } from 'react-icons/im';
import { CgPlayListAdd } from 'react-icons/cg';

type CandidateCardProps = {
  currentCandidate: Candidate;
 
  selectCandidate(isSelected: boolean) : void;
 
};

const CandidateCard = ({
  currentCandidate,
  selectCandidate,
}: CandidateCardProps) => {
  return (
    <>
      {currentCandidate?.Title ? (
        <section className='candidateCard'>
          <figure>
            <img src={`${currentCandidate.Poster}`} alt={`${currentCandidate.Title}`} />
          </figure>
          <article className='details'>
            <h2>{currentCandidate.Title}</h2>
            <p>
              <strong>Directed By:</strong> {currentCandidate.Director}
            </p>
            <p>
              <strong>Starring:</strong> {currentCandidate.Actors}
            </p>
            <p>
              <strong>Released:</strong> {currentCandidate.Released}
            </p>
            <p>
              <strong>Genre:</strong> {currentCandidate.Genre}
            </p>
          </article>
          <article className='plot'>
            <p>
              <strong>Plot:</strong> {currentCandidate.Plot}
            </p>
          </article>
          {onWatchList || onSeenItList ? (
            <aside className='icons'>
              <ImCross
                style={{ fontSize: '40px', cursor: 'pointer' }}
                onClick={(e: React.MouseEvent<SVGSVGElement, MouseEvent>) =>
                  removeFromStorage?.(
                    e,
                    onWatchList,
                    onSeenItList,
                    currentCandidate.Title
                  )
                }
              />
            </aside>
          ) : (
            <aside className='icons'>
              <CgPlayListAdd
                style={{ fontSize: '50px', cursor: 'pointer' }}
                onClick={() => addToWatchList?.()}
              />
              <IoEyeOutline
                style={{ fontSize: '50px', cursor: 'pointer' }}
                onClick={() => addToSeenItList?.()}
              />
            </aside>
          )}
        </section>
      ) : (
        <h1 style={{ margin: '16px 0' }}>Please search for a candidate.</h1>
      )}
    </>
  );
};

export default CandidateCard;
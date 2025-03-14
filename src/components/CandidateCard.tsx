//import type React from 'react';
import  Candidate from '../interfaces/Candidate.interface';
// import { IoEyeOutline } from 'react-icons/io5';
// import { ImCross } from 'react-icons/im';
// import { CgPlayListAdd } from 'react-icons/cg';

type CandidateCardProps = {
  currentCandidate: Candidate;
 
  //selectCandidate(isSelected: boolean) : void;
 
};

const CandidateCard = ({
  currentCandidate,
  //selectCandidate,
}: CandidateCardProps) => {
  return (
    <>
      {currentCandidate?.avatar_url && (
        <section className='candidateCard'>
          <figure>
           
          </figure>
          <article className='details'>
            <img src= {currentCandidate.avatar_url}></img>
            <p>
              <strong>Directed By:</strong> {currentCandidate.name}
            </p>
            <p>
              <strong>Starring:</strong> {currentCandidate.login}
            </p>
            <p>
              <strong>Released:</strong> {currentCandidate.email}
            </p>
            <p>
              <strong>Genre:</strong> {currentCandidate.html_url}
            </p>
          </article>
          <article className='plot'>
            <p>
              <strong>Plot:</strong> {currentCandidate.company}
            </p>
          </article>
          {/* {onWatchList || onSeenItList ? (
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
      ) : ( */}
        {/* <h1 style={{ margin: '16px 0' }}>Please search for a candidate.</h1> */}
            </section>
        )}
    </>
  );
};

export default CandidateCard;
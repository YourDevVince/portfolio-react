import './WorkHistory.css';
import { roles } from '../../data/roles';

export default function WorkHistory() {
  return (
    <div className='work-history'>
      <div className='work-history__container'>
        <div className='work-history__header'>
          <h2 className='work-history__title'>Professional Experience</h2>
          <p className='work-history__subtitle'>
            I've worked across front end development and support, so I'm
            comfortable both shipping features and fixing what gets in the way.
          </p>
        </div>
        <ul className='work-history__grid'>
          {roles.map((role: (typeof roles)[number]) => (
            <li key={role.id} className='work-history__item'>
              <article className='work-history__card glass'>
                <header className='work-history__card-header'>
                  <h3 className='work-history__card-title'>
                    {role.title} | @{role.company}
                  </h3>
                  <p className='work-history__card-summary'>
                    <strong>{role.description.lead}</strong>
                    {role.description.rest}
                  </p>
                </header>
                {role.highlights?.length ? (
                  <ul
                    className='work-history__highlights'
                    aria-label={`${role.title} highlights`}
                  >
                    {role.highlights.map((h) => (
                      <li key={h} className='work-history__highlight'>
                        {h}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

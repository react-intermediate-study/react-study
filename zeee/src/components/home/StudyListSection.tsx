import StudyCard from './StudyCard'
import { studyList } from '../../data/studyData'

export default function StudyListSection() {
  return (
    <section>
      <h2>학습 주제</h2>

      <div>
        {studyList.map((study) => (
          <StudyCard
            key={study.topic}
            topic={study.topic}
            title={study.title}
            description={study.description}
          />
        ))}
      </div>
    </section>
  )
}
import StudyCard from './StudyCard'
import { studyList } from '../../data/studyData'

export default function StudyListSection() {
  return (
    <section className='pb-16 space-y-6'>
      <h2 className='text-2xl font-bold text-slate-900'>학습 주제</h2>
      <p className='text-base mt-2 text-slate-600'>설명</p>
      <div className='grid gap-5 md:grid-cols-2 xl:grid-cols-3'>
        {studyList.map((study) => (
          <StudyCard
            key={study.topic}
            topic={study.topic}
            title={study.title}
            description={study.description}
            tags={study.tags}
          />
        ))}
      </div>
    </section>
  )
}